(function () {
  "use strict";

  var hero = document.getElementById("heroScroll");
  var canvas = document.getElementById("heroCanvas");
  var heroCopy = document.getElementById("heroCopy");
  var heroCaptions = Array.prototype.slice.call(document.querySelectorAll(".hero-step"));
  var heroProgress = document.getElementById("heroProgress");
  var manifesto = document.getElementById("manifestoScroll");
  var manifestoLine = document.getElementById("manifestoLine");
  var home = document.querySelector('[data-view="home"]');
  var pages = Array.prototype.slice.call(document.querySelectorAll("[data-page]"));
  var routeLinks = Array.prototype.slice.call(document.querySelectorAll("[data-route-link]"));
  var ctx = canvas ? canvas.getContext("2d", { alpha: true }) : null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mobileStaticMotion = window.matchMedia("(max-width: 760px)");
  var pixelRatio = 1;
  var width = 0;
  var height = 0;
  var scrollFrame = 0;
  var heroRoute = null;
  var gridCache = null;
  var mobileThreadTop = 0;
  var words = [];
  var layerSettings = [
    { spacing: 64, alpha: 0.075, depth: 1 },
    { spacing: 106, alpha: 0.05, depth: 1.7 },
    { spacing: 164, alpha: 0.03, depth: 2.5 }
  ];
  var stageNames = {
    es: ["Solicitud", "Clasificación", "CRM", "Revisión humana", "Resultado"],
    en: ["Enquiry", "Classification", "CRM", "Human review", "Outcome"]
  };

  function clamp(value, low, high) {
    return Math.max(low, Math.min(high, value));
  }

  function ramp(value, start, end) {
    if (end <= start) return value >= end ? 1 : 0;
    return clamp((value - start) / (end - start), 0, 1);
  }

  function currentLanguage() {
    return document.documentElement.lang === "en" ? "en" : "es";
  }

  function wrapManifestoWords() {
    var nodes = document.querySelectorAll("[data-motion-words]");
    words = [];
    Array.prototype.forEach.call(nodes, function (node) {
      var value = node.textContent.trim();
      node.textContent = "";
      var tokens = value.split(/\s+/);
      tokens.forEach(function (token, index) {
        var word = document.createElement("span");
        word.className = "motion-word";
        word.textContent = token;
        node.appendChild(word);
        words.push(word);
        if (index < tokens.length - 1) node.appendChild(document.createTextNode(" "));
      });
    });
  }

  function getHeroNodes() {
    var mobile = width < 760;
    var xPositions = [0.08, 0.27, 0.48, 0.69, 0.92];
    var yDesktop = [0.76, 0.65, 0.79, 0.66, 0.76];
    var yMobile = [0.80, 0.69, 0.82, 0.68, 0.80];
    var yPositions = yDesktop;
    if (mobile) {
      var stage = heroCopy && heroCopy.closest(".hero-stage");
      var stageTop = stage ? stage.getBoundingClientRect().top : 0;
      var copyBottom = heroCopy ? heroCopy.getBoundingClientRect().bottom - stageTop : height * 0.58;
      var routeTop = copyBottom + 72;
      var routeBottom = height - 44;
      if (routeBottom - routeTop < 72) routeTop = routeBottom - 72;
      var routeRange = Math.max(1, routeBottom - routeTop);
      yPositions = yMobile.map(function (y) {
        return routeTop + ((y - 0.68) / 0.14) * routeRange;
      });
    }
    return xPositions.map(function (x, index) {
      return { x: x * width, y: mobile ? yPositions[index] : yPositions[index] * height };
    });
  }

  function makeRoute(nodes) {
    var points = [{ x: 0, y: nodes[0].y }, nodes[0]];
    for (var index = 1; index < nodes.length; index += 1) {
      var previous = nodes[index - 1];
      var next = nodes[index];
      var middle = (previous.x + next.x) / 2;
      points.push({ x: middle, y: previous.y });
      points.push({ x: middle, y: next.y });
      points.push(next);
    }
    var total = 0;
    for (var pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
      if (pointIndex > 0) {
        var dx = points[pointIndex].x - points[pointIndex - 1].x;
        var dy = points[pointIndex].y - points[pointIndex - 1].y;
        total += Math.hypot(dx, dy);
      }
      points[pointIndex].distance = total;
    }
    var stops = nodes.map(function (node) {
      for (var nodeIndex = 0; nodeIndex < points.length; nodeIndex += 1) {
        if (points[nodeIndex] === node) return points[nodeIndex].distance / total;
      }
      return 1;
    });
    return { points: points, nodes: nodes, total: total, stops: stops };
  }

  function drawGrid(progress, targetContext) {
    var drawingContext = targetContext || ctx;
    var centerX = width * 0.5;
    var centerY = height * 0.55;
    var scale = clamp(width / 1440, 0.72, 1.25);
    layerSettings.forEach(function (layer) {
      var spacing = layer.spacing * scale * (1 + progress * 0.12 / layer.depth);
      var originX = centerX - progress * 24 / layer.depth;
      var originY = centerY;
      drawingContext.beginPath();
      for (var x = originX % spacing; x <= width; x += spacing) {
        var drawX = Math.round(x) + 0.5;
        drawingContext.moveTo(drawX, 0);
        drawingContext.lineTo(drawX, height);
      }
      for (var xBack = originX % spacing - spacing; xBack >= 0; xBack -= spacing) {
        var drawXBack = Math.round(xBack) + 0.5;
        drawingContext.moveTo(drawXBack, 0);
        drawingContext.lineTo(drawXBack, height);
      }
      for (var y = originY % spacing; y <= height; y += spacing) {
        var drawY = Math.round(y) + 0.5;
        drawingContext.moveTo(0, drawY);
        drawingContext.lineTo(width, drawY);
      }
      for (var yBack = originY % spacing - spacing; yBack >= 0; yBack -= spacing) {
        var drawYBack = Math.round(yBack) + 0.5;
        drawingContext.moveTo(0, drawYBack);
        drawingContext.lineTo(width, drawYBack);
      }
      drawingContext.strokeStyle = "rgba(237, 232, 222, " + layer.alpha + ")";
      drawingContext.lineWidth = 1;
      drawingContext.stroke();
    });
  }

  function drawThread(progress, nodes, route) {
    var amount = reduceMotion.matches ? 1 : ramp(progress, 0.04, 0.94);
    var targetDistance = route.total * amount;
    var points = route.points;
    var end = points[0];
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var index = 1; index < points.length; index += 1) {
      var point = points[index];
      var before = points[index - 1];
      if (targetDistance >= point.distance) {
        ctx.lineTo(point.x, point.y);
        end = point;
        continue;
      }
      if (targetDistance > before.distance) {
        var sectionProgress = (targetDistance - before.distance) / (point.distance - before.distance);
        end = {
          x: before.x + (point.x - before.x) * sectionProgress,
          y: before.y + (point.y - before.y) * sectionProgress
        };
        ctx.lineTo(end.x, end.y);
      }
      break;
    }
    ctx.lineJoin = "miter";
    ctx.strokeStyle = "rgba(184, 165, 122, 0.18)";
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.strokeStyle = "#B8A57A";
    ctx.lineWidth = 1.25;
    ctx.stroke();
    if (amount < 1) {
      ctx.beginPath();
      ctx.arc(end.x, end.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#EDE8DE";
      ctx.fill();
    }

    var labels = stageNames[currentLanguage()];
    var labelOpacity = reduceMotion.matches ? 1 : ramp(progress, 0.06, 0.16);
    ctx.font = (width < 720 ? "500 11px " : "500 13px ") + '"Hanken Grotesk", system-ui, sans-serif';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    nodes.forEach(function (node, index) {
      var distance = 0;
      for (var segment = 1; segment < points.length; segment += 1) {
        if (points[segment] === node) {
          distance = points[segment].distance;
          break;
        }
      }
      var lit = amount * route.total >= distance;
      var size = 7;
      ctx.fillStyle = lit ? "#EDE8DE" : "#0A0A09";
      ctx.strokeStyle = lit ? "#B8A57A" : "#2E2C27";
      ctx.lineWidth = 1;
      ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);
      ctx.strokeRect(node.x - size / 2 - 0.5, node.y - size / 2 - 0.5, size + 1, size + 1);
      var labelWidth = ctx.measureText(labels[index]).width;
      var labelX = clamp(node.x, 10 + labelWidth / 2, width - 10 - labelWidth / 2);
      ctx.globalAlpha = labelOpacity;
      ctx.fillStyle = lit ? "rgba(237, 232, 222, 0.94)" : "rgba(142, 137, 125, 0.68)";
      ctx.fillText(labels[index], labelX, node.y + (index % 2 ? 22 : -22));
    });
    ctx.globalAlpha = 1;
  }

  function drawHero(progress, route) {
    if (!ctx || !width || !height) return;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    if (mobileStaticMotion.matches && gridCache) {
      ctx.clearRect(0, mobileThreadTop, width, height - mobileThreadTop);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, mobileThreadTop, width, height - mobileThreadTop);
      ctx.clip();
      ctx.drawImage(gridCache, 0, 0, width, height);
      ctx.restore();
      var mobileNodes = route ? route.nodes : getHeroNodes();
      drawThread(progress, mobileNodes, route || makeRoute(mobileNodes));
      return;
    }
    ctx.clearRect(0, 0, width, height);
    drawGrid(progress);
    var nodes = route ? route.nodes : getHeroNodes();
    drawThread(progress, nodes, route || makeRoute(nodes));
  }

  function cacheMobileGrid() {
    if (!canvas || !ctx || !mobileStaticMotion.matches || !heroRoute) {
      gridCache = null;
      mobileThreadTop = 0;
      return;
    }
    gridCache = document.createElement("canvas");
    gridCache.width = canvas.width;
    gridCache.height = canvas.height;
    var cacheContext = gridCache.getContext("2d", { alpha: true });
    if (!cacheContext) {
      gridCache = null;
      return;
    }
    cacheContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    drawGrid(1, cacheContext);
    mobileThreadTop = Math.max(0, Math.min.apply(null, heroRoute.nodes.map(function (node) { return node.y; })) - 28);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(gridCache, 0, 0, width, height);
  }

  function sectionProgress(section) {
    if (!section || section.hidden) return 0;
    var rect = section.getBoundingClientRect();
    var span = Math.max(1, section.offsetHeight - window.innerHeight);
    return ramp(-rect.top, 0, span);
  }

  function updateHero(progress) {
    if (!hero || hero.hidden || !home || home.hidden) return;
    var keepCopyVisible = reduceMotion.matches || mobileStaticMotion.matches;
    var titleOpacity = keepCopyVisible ? 1 : 1 - ramp(progress, 0.035, 0.145);
    var route = heroRoute || makeRoute(getHeroNodes());
    heroCopy.style.opacity = String(titleOpacity);
    heroCopy.style.transform = keepCopyVisible ? "none" : "translateY(" + (-4 * (1 - titleOpacity)) + "vh)";
    heroCopy.style.pointerEvents = titleOpacity < 0.5 ? "none" : "auto";
    if (heroProgress) heroProgress.style.transform = "scaleX(" + progress + ")";
    var threadProgress = reduceMotion.matches ? 1 : ramp(progress, 0.04, 0.94);
    heroCaptions.forEach(function (caption, index) {
      var start = index === 0 ? 0 : route.stops[index - 1];
      var end = index === heroCaptions.length - 1 ? 1 : route.stops[index];
      var reveal = ramp(threadProgress, start, start + 0.035);
      var clear = index === heroCaptions.length - 1 ? 0 : ramp(threadProgress, end - 0.035, end);
      var opacity = reduceMotion.matches ? 0 : reveal * (1 - clear);
      caption.style.opacity = String(opacity);
      caption.style.transform = "translateY(" + ((1 - reveal) * 14 - clear * 14) + "px)";
    });
    drawHero(progress, route);
  }

  function updateManifesto(progress) {
    if (!manifesto || !home || home.hidden) return;
    var amount = reduceMotion.matches ? 1 : progress;
    if (manifestoLine) manifestoLine.style.transform = reduceMotion.matches ? "scaleY(0)" : "scaleY(" + amount + ")";
    words.forEach(function (word, index) {
      var start = (index / Math.max(1, words.length)) * 0.78;
      var illumination = reduceMotion.matches ? 1 : ramp(amount, start, start + 0.12);
      word.style.opacity = String(0.72 + illumination * 0.28);
    });
    var body = manifesto.querySelector(".manifesto-body");
    if (body) body.style.opacity = String(reduceMotion.matches ? 1 : 0.9 + 0.1 * ramp(amount, 0.68, 0.95));
  }

  function updateFromScroll() {
    scrollFrame = 0;
    if (!home || home.hidden) return;
    // Read both section positions before changing styles. Interleaving layout reads
    // with writes forces Safari to recalculate layout during every scroll frame.
    var heroAmount = sectionProgress(hero);
    var manifestoAmount = sectionProgress(manifesto);
    updateHero(heroAmount);
    updateManifesto(manifestoAmount);
  }

  function scheduleScrollUpdate() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateFromScroll);
  }

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    var rect = canvas.getBoundingClientRect();
    var nextWidth = Math.max(1, rect.width);
    var nextHeight = Math.max(1, rect.height);
    var mobile = window.matchMedia("(max-width: 760px)").matches;
    var nextPixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 2);
    if (nextWidth === width && nextHeight === height && nextPixelRatio === pixelRatio) return;
    width = nextWidth;
    height = nextHeight;
    pixelRatio = nextPixelRatio;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    heroRoute = makeRoute(getHeroNodes());
    cacheMobileGrid();
    scheduleScrollUpdate();
  }

  function currentRoute() {
    var match = window.location.hash.match(/^#\/?([^?]*)/);
    var route = match && match[1] ? match[1] : "";
    return pages.some(function (page) { return page.getAttribute("data-page") === route; }) ? route : "";
  }

  function setMenuClosed() {
    var nav = document.getElementById("siteNav");
    var toggle = document.getElementById("menuToggle");
    if (nav) nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.dispatchEvent(new CustomEvent("monarch:menuclosed"));
  }

  function syncTitle(route) {
    if (!route) return;
    var link = document.querySelector('[data-route-link="' + route + '"]');
    if (link) document.title = link.textContent.trim() + " — MONARCH";
  }

  function route() {
    var active = currentRoute();
    var homeActive = !active;
    if (home) home.hidden = !homeActive;
    pages.forEach(function (page) {
      page.hidden = page.getAttribute("data-page") !== active;
    });
    routeLinks.forEach(function (link) {
      if (link.getAttribute("data-route-link") === active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    setMenuClosed();
    document.dispatchEvent(new CustomEvent("monarch:routechange"));
    if (homeActive) {
      window.scrollTo(0, 0);
      var title = document.querySelector("title");
      if (title && title.hasAttribute("data-i18n")) {
        var language = currentLanguage();
        document.title = language === "en" ? "MONARCH — Systems that make your business run itself." : "MONARCH — Sistemas que hacen que tu negocio avance solo.";
      }
      resizeCanvas();
      updateFromScroll();
    } else {
      syncTitle(active);
      window.scrollTo(0, 0);
    }
  }

  function init() {
    wrapManifestoWords();
    resizeCanvas();
    route();
    window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("hashchange", route);
    document.addEventListener("monarch:languagechanged", function () {
      wrapManifestoWords();
      if (home && !home.hidden) {
        if (mobileStaticMotion.matches) {
          heroRoute = makeRoute(getHeroNodes());
          cacheMobileGrid();
        }
        updateFromScroll();
      }
      var active = currentRoute();
      if (active) syncTitle(active);
    });
    document.addEventListener("monarch:menuclosed", function () {
      var toggle = document.getElementById("menuToggle");
      if (!toggle) return;
      var language = currentLanguage();
      toggle.textContent = language === "en" ? "Menu" : "Menú";
      toggle.setAttribute("aria-label", language === "en" ? "Open menu" : "Abrir menú");
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        if (mobileStaticMotion.matches) {
          heroRoute = makeRoute(getHeroNodes());
          cacheMobileGrid();
        }
        scheduleScrollUpdate();
      });
    }
    reduceMotion.addEventListener ? reduceMotion.addEventListener("change", scheduleScrollUpdate) : reduceMotion.addListener(scheduleScrollUpdate);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
