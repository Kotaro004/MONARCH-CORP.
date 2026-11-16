(function () {
  "use strict";

  /* ---------------------------------------------------------------
   * Translations
   * ------------------------------------------------------------- */
  var translations = {
    es: {
      "meta.title": "MONARCH — Sistemas que hacen que tu negocio avance solo.",
      "meta.description": "MONARCH diseña agentes de IA y sistemas de automatización para pymes españolas. Planes claros desde 300€/mes.",
      "meta.ogTitle": "MONARCH — Sistemas que hacen que tu negocio avance solo.",
      "meta.ogDescription": "Diseñamos e implantamos agentes de IA y automatización para negocios con ambición. Desde 300€/mes.",

      "nav.capabilities": "Capacidades",
      "nav.approach": "Cómo trabajamos",
      "nav.pricing": "Inversión",
      "nav.contact": "Contacto",
      "nav.example": "Ejemplo",
      "nav.system": "Sistema",
      "nav.method": "Método",
      "nav.agenda": "Agenda",
      "projectNotice.label": "Proyecto en desarrollo.",
      "projectNotice.body": "MONARCH aún no opera comercialmente, no presta servicios ni acepta contrataciones. La información sobre servicios y precios es orientativa.",
      "menu.open": "Menú",
      "menu.close": "Cerrar",
      "brand.home": "MONARCH — inicio",
      "nav.aria": "Navegación principal",

      "example.eyebrow": "MONARCH / Ejemplo 01 · un proceso de principio a fin",
      "example.heading": "De una nueva solicitud a una respuesta bien preparada.",
      "example.body": "Explora una simulación de cómo un sistema puede clasificar una petición, ordenar su contexto en el CRM y preparar el siguiente paso para el equipo.",
      "example.cta": "Ver ejemplo interactivo",
      "example.flow1": "Solicitud",
      "example.flow2": "Clasificación",
      "example.flow3": "CRM",
      "example.flow4": "Revisión humana",

      "hero.kicker": "MONARCH / Sistemas para pymes",
      "hero.title": "Sistemas que hacen que tu negocio avance solo.",
      "hero.sub": "Diseñamos agentes de IA y automatizaciones a medida para pymes españolas: menos tareas repetitivas, más tiempo para lo que de verdad mueve el negocio.",
      "hero.ctaPrimary": "Inicia una conversación",
      "hero.ctaSecondary": "Descubre los planes desde 300&nbsp;€/mes",
      "hero.cta": "Inicia una conversación",
      "hero.step1.title": "Solicitud",
      "hero.step1.body": "Una petición llega al sistema.",
      "hero.step2.title": "Clasificación",
      "hero.step2.body": "El sistema entiende de qué se trata y a quién corresponde.",
      "hero.step3.title": "CRM",
      "hero.step3.body": "El contexto queda ordenado, sin copiar datos a mano.",
      "hero.step4.title": "Revisión humana",
      "hero.step4.body": "Una persona valida el resultado y decide.",
      "hero.step5.title": "Resultado",
      "hero.step5.body": "El siguiente paso queda preparado para el equipo.",
      "hero.fact1.title": "Desde 300 €/mes",
      "hero.fact1.body": "Tres niveles de inversión, sin permanencia.",
      "hero.fact2.title": "Agentes de IA",
      "hero.fact2.body": "Entienden el contexto y actúan en cada flujo.",
      "hero.fact3.title": "Automatización conectada",
      "hero.fact3.body": "Traspasos fluidos entre personas y herramientas.",
      "hero.fact4.title": "Sistemas operativos",
      "hero.fact4.body": "Infraestructura clara y medible que se afina con el uso.",
      "hero.factsLabel": "MONARCH en breve",
      "hero.diagramInput": "entrada",
      "hero.diagramOutput": "resultado",
      "hero.footLeft": "Agentes de IA, automatización y sistemas a medida para negocios que quieren crecer sin sumar estructura.",
      "hero.footRight": "Planes desde 300&nbsp;€/mes, sin permanencia.",

      "manifesto.line1": "Tu equipo debería dedicar su tiempo a las decisiones que importan.",
      "manifesto.line2": "Todo lo demás puede moverse solo.",
      "manifesto.body": "Convertimos procesos sueltos, conocimiento disperso y datos infrautilizados en sistemas fiables que trabajan en segundo plano: con precisión, de forma constante y a cualquier escala.",

      "capabilities.heading": "Qué construimos",
      "capability1.title": "Agentes de IA",
      "capability1.body": "Inteligencia especializada que entiende el contexto de tu negocio, actúa por sí sola y extiende el criterio de tu equipo a cada flujo de trabajo.",
      "capability2.title": "Automatización conectada",
      "capability2.body": "Traspasos fluidos entre personas, herramientas y decisiones, para que tu negocio siga en marcha sin fricción entre pasos.",
      "capability3.title": "Sistemas operativos",
      "capability3.body": "Una infraestructura clara y medible, que se vuelve más precisa cada vez que se pone en marcha.",

      "index.system": "Cómo una petición se convierte en una respuesta bien preparada.",
      "index.aria": "Explora MONARCH",
      "index.capabilities": "Agentes de IA, automatización conectada y sistemas operativos.",
      "index.method": "Descubrir, diseñar, implantar y optimizar.",
      "index.pricing": "Planes desde 300 €/mes, sin permanencia.",
      "system.kicker": "MONARCH / Sistema",
      "system.title": "Un sistema convierte una petición en una respuesta bien preparada.",
      "system.lede": "Convertimos procesos sueltos, conocimiento disperso y datos infrautilizados en sistemas fiables que trabajan en segundo plano: con precisión, de forma constante y a cualquier escala.",
      "system.processHeading": "Un proceso, de principio a fin",
      "system.step2.body": "El sistema entiende de qué se trata y a quién corresponde.",
      "system.step3.title": "CRM",
      "system.step3.body": "El contexto queda ordenado en el CRM, sin copiar datos a mano.",
      "system.step4.body": "Una persona valida el resultado y decide. El criterio humano se queda donde más valor aporta.",
      "system.step5.body": "Tu equipo recibe el siguiente paso listo para decidir.",
      "system.exampleLink": "Explora el ejemplo interactivo ↗",
      "system.end": "Tu equipo, en las decisiones que importan.",

      "calc.heading": "Calcula tu ahorro estimado",
      "calc.kicker": "Estimación orientativa",
      "calc.hoursLabel": "Horas semanales en tareas manuales",
      "calc.costLabel": "Coste medio por hora (€)",
      "calc.resultMonthlyLabel": "Ahorro estimado al mes",
      "calc.resultAnnualLabel": "Ahorro estimado al año",
      "calc.disclaimer": "Estimación orientativa, calculada sobre una reducción media del 40% del tiempo dedicado a tareas repetitivas. El resultado real depende de tus procesos.",

      "signal.line": "Menos fricción operativa.<br />Más avance.",

      "approach.heading": "Cómo trabajamos",
      "approach.step1.title": "Descubrir",
      "approach.step1.body": "Mapeamos el trabajo, la fricción y la oportunidad que de verdad merece la pena resolver.",
      "approach.step2.title": "Diseñar",
      "approach.step2.body": "Diseñamos un sistema adaptado a tu forma de operar, no una plantilla genérica.",
      "approach.step3.title": "Implantar",
      "approach.step3.body": "Integramos, probamos y ajustamos hasta que forma parte de cómo funciona tu negocio.",
      "approach.step4.title": "Optimizar",
      "approach.step4.body": "Seguimos de cerca el rendimiento para que el sistema sea cada vez más útil.",

      "proof.quote": "\u201cLos mejores sistemas no se sienten como tecnología: se sienten como un negocio que por fin funciona como debería.\u201d",
      "proof.point1.label": "Claridad",
      "proof.point1.body": "Una sola vista de lo que importa y de lo que toca hacer después.",
      "proof.point2.label": "Capacidad",
      "proof.point2.body": "Más resultados sin sumar estructura ni personal.",
      "proof.point3.label": "Control",
      "proof.point3.body": "El criterio humano se queda justo donde más valor aporta.",

      "pricing.heading": "Niveles de inversión",
      "pricing.intro": "Elige el punto de partida que tenga sentido para el tamaño de tu negocio ahora mismo. Planes desde 300 €/mes, sin permanencia.",
      "pricing.from": "Desde",
      "pricing.perMonth": "/ mes",
      "pricing.tier1.name": "Arranque",
      "pricing.tier1.audience": "Para equipos pequeños que quieren automatizar sus primeras tareas repetitivas.",
      "pricing.tier1.f1": "1 automatización o agente en producción",
      "pricing.tier1.f2": "Integración con las herramientas que ya usas",
      "pricing.tier1.f3": "Revisión mensual de rendimiento",
      "pricing.tier1.f4": "Soporte por email",
      "pricing.tier2.name": "Crecimiento",
      "pricing.tier2.audience": "Para negocios con varios procesos que quieren conectarlos y escalar.",
      "pricing.tier2.f1": "Hasta 3 automatizaciones o agentes conectados entre sí",
      "pricing.tier2.f2": "Panel de seguimiento con métricas clave",
      "pricing.tier2.f3": "Ajustes y mejoras continuas",
      "pricing.tier2.f4": "Soporte prioritario",
      "pricing.tier3.name": "A medida",
      "pricing.tier3.audience": "Para operaciones más complejas que necesitan un sistema completo.",
      "pricing.tier3.f1": "Sistema operativo de IA completo y a medida",
      "pricing.tier3.f2": "Varios agentes trabajando en conjunto",
      "pricing.tier3.f3": "Acompañamiento dedicado y sesiones estratégicas",
      "pricing.tier3.f4": "Prioridad total en desarrollo y soporte",
      "pricing.footnote": "El precio final depende de la complejidad de tus procesos y del número de herramientas a conectar. Lo concretamos juntos antes de empezar.",

      "quiz.heading": "Encuentra tu plan",
      "quiz.intro": "Responde tres preguntas rápidas y te diremos qué nivel de MONARCH encaja mejor contigo, antes de reservar la llamada.",
      "quiz.progressTemplate": "Pregunta {n} de 3",
      "quiz.q1.question": "¿Cuántas personas forman tu equipo?",
      "quiz.q1.o1": "1–5",
      "quiz.q1.o2": "6–20",
      "quiz.q1.o3": "21–50",
      "quiz.q1.o4": "Más de 50",
      "quiz.q2.question": "¿Cuántos procesos quieres automatizar para empezar?",
      "quiz.q2.o1": "1",
      "quiz.q2.o2": "2–3",
      "quiz.q2.o3": "4 o más",
      "quiz.q3.question": "¿Qué presupuesto mensual manejas para esto?",
      "quiz.q3.o1": "Menos de 500&nbsp;€",
      "quiz.q3.o2": "Entre 500&nbsp;€ y 1.500&nbsp;€",
      "quiz.q3.o3": "Más de 1.500&nbsp;€",
      "quiz.back": "Atrás",
      "quiz.resultKicker": "Tu punto de partida recomendado",
      "quiz.resultCta": "Inicia una conversación",
      "quiz.restart": "Volver a empezar",
      "quiz.tiers.arranque.name": "Arranque",
      "quiz.tiers.arranque.body": "Con lo que nos cuentas, el plan Arranque (desde 300\u00A0€/mes) es el punto de partida más lógico: una primera automatización bien hecha, sin sobredimensionar.",
      "quiz.tiers.crecimiento.name": "Crecimiento",
      "quiz.tiers.crecimiento.body": "Con lo que nos cuentas, el plan Crecimiento (desde 800\u00A0€/mes) encaja mejor: varios procesos conectados entre sí y un panel para seguir el rendimiento.",
      "quiz.tiers.medida.name": "A medida",
      "quiz.tiers.medida.body": "Con lo que nos cuentas, un sistema A medida (desde 1.500\u00A0€/mes) tiene más sentido: varios agentes trabajando juntos y acompañamiento dedicado.",

      "contact.kicker": "MONARCH CORP.",
      "contact.line": "El siguiente paso no es un equipo más grande.",
      "contact.heading": "Es un sistema mejor.",
      "contact.cta": "Inicia una conversación",
      "contact.whatsappLabel": "WhatsApp",
      "contact.whatsappAria": "Escríbenos por WhatsApp",
      "agenda.kicker": "MONARCH / Agenda",
      "agenda.title": "Reserva una reunión con MONARCH.",
      "agenda.lede": "Elige el día y la hora que mejor te vengan. La disponibilidad y la reserva se gestionan en HubSpot.",
      "agenda.cta": "Agenda una reunión",
      "agenda.calendarLabel": "Calendario de reservas de HubSpot",
      "agenda.fallbackPrefix": "Si el calendario no aparece,",
      "agenda.fallbackLink": "ábrelo directamente en HubSpot.",
      "contact.note": "Para negocios con ambición que quieren operar de otra manera.",
      "footer.backTop": "Volver arriba",
      "capabilities.kicker": "MONARCH / Capacidades",
      "capabilities.title": "Tres formas de que tu negocio avance solo.",
      "capabilities.outcomesHeading": "Lo que cambia en tu negocio",
      "capabilities.end": "Cuéntanos qué te quita tiempo.",
      "method.kicker": "MONARCH / Método",
      "method.title": "Cuatro pasos, de entender tu trabajo a mejorarlo con el tiempo.",
      "method.lede": "No partimos de una plantilla: partimos de cómo opera tu negocio.",
      "method.end": "El primer paso es una conversación.",
      "pricing.kicker": "MONARCH / Inversión",
      "pricing.title": "Precios claros desde el primer día.",
      "pricing.end": "Antes de decidir, hablemos.",

      "lang.switchTo": "Switch to English",
      "lang.code": "EN"
    },

    en: {
      "meta.title": "MONARCH — Systems that make your business run itself.",
      "meta.description": "MONARCH designs AI agents and automation systems for growing businesses. Clear plans from €300/month.",
      "meta.ogTitle": "MONARCH — Systems that make your business run itself.",
      "meta.ogDescription": "We design and implement AI agents and automation for ambitious businesses. From €300/month.",

      "nav.capabilities": "Capabilities",
      "nav.approach": "How we work",
      "nav.pricing": "Investment",
      "nav.contact": "Contact",
      "nav.example": "Example",
      "nav.system": "System",
      "nav.method": "Method",
      "nav.agenda": "Schedule",
      "projectNotice.label": "Project in development.",
      "projectNotice.body": "MONARCH is not yet operating commercially, providing services, or accepting contracts. Service and pricing information is indicative.",
      "menu.open": "Menu",
      "menu.close": "Close",
      "brand.home": "MONARCH — home",
      "nav.aria": "Main navigation",

      "example.eyebrow": "MONARCH / Example 01 · from intake to follow-up",
      "example.heading": "From a new enquiry to a reply that's ready to send.",
      "example.body": "Explore a simulation of how a system can classify a request, organise its context in the CRM and prepare the team's next step.",
      "example.cta": "Explore the interactive example",
      "example.flow1": "Enquiry",
      "example.flow2": "Classification",
      "example.flow3": "CRM",
      "example.flow4": "Human review",

      "hero.kicker": "MONARCH / Systems for small businesses",
      "hero.title": "Systems that make your business run itself.",
      "hero.sub": "We design AI agents and tailored automations for growing businesses: fewer repetitive tasks, more time for what actually moves the business forward.",
      "hero.ctaPrimary": "Start a conversation",
      "hero.ctaSecondary": "See plans from &euro;300/month",
      "hero.cta": "Start a conversation",
      "hero.step1.title": "Enquiry",
      "hero.step1.body": "A request reaches the system.",
      "hero.step2.title": "Classification",
      "hero.step2.body": "The system understands what it is and where it belongs.",
      "hero.step3.title": "CRM",
      "hero.step3.body": "The context is organised without copying data by hand.",
      "hero.step4.title": "Human review",
      "hero.step4.body": "A person validates the result and decides.",
      "hero.step5.title": "Outcome",
      "hero.step5.body": "The team's next step is ready.",
      "hero.fact1.title": "From €300/month",
      "hero.fact1.body": "Three investment levels, no lock-in.",
      "hero.fact2.title": "AI agents",
      "hero.fact2.body": "They understand context and act across workflows.",
      "hero.fact3.title": "Connected automation",
      "hero.fact3.body": "Smooth handoffs between people and tools.",
      "hero.fact4.title": "Operating systems",
      "hero.fact4.body": "Clear, measurable infrastructure refined through use.",
      "hero.factsLabel": "MONARCH at a glance",
      "hero.diagramInput": "input",
      "hero.diagramOutput": "outcome",
      "hero.footLeft": "AI agents, automation and tailored systems for businesses that want to grow without adding headcount.",
      "hero.footRight": "Plans from &euro;300/month, no lock-in.",

      "manifesto.line1": "Your team should spend its time on the decisions that matter.",
      "manifesto.line2": "Everything else can move on its own.",
      "manifesto.body": "We turn loose processes, scattered know-how and under-used data into dependable systems that work in the background: precisely, consistently, at any scale.",

      "capabilities.heading": "What we build",
      "capability1.title": "AI agents",
      "capability1.body": "Specialised intelligence that understands your business context, takes action on its own, and extends your team's judgement into every workflow.",
      "capability2.title": "Connected automation",
      "capability2.body": "Smooth handoffs between people, tools and decisions, so your business keeps moving without friction between steps.",
      "capability3.title": "Operating systems",
      "capability3.body": "Clear, measurable infrastructure that gets more precise every time it runs.",

      "index.system": "How a request becomes a reply that's ready to send.",
      "index.aria": "Explore MONARCH",
      "index.capabilities": "AI agents, connected automation and operating systems.",
      "index.method": "Discover, design, deploy and optimise.",
      "index.pricing": "Plans from €300/month, no lock-in.",
      "system.kicker": "MONARCH / System",
      "system.title": "A system turns a request into a reply that's ready to send.",
      "system.lede": "We turn loose processes, scattered know-how and under-used data into dependable systems that work in the background: precisely, consistently, at any scale.",
      "system.processHeading": "One process, from start to finish",
      "system.step2.body": "The system understands what it is and where it belongs.",
      "system.step3.title": "CRM",
      "system.step3.body": "Context is organised in the CRM, without copying data by hand.",
      "system.step4.body": "A person validates the result and decides. Human judgement stays where it creates the most value.",
      "system.step5.body": "The team gets the next step ready to decide.",
      "system.exampleLink": "Explore the interactive example ↗",
      "system.end": "Your team, focused on the decisions that matter.",

      "calc.heading": "Calculate your estimated savings",
      "calc.kicker": "Planning estimate",
      "calc.hoursLabel": "Weekly hours on manual tasks",
      "calc.costLabel": "Average cost per hour (€)",
      "calc.resultMonthlyLabel": "Estimated monthly savings",
      "calc.resultAnnualLabel": "Estimated annual savings",
      "calc.disclaimer": "A rough estimate, based on an average 40% reduction in time spent on repetitive tasks. Actual results depend on your processes.",

      "signal.line": "Less operational drag.<br />More forward motion.",

      "approach.heading": "How we work",
      "approach.step1.title": "Discover",
      "approach.step1.body": "We map the work, the friction and the opportunity that's actually worth solving.",
      "approach.step2.title": "Design",
      "approach.step2.body": "We shape a system around how you operate, not a generic template.",
      "approach.step3.title": "Deploy",
      "approach.step3.body": "We integrate, test and refine until it becomes part of how your business runs.",
      "approach.step4.title": "Optimise",
      "approach.step4.body": "We stay close to performance, making the system more useful over time.",

      "proof.quote": "\u201cThe best systems don't feel like technology: they feel like a business finally working the way it should.\u201d",
      "proof.point1.label": "Clarity",
      "proof.point1.body": "One view of what matters and what to do next.",
      "proof.point2.label": "Capacity",
      "proof.point2.body": "More output without adding headcount.",
      "proof.point3.label": "Control",
      "proof.point3.body": "Human judgement stays exactly where it creates the most value.",

      "pricing.heading": "Investment levels",
      "pricing.intro": "Pick the starting point that makes sense for your business right now. Plans from €300/month, no lock-in.",
      "pricing.from": "From",
      "pricing.perMonth": "/ month",
      "pricing.tier1.name": "Starter",
      "pricing.tier1.audience": "For small teams looking to automate their first repetitive tasks.",
      "pricing.tier1.f1": "1 automation or agent in production",
      "pricing.tier1.f2": "Integration with the tools you already use",
      "pricing.tier1.f3": "Monthly performance review",
      "pricing.tier1.f4": "Email support",
      "pricing.tier2.name": "Growth",
      "pricing.tier2.audience": "For businesses with several processes wanting to connect them and scale.",
      "pricing.tier2.f1": "Up to 3 automations or agents connected together",
      "pricing.tier2.f2": "Dashboard with key metrics",
      "pricing.tier2.f3": "Ongoing tuning and improvements",
      "pricing.tier2.f4": "Priority support",
      "pricing.tier3.name": "Custom",
      "pricing.tier3.audience": "For more complex operations that need a complete system.",
      "pricing.tier3.f1": "A complete, tailored AI operating system",
      "pricing.tier3.f2": "Multiple agents working together",
      "pricing.tier3.f3": "Dedicated support and strategy sessions",
      "pricing.tier3.f4": "Top priority on development and support",
      "pricing.footnote": "Final pricing depends on the complexity of your processes and the number of tools to connect. We work it out together before starting.",

      "quiz.heading": "Find your plan",
      "quiz.intro": "Answer three quick questions and we'll tell you which MONARCH level fits you best, before you book the call.",
      "quiz.progressTemplate": "Question {n} of 3",
      "quiz.q1.question": "How many people are on your team?",
      "quiz.q1.o1": "1–5",
      "quiz.q1.o2": "6–20",
      "quiz.q1.o3": "21–50",
      "quiz.q1.o4": "More than 50",
      "quiz.q2.question": "How many processes do you want to automate to start?",
      "quiz.q2.o1": "1",
      "quiz.q2.o2": "2–3",
      "quiz.q2.o3": "4 or more",
      "quiz.q3.question": "What monthly budget do you have for this?",
      "quiz.q3.o1": "Under &euro;500",
      "quiz.q3.o2": "&euro;500 to &euro;1,500",
      "quiz.q3.o3": "Over &euro;1,500",
      "quiz.back": "Back",
      "quiz.resultKicker": "Your recommended starting point",
      "quiz.resultCta": "Start a conversation",
      "quiz.restart": "Start over",
      "quiz.tiers.arranque.name": "Starter",
      "quiz.tiers.arranque.body": "Based on your answers, Starter (from \u20AC300/month) is the most logical starting point: one automation done properly, without overbuilding.",
      "quiz.tiers.crecimiento.name": "Growth",
      "quiz.tiers.crecimiento.body": "Based on your answers, Growth (from \u20AC800/month) is the better fit: several processes connected together, with a dashboard to track performance.",
      "quiz.tiers.medida.name": "Custom",
      "quiz.tiers.medida.body": "Based on your answers, a Custom system (from \u20AC1,500/month) makes more sense: multiple agents working together, with dedicated support.",

      "contact.kicker": "MONARCH CORP.",
      "contact.line": "The next chapter isn't a bigger team.",
      "contact.heading": "It's a better system.",
      "contact.cta": "Start a conversation",
      "contact.whatsappLabel": "WhatsApp",
      "contact.whatsappAria": "Message us on WhatsApp",
      "agenda.kicker": "MONARCH / Schedule",
      "agenda.title": "Book a meeting with MONARCH.",
      "agenda.lede": "Choose the day and time that work best for you. Availability and bookings are managed in HubSpot.",
      "agenda.cta": "Book a meeting",
      "agenda.calendarLabel": "HubSpot booking calendar",
      "agenda.fallbackPrefix": "If the calendar does not appear,",
      "agenda.fallbackLink": "open it directly in HubSpot.",
      "contact.note": "For ambitious businesses ready to operate differently.",
      "footer.backTop": "Back to top",
      "capabilities.kicker": "MONARCH / Capabilities",
      "capabilities.title": "Three ways to make your business run itself.",
      "capabilities.outcomesHeading": "What changes in your business",
      "capabilities.end": "Tell us what's taking your time.",
      "method.kicker": "MONARCH / Method",
      "method.title": "Four steps, from understanding your work to improving it over time.",
      "method.lede": "We don't start from a template. We start with how your business operates.",
      "method.end": "The first step is a conversation.",
      "pricing.kicker": "MONARCH / Investment",
      "pricing.title": "Clear pricing from day one.",
      "pricing.end": "Let's talk before you decide.",

      "lang.switchTo": "Switch to Spanish",
      "lang.code": "ES"
    }
  };

  var STORAGE_KEY = "monarch_lang";
  var currentLang = "es";

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  function t(key) {
    var dict = translations[currentLang] || translations.es;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (translations.es[key] || "");
  }

  function applyTranslations() {
    document.documentElement.setAttribute("lang", currentLang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var value = t(key);
      if (value) nodes[i].innerHTML = value;
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var spec = attrNodes[j].getAttribute("data-i18n-attr");
      var parts = spec.split(":");
      if (parts.length === 2) {
        var attrName = parts[0];
        var attrKey = parts[1];
        var attrValue = t(attrKey);
        if (attrValue) attrNodes[j].setAttribute(attrName, attrValue);
      }
    }

    document.title = t("meta.title");

    var langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.setAttribute("aria-label", t("lang.switchTo"));
      var codeEl = langToggle.querySelector(".lang-toggle-code");
      if (codeEl) codeEl.textContent = t("lang.code");
    }

    var menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
      var menuOpen = document.getElementById("siteNav");
      menuOpen = !!(menuOpen && menuOpen.classList.contains("is-open"));
      menuToggle.textContent = t(menuOpen ? "menu.close" : "menu.open");
      menuToggle.setAttribute("aria-label", menuOpen
        ? (currentLang === "es" ? "Cerrar menú" : "Close menu")
        : (currentLang === "es" ? "Abrir menú" : "Open menu"));
    }

    updateCalculator();
    reapplyQuizLanguage();
    document.dispatchEvent(new CustomEvent("monarch:languagechanged"));
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "es";
    safeSet(STORAGE_KEY, currentLang);
    applyTranslations();
  }

  function initLanguage() {
    var saved = safeGet(STORAGE_KEY);
    currentLang = saved === "en" ? "en" : "es";
    applyTranslations();

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        setLanguage(currentLang === "es" ? "en" : "es");
      });
    }
  }

  /* ---------------------------------------------------------------
   * Contact link handling (site.config.js integration)
   * ------------------------------------------------------------- */
  function getContactUrl(context) {
    var base = (window.MONARCH_CONFIG && window.MONARCH_CONFIG.contactUrl) || "mailto:hello@monarchcorp.es";
    try {
      if (base.indexOf("mailto:") === 0) {
        var atIndex = base.indexOf("?");
        var address = atIndex === -1 ? base : base.substring(0, atIndex);
        var query = atIndex === -1 ? "" : base.substring(atIndex + 1);
        var params = new URLSearchParams(query);
        if (context) {
          var subject = params.get("subject") || "";
          params.set("subject", subject ? subject + " \u2013 " + context : context);
        }
        var qs = params.toString();
        return qs ? address + "?" + qs : address;
      } else {
        var url = new URL(base, window.location.href);
        if (context) url.searchParams.set("plan", context);
        return url.toString();
      }
    } catch (e) {
      return base;
    }
  }

  function applyContactLinks() {
    var links = document.querySelectorAll("[data-contact-link]");
    var url = getContactUrl(null);
    for (var i = 0; i < links.length; i++) {
      if (links[i].id !== "quizResultCta") {
        links[i].setAttribute("href", url);
      }
    }
  }

  /* ---------------------------------------------------------------
   * ROI calculator
   * ------------------------------------------------------------- */
  function updateCalculator() {
    var hoursInput = document.getElementById("calcHours");
    var costInput = document.getElementById("calcCost");
    var monthlyOut = document.getElementById("calcMonthly");
    var annualOut = document.getElementById("calcAnnual");
    if (!hoursInput || !costInput || !monthlyOut || !annualOut) return;

    var hours = Math.max(0, Number(hoursInput.value) || 0);
    var cost = Math.max(0, Number(costInput.value) || 0);
    var REDUCTION = 0.4;
    var WEEKS_PER_MONTH = 4.33;

    var monthlyHoursSaved = hours * WEEKS_PER_MONTH * REDUCTION;
    var monthlyMoney = monthlyHoursSaved * cost;
    var annualMoney = monthlyMoney * 12;

    var locale = currentLang === "es" ? "es-ES" : "en-GB";
    var fmt;
    try {
      fmt = new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
    } catch (e) {
      fmt = { format: function (n) { return Math.round(n) + " €"; } };
    }

    monthlyOut.textContent = fmt.format(monthlyMoney);
    annualOut.textContent = fmt.format(annualMoney);
  }

  function initCalculator() {
    var hoursInput = document.getElementById("calcHours");
    var costInput = document.getElementById("calcCost");
    if (hoursInput) hoursInput.addEventListener("input", updateCalculator);
    if (costInput) costInput.addEventListener("input", updateCalculator);
    updateCalculator();
  }

  /* ---------------------------------------------------------------
   * Qualification quiz
   * ------------------------------------------------------------- */
  var quizScores = { 1: null, 2: null, 3: null };
  var quizCurrentStep = 1;
  var quizComputedTier = null; // 'arranque' | 'crecimiento' | 'medida' | null

  function quizGoToStep(step, shouldFocus) {
    quizCurrentStep = step;
    var investmentPage = document.querySelector('[data-page="inversion"]');
    if (investmentPage) investmentPage.classList.toggle("has-quiz-result", step === "result");
    var steps = document.querySelectorAll(".quiz-step");
    for (var i = 0; i < steps.length; i++) {
      var isActive = steps[i].getAttribute("data-step") === String(step);
      steps[i].classList.toggle("is-active", isActive);
    }
    quizUpdateProgress();

    if (shouldFocus) {
      var activeStep = document.querySelector('.quiz-step[data-step="' + step + '"]');
      if (activeStep) {
        var focusTarget = activeStep.querySelector("legend, h3");
        if (focusTarget) {
          focusTarget.setAttribute("tabindex", "-1");
          try { focusTarget.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
        }
      }
    }
  }

  function quizUpdateProgress() {
    var progressEl = document.getElementById("quizProgress");
    if (!progressEl) return;
    if (quizCurrentStep === "result") {
      progressEl.style.display = "none";
      return;
    }
    progressEl.style.display = "";
    var template = t("quiz.progressTemplate") || "Pregunta {n} de 3";
    progressEl.textContent = template.replace("{n}", String(quizCurrentStep));
  }

  function quizComputeTier() {
    var total = (quizScores[1] || 0) + (quizScores[2] || 0) + (quizScores[3] || 0);
    if (total <= 2) return "arranque";
    if (total <= 4) return "crecimiento";
    return "medida";
  }

  function quizRenderResult() {
    if (!quizComputedTier) return;
    var tierEl = document.getElementById("quizResultTier");
    var bodyEl = document.getElementById("quizResultBody");
    var ctaEl = document.getElementById("quizResultCta");
    if (tierEl) tierEl.textContent = t("quiz.tiers." + quizComputedTier + ".name");
    if (bodyEl) bodyEl.textContent = t("quiz.tiers." + quizComputedTier + ".body");
    if (ctaEl) {
      ctaEl.textContent = t("quiz.resultCta");
      ctaEl.setAttribute("href", getContactUrl(t("quiz.tiers." + quizComputedTier + ".name")));
    }
  }

  function reapplyQuizLanguage() {
    quizUpdateProgress();
    if (quizComputedTier) quizRenderResult();
  }

  function quizHandleOption(button) {
    var step = button.closest(".quiz-step");
    if (!step) return;
    var stepNumber = Number(step.getAttribute("data-step"));
    var score = Number(button.getAttribute("data-score")) || 0;

    var options = step.querySelectorAll(".quiz-option");
    for (var i = 0; i < options.length; i++) {
      options[i].setAttribute("aria-pressed", options[i] === button ? "true" : "false");
    }

    quizScores[stepNumber] = score;

    window.setTimeout(function () {
      if (stepNumber < 3) {
        quizGoToStep(stepNumber + 1, true);
      } else {
        quizComputedTier = quizComputeTier();
        quizRenderResult();
        quizGoToStep("result", true);
      }
    }, 220);
  }

  function quizReset() {
    quizScores = { 1: null, 2: null, 3: null };
    quizComputedTier = null;
    var options = document.querySelectorAll(".quiz-option");
    for (var i = 0; i < options.length; i++) options[i].setAttribute("aria-pressed", "false");
    quizGoToStep(1, true);
  }

  function initQuiz() {
    var optionButtons = document.querySelectorAll(".quiz-option");
    for (var i = 0; i < optionButtons.length; i++) {
      optionButtons[i].setAttribute("aria-pressed", "false");
      optionButtons[i].addEventListener("click", function (event) {
        quizHandleOption(event.currentTarget);
      });
    }

    var backButtons = document.querySelectorAll(".quiz-back");
    for (var j = 0; j < backButtons.length; j++) {
      backButtons[j].addEventListener("click", function (event) {
        var target = Number(event.currentTarget.getAttribute("data-back"));
        quizGoToStep(target, true);
      });
    }

    var restartBtn = document.getElementById("quizRestart");
    if (restartBtn) restartBtn.addEventListener("click", quizReset);

    quizGoToStep(1);
  }

  /* ---------------------------------------------------------------
   * Nav / menu toggle
   * ------------------------------------------------------------- */
  function initMenu() {
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;

    function setOpen(isOpen) {
      nav.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = t(isOpen ? "menu.close" : "menu.open");
      toggle.setAttribute("aria-label", isOpen
        ? (currentLang === "es" ? "Cerrar menú" : "Close menu")
        : (currentLang === "es" ? "Abrir menú" : "Open menu"));
      if (isOpen && window.matchMedia("(max-width: 760px)").matches) {
        var firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    var navLinks = nav.querySelectorAll("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function () {
        setOpen(false);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      } else if (event.key === "Tab" && nav.classList.contains("is-open") && window.matchMedia("(max-width: 760px)").matches) {
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

    document.addEventListener("monarch:routechange", function () {
      setOpen(false);
    });
  }

  /* ---------------------------------------------------------------
   * Misc
   * ------------------------------------------------------------- */
  function setYear() {
    var yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    setYear();
    initLanguage();
    applyContactLinks();
    initCalculator();
    initQuiz();
    initMenu();
  });
})();
