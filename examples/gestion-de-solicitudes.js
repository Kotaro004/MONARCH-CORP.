(function () {
  "use strict";

  var copy = {
    es: {
      "meta.title": "Ejemplo de automatización comercial — MONARCH",
      "meta.description": "Ejemplo interactivo de MONARCH: automatiza la recepción, clasificación y seguimiento de nuevas solicitudes comerciales.",
      "meta.ogTitle": "Un ejemplo de automatización comercial — MONARCH",
      "meta.ogDescription": "De una solicitud a una respuesta preparada, con los datos ordenados en el CRM y una persona al mando.",
      "nav.system": "Sistema",
      "nav.capabilities": "Capacidades",
      "nav.method": "Método",
      "brand.home": "MONARCH — inicio",
      "nav.aria": "Navegación principal",
      "nav.pricing": "Inversión",
      "nav.contact": "Contacto",
      "common.home": "Inicio",
      "common.example": "Ejemplo de automatización",
      "hero.eyebrow": "Ejemplo 01 · proceso comercial",
      "hero.title": "Cada solicitud recibe el siguiente paso correcto.",
      "hero.intro": "Un flujo que recibe una petición, entiende qué necesita el negocio, ordena la información en el CRM y deja preparada una respuesta para revisar.",
      "hero.ctaDemo": "Ver la demo ↓",
      "hero.ctaContact": "Inicia una conversación",
      "hero.beforeLabel": "Antes",
      "hero.before": "Copiar datos, reenviar mensajes y recordar quién necesita respuesta.",
      "hero.afterLabel": "Con el sistema",
      "hero.after": "Solicitud clasificada, CRM actualizado y respuesta lista para revisión.",
      "hero.note": "Ejemplo ilustrativo · adaptable a cada empresa",
      "hero.summaryLabel": "Resumen del flujo",
      "flow.aria": "Pasos del proceso",
      "flow.intake": "Solicitud",
      "flow.context": "Contexto",
      "flow.crm": "CRM",
      "flow.reply": "Respuesta",
      "flow.review": "Revisión humana",
      "demo.eyebrow": "Demo interactiva",
      "demo.fakeData": "Datos de muestra",
      "demo.heading": "Una solicitud entra. El sistema se pone en marcha.",
      "demo.intro": "Ejecuta el flujo paso a paso y mira cómo se organiza el trabajo antes de que una persona revise la respuesta.",
      "demo.incoming": "Nueva solicitud",
      "demo.stepsLabel": "Pasos de la automatización",
      "demo.source": "Formulario web",
      "demo.message": "Cada semana copiamos a mano las nuevas solicitudes entre herramientas y a veces tardamos en contestar. ¿Podemos conectarlo a HubSpot?",
      "demo.tagSize": "Equipo de 12 personas",
      "demo.tagTool": "Usa HubSpot",
      "demo.run": "Simular la automatización",
      "demo.rerun": "Repetir simulación",
      "demo.running": "Ejecutando…",
      "demo.disclaimer": "La simulación se ejecuta en esta página. No se envían datos ni se conecta a un CRM real.",
      "steps.capture.title": "Capturar",
      "steps.capture.body": "La solicitud llega desde el formulario web.",
      "steps.understand.title": "Entender",
      "steps.understand.body": "La IA detecta necesidad, herramientas y encaje.",
      "steps.organise.title": "Ordenar",
      "steps.organise.body": "El contacto y el contexto quedan preparados para el CRM.",
      "steps.prepare.title": "Preparar",
      "steps.prepare.body": "Se redacta una respuesta según lo que pidió.",
      "steps.review.title": "Revisar",
      "steps.review.body": "Una persona aprueba el mensaje antes de enviarlo.",
      "state.waiting": "Pendiente",
      "state.working": "En curso",
      "state.done": "Listo",
      "state.review": "Revisión",
      "output.title": "Resumen del sistema",
      "output.empty": "La salida del proceso aparecerá aquí.",
      "output.pending": "Solicitud clasificada · lista para revisión",
      "output.approvedState": "Respuesta aprobada · siguiente paso preparado",
      "output.leadCreated": "Lead listo para el CRM",
      "output.company": "Empresa",
      "output.fit": "Encaje estimado",
      "output.fitValue": "Alto",
      "output.next": "Siguiente paso",
      "output.nextValue": "Revisión comercial",
      "output.draft": "Borrador de respuesta",
      "output.reply": "Hola Elena, gracias por explicarnos cómo gestionáis las solicitudes. Podemos revisar juntos una conexión con HubSpot y diseñar un flujo que deje cada nuevo contacto organizado y listo para responder.",
      "output.approve": "Aprobar respuesta (simulación)",
      "output.approved": "Respuesta aprobada · Invitación preparada (simulación)",
      "output.footnote": "Una persona conserva la decisión final. No se envía ningún mensaje desde esta demo.",
      "status.complete": "Simulación completada. La solicitud quedó ordenada y la respuesta espera revisión.",
      "status.approved": "Aprobación simulada. El siguiente paso queda preparado, sin enviar nada.",
      "logic.eyebrow": "Qué hace el sistema",
      "logic.heading": "Automatiza el trabajo repetitivo. Conserva el criterio donde importa.",
      "logic.one.label": "01 / Entrada",
      "logic.one.title": "Nada se pierde por el camino.",
      "logic.one.body": "Cada solicitud crea una ficha con sus datos y la conversación original, lista para seguir su recorrido.",
      "logic.two.title": "El equipo recibe una petición entendible.",
      "logic.two.label": "02 / Contexto",
      "logic.two.body": "La IA resume lo que necesita la persona, las herramientas que menciona y cualquier señal que requiera atención.",
      "logic.three.title": "El siguiente paso queda preparado.",
      "logic.three.label": "03 / Acción",
      "logic.three.body": "El CRM conserva el contexto y se prepara una respuesta coherente con la solicitud, sin copiar y pegar.",
      "logic.four.title": "Una persona mantiene la última palabra.",
      "logic.four.label": "04 / Control",
      "logic.four.body": "Un responsable revisa el mensaje y decide si lo aprueba, lo edita o lo deriva a otra persona.",
      "contact.eyebrow": "Tu negocio / tu proceso",
      "contact.kicker": "Un ejemplo. Muchas formas de adaptarlo.",
      "contact.heading": "Hagamos que tu proceso avance solo.",
      "contact.cta": "Inicia una conversación",
      "contact.note": "Empezamos por el trabajo repetitivo que más tiempo te devuelve.",
      "footer.home": "Volver a MONARCH ↑",
      "lang.switch": "Cambiar a inglés",
      "menu.open": "Menú",
      "menu.close": "Cerrar",
      "menu.openLabel": "Abrir menú",
      "menu.closeLabel": "Cerrar menú"
    },
    en: {
      "meta.title": "Sales workflow automation example — MONARCH",
      "meta.description": "An interactive MONARCH example: automate the intake, classification and follow-up of new sales enquiries.",
      "meta.ogTitle": "A sales workflow automation example — MONARCH",
      "meta.ogDescription": "From an enquiry to a prepared reply, with CRM details organised and a person in control.",
      "nav.system": "System",
      "nav.capabilities": "Capabilities",
      "nav.method": "Method",
      "brand.home": "MONARCH — home",
      "nav.aria": "Main navigation",
      "nav.pricing": "Investment",
      "nav.contact": "Contact",
      "common.home": "Home",
      "common.example": "Automation example",
      "hero.eyebrow": "Example 01 · sales workflow",
      "hero.title": "Every enquiry gets the right next step.",
      "hero.intro": "A workflow receives an enquiry, understands what the business needs, organises the context in its CRM and prepares a reply for review.",
      "hero.ctaDemo": "View the demo ↓",
      "hero.ctaContact": "Start a conversation",
      "hero.beforeLabel": "Before",
      "hero.before": "Copying details, forwarding messages and remembering who needs a reply.",
      "hero.afterLabel": "With the system",
      "hero.after": "Enquiry classified, CRM updated and a reply ready for review.",
      "hero.note": "Illustrative example · adapted to each business",
      "hero.summaryLabel": "Workflow summary",
      "flow.aria": "Process steps",
      "flow.intake": "Enquiry",
      "flow.context": "Context",
      "flow.crm": "CRM",
      "flow.reply": "Reply",
      "flow.review": "Human review",
      "demo.eyebrow": "Interactive demo",
      "demo.fakeData": "Sample data",
      "demo.heading": "An enquiry arrives. The system gets to work.",
      "demo.intro": "Run the workflow step by step and see how the work is organised before a person reviews the reply.",
      "demo.incoming": "New enquiry",
      "demo.stepsLabel": "Automation steps",
      "demo.source": "Website form",
      "demo.message": "Each week we manually copy new enquiries between tools and sometimes take too long to reply. Can we connect this to HubSpot?",
      "demo.tagSize": "Team of 12",
      "demo.tagTool": "Uses HubSpot",
      "demo.run": "Run the automation demo",
      "demo.rerun": "Run the demo again",
      "demo.running": "Running…",
      "demo.disclaimer": "This simulation runs on this page. No data is sent and no live CRM is connected.",
      "steps.capture.title": "Capture",
      "steps.capture.body": "The enquiry arrives from the website form.",
      "steps.understand.title": "Understand",
      "steps.understand.body": "AI identifies the need, tools and fit.",
      "steps.organise.title": "Organise",
      "steps.organise.body": "The contact and context are prepared for the CRM.",
      "steps.prepare.title": "Prepare",
      "steps.prepare.body": "A reply is drafted around what they asked for.",
      "steps.review.title": "Review",
      "steps.review.body": "A person approves the message before it is sent.",
      "state.waiting": "Waiting",
      "state.working": "Working",
      "state.done": "Ready",
      "state.review": "Review",
      "output.title": "System summary",
      "output.empty": "The workflow output will appear here.",
      "output.pending": "Enquiry classified · ready for review",
      "output.approvedState": "Reply approved · next step prepared",
      "output.leadCreated": "Lead ready for the CRM",
      "output.company": "Company",
      "output.fit": "Estimated fit",
      "output.fitValue": "High",
      "output.next": "Next step",
      "output.nextValue": "Sales review",
      "output.draft": "Suggested reply",
      "output.reply": "Hi Elena, thanks for explaining how you handle enquiries. We can review a HubSpot connection together and design a workflow that keeps each new contact organised and ready for a reply.",
      "output.approve": "Approve reply (simulation)",
      "output.approved": "Reply approved · Invitation prepared (simulation)",
      "output.footnote": "A person keeps the final say. No message is sent from this demo.",
      "status.complete": "Simulation complete. The enquiry is organised and the reply is waiting for review.",
      "status.approved": "Approval simulated. The next step is ready, and nothing has been sent.",
      "logic.eyebrow": "What the system does",
      "logic.heading": "Automate the repetitive work. Keep judgement where it matters.",
      "logic.one.label": "01 / Intake",
      "logic.one.title": "Nothing slips through the cracks.",
      "logic.one.body": "Each enquiry creates a record with its details and original conversation, ready for the next step.",
      "logic.two.title": "Your team gets a clear request.",
      "logic.two.label": "02 / Context",
      "logic.two.body": "AI summarises what the person needs, the tools they mention and any signals that need attention.",
      "logic.three.title": "The next step is prepared.",
      "logic.three.label": "03 / Action",
      "logic.three.body": "The CRM keeps the context and a relevant reply is drafted, without copying and pasting.",
      "logic.four.title": "A person has the final say.",
      "logic.four.label": "04 / Control",
      "logic.four.body": "A team member reviews the message and decides whether to approve, edit or route it to someone else.",
      "contact.eyebrow": "Your business / your process",
      "contact.kicker": "One example. Many ways to adapt it.",
      "contact.heading": "Let's make your process run smoothly.",
      "contact.cta": "Start a conversation",
      "contact.note": "We start with the repetitive work that gives your team time back.",
      "footer.home": "Back to MONARCH ↑",
      "lang.switch": "Switch to Spanish",
      "menu.open": "Menu",
      "menu.close": "Close",
      "menu.openLabel": "Open menu",
      "menu.closeLabel": "Close menu"
    }
  };

  var STORAGE_KEY = "monarch_lang";
  var currentLang = "es";
  var runButton = document.getElementById("runDemo");
  var approveButton = document.getElementById("approveDemo");
  var output = document.getElementById("demoOutput");
  var outputEmpty = document.getElementById("outputEmpty");
  var outputResult = document.getElementById("outputResult");
  var outputState = document.getElementById("outputState");
  var liveStatus = document.getElementById("demoLiveStatus");
  var steps = Array.prototype.slice.call(document.querySelectorAll("[data-demo-step]"));
  var running = false;
  var completed = false;
  var approved = false;
  var runTimeouts = [];

  function t(key) {
    return (copy[currentLang] && copy[currentLang][key]) || copy.es[key] || "";
  }

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* Storage is optional. */ }
  }

  function updateDemoLanguage() {
    for (var i = 0; i < steps.length; i++) {
      var state = steps[i].querySelector("[data-step-state]");
      if (!state) continue;
      if (steps[i].classList.contains("is-complete")) state.textContent = t("state.done");
      else if (steps[i].classList.contains("is-review")) state.textContent = t("state.review");
      else if (steps[i].classList.contains("is-active")) state.textContent = t("state.working");
      else state.textContent = t("state.waiting");
    }

    if (completed) outputState.textContent = approved ? t("output.approvedState") : t("output.pending");
    if (approveButton) {
      approveButton.querySelector("span").textContent = approved ? t("output.approved") : t("output.approve");
    }
    if (runButton) {
      var runLabel = runButton.querySelector("span");
      if (runLabel) runLabel.textContent = running ? t("demo.running") : (completed ? t("demo.rerun") : t("demo.run"));
    }
  }

  function applyLanguage(language) {
    currentLang = language === "en" ? "en" : "es";
    document.documentElement.lang = currentLang;
    var nodes = document.querySelectorAll("[data-example-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-example-i18n");
      if (t(key)) nodes[i].innerHTML = t(key);
    }

    var metaNodes = document.querySelectorAll("[data-example-meta]");
    for (var j = 0; j < metaNodes.length; j++) {
      var meta = metaNodes[j];
      var metaKey = meta.getAttribute("data-example-meta");
      meta.setAttribute("content", t("meta." + metaKey.replace(":", ".")));
    }

    var ariaNodes = document.querySelectorAll("[data-example-aria]");
    for (var ariaIndex = 0; ariaIndex < ariaNodes.length; ariaIndex++) {
      var ariaParts = ariaNodes[ariaIndex].getAttribute("data-example-aria").split(":");
      if (ariaParts.length === 2 && t(ariaParts[1])) ariaNodes[ariaIndex].setAttribute(ariaParts[0], t(ariaParts[1]));
    }

    document.title = t("meta.title");
    var langButton = document.getElementById("langToggle");
    if (langButton) {
      langButton.setAttribute("aria-label", t("lang.switch"));
      var code = langButton.querySelector(".lang-toggle-code");
      if (code) code.textContent = currentLang === "es" ? "EN" : "ES";
    }
    var menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
      var menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.textContent = t(menuIsOpen ? "menu.close" : "menu.open");
      menuToggle.setAttribute("aria-label", t(menuIsOpen ? "menu.closeLabel" : "menu.openLabel"));
    }
    safeSet(STORAGE_KEY, currentLang);
    updateDemoLanguage();
  }

  function setStepState(step, className) {
    step.classList.remove("is-active", "is-complete", "is-review");
    if (className) step.classList.add(className);
    var state = step.querySelector("[data-step-state]");
    if (!state) return;
    if (className === "is-complete") state.textContent = t("state.done");
    else if (className === "is-active") state.textContent = t("state.working");
    else if (className === "is-review") state.textContent = t("state.review");
    else state.textContent = t("state.waiting");
  }

  function clearRun() {
    while (runTimeouts.length) window.clearTimeout(runTimeouts.pop());
    running = false;
  }

  function runSimulation() {
    if (running) return;
    clearRun();
    running = true;
    completed = false;
    approved = false;
    liveStatus.textContent = "";
    approveButton.disabled = true;
    approveButton.classList.remove("is-approved");
    approveButton.setAttribute("aria-pressed", "false");
    output.classList.remove("is-ready");
    outputEmpty.hidden = false;
    outputResult.hidden = true;
    for (var i = 0; i < steps.length; i++) setStepState(steps[i], "");
    updateDemoLanguage();
    runButton.disabled = true;

    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var delay = reducedMotion ? 80 : 520;
    for (var stepIndex = 0; stepIndex < steps.length; stepIndex++) {
      (function (index) {
        runTimeouts.push(window.setTimeout(function () {
          setStepState(steps[index], index === steps.length - 1 ? "is-review" : "is-active");
          if (index > 0 && index < steps.length) setStepState(steps[index - 1], "is-complete");
          if (index === steps.length - 1) {
            completed = true;
            running = false;
            output.classList.add("is-ready");
            outputEmpty.hidden = true;
            outputResult.hidden = false;
            approveButton.disabled = false;
            runButton.disabled = false;
            liveStatus.textContent = t("status.complete");
            updateDemoLanguage();
          }
        }, delay * (index + 1)));
      })(stepIndex);
    }
  }

  function approveSimulation() {
    if (!completed || approved) return;
    approved = true;
    setStepState(steps[steps.length - 1], "is-complete");
    outputState.textContent = t("output.approvedState");
    approveButton.disabled = true;
    approveButton.classList.add("is-approved");
    approveButton.setAttribute("aria-pressed", "true");
    approveButton.querySelector("span").textContent = t("output.approved");
    liveStatus.textContent = t("status.approved");
  }

  function initMenu() {
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;
    function setMenuOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = t(open ? "menu.close" : "menu.open");
      toggle.setAttribute("aria-label", t(open ? "menu.closeLabel" : "menu.openLabel"));
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      if (open && window.matchMedia("(max-width: 760px)").matches) {
        var firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    }
    toggle.addEventListener("click", function () {
      setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenuOpen(false); });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        toggle.focus();
      } else if (event.key === "Tab" && toggle.getAttribute("aria-expanded") === "true" && window.matchMedia("(max-width: 760px)").matches) {
        var focusable = Array.prototype.slice.call(nav.querySelectorAll("a, button")).filter(function (node) {
          return !node.disabled && node.getClientRects().length > 0;
        });
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === toggle)) {
          event.preventDefault();
          if (last) last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          if (first) first.focus();
        }
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
  document.getElementById("langToggle").addEventListener("click", function () {
    applyLanguage(currentLang === "es" ? "en" : "es");
  });
  runButton.addEventListener("click", runSimulation);
  approveButton.addEventListener("click", approveSimulation);
  initMenu();
  applyLanguage(safeGet(STORAGE_KEY));
})();
