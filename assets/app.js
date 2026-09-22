(function () {
  "use strict";

  function currentLanguage() {
    return document.documentElement.lang === "en" ? "en" : "de";
  }

  function languageCopy(german, english) {
    return currentLanguage() === "en" ? english : german;
  }

  const scenarios = {
    leads: {
      title: "Lead Signal Router",
      input: ["Webformular", "Bedarf + Kontext"],
      ai: ["Intent erkennen", "Priorität + Kategorie"],
      output: ["Passendes Routing", "CRM + Team-Alert"],
      impact: ["Schnellere Reaktion", "Priorisierte Anfragen erreichen ohne Umwege die richtige Person."],
      stack: ["Form", "API", "LLM", "CRM"]
    },
    content: {
      title: "Content Prep Engine",
      input: ["Themen & Quellen", "Briefing + Rohmaterial"],
      ai: ["Struktur ableiten", "Entwurf + Varianten"],
      output: ["Review-Paket", "CMS + Freigabe"],
      impact: ["Mehr Zeit fürs Feintuning", "Wiederkehrende Vorarbeit wird gebündelt, die redaktionelle Kontrolle bleibt beim Menschen."],
      stack: ["Input", "Python", "LLM", "CMS"]
    },
    support: {
      title: "Smart Request Triage",
      input: ["E-Mail / Formular", "Frage + Metadaten"],
      ai: ["Anliegen verstehen", "Kategorie + Dringlichkeit"],
      output: ["Team-Zuweisung", "Ticket + Antwortentwurf"],
      impact: ["Weniger Weiterleiten", "Anfragen starten mit Kontext beim passenden Team und können schneller beantwortet werden."],
      stack: ["Inbox", "API", "LLM", "Tickets"]
    },
    website: {
      title: "Conversion Insight Loop",
      input: ["Nutzungssignale", "Klicks + Suchanfragen"],
      ai: ["Muster verdichten", "Hypothesen priorisieren"],
      output: ["Testvorschlag", "Backlog + Messplan"],
      impact: ["Gezielter optimieren", "Aus verstreuten Signalen entstehen nachvollziehbare, testbare Verbesserungen."],
      stack: ["Analytics", "API", "LLM", "A/B Test"]
    }
  };

  const scenariosEn = {
    leads: {
      title: "Lead Signal Router",
      input: ["Web form", "Needs + context"],
      ai: ["Detect intent", "Priority + category"],
      output: ["Smart routing", "CRM + team alert"],
      impact: ["Faster response", "Prioritised enquiries reach the right person without unnecessary detours."],
      stack: ["Form", "API", "LLM", "CRM"]
    },
    content: {
      title: "Content Prep Engine",
      input: ["Topics & sources", "Brief + raw material"],
      ai: ["Build a structure", "Draft + variations"],
      output: ["Review package", "CMS + approval"],
      impact: ["More time for refinement", "Recurring preparation is streamlined while editorial control stays with people."],
      stack: ["Input", "Python", "LLM", "CMS"]
    },
    support: {
      title: "Smart Request Triage",
      input: ["Email / form", "Question + metadata"],
      ai: ["Understand the request", "Category + urgency"],
      output: ["Team assignment", "Ticket + reply draft"],
      impact: ["Less forwarding", "Requests arrive with context at the right team and can be answered faster."],
      stack: ["Inbox", "API", "LLM", "Tickets"]
    },
    website: {
      title: "Conversion Insight Loop",
      input: ["Usage signals", "Clicks + searches"],
      ai: ["Identify patterns", "Prioritise hypotheses"],
      output: ["Test proposal", "Backlog + measurement plan"],
      impact: ["Optimise with purpose", "Scattered signals become clear, testable improvements."],
      stack: ["Analytics", "API", "LLM", "A/B test"]
    }
  };

  const buttons = Array.from(document.querySelectorAll(".scenario-button"));
  const nodes = Array.from(document.querySelectorAll(".flow-node"));
  const solutionPanel = document.querySelector(".solution-panel");
  const refs = {
    title: document.getElementById("solution-title"),
    input: document.getElementById("node-input"),
    inputDetail: document.getElementById("node-input-detail"),
    ai: document.getElementById("node-ai"),
    aiDetail: document.getElementById("node-ai-detail"),
    output: document.getElementById("node-output"),
    outputDetail: document.getElementById("node-output-detail"),
    impact: document.getElementById("impact-value"),
    impactCopy: document.getElementById("impact-copy"),
    stack: document.getElementById("stack-tags")
  };

  function renderScenario(key) {
    const data = (currentLanguage() === "en" ? scenariosEn : scenarios)[key];
    if (!data) return;

    nodes.forEach(function (node) { node.classList.add("is-updating"); });

    window.setTimeout(function () {
      refs.title.textContent = data.title;
      refs.input.textContent = data.input[0];
      refs.inputDetail.textContent = data.input[1];
      refs.ai.textContent = data.ai[0];
      refs.aiDetail.textContent = data.ai[1];
      refs.output.textContent = data.output[0];
      refs.outputDetail.textContent = data.output[1];
      refs.impact.textContent = data.impact[0];
      refs.impactCopy.textContent = data.impact[1];
      refs.stack.replaceChildren.apply(refs.stack, data.stack.map(function (item) {
        const tag = document.createElement("b");
        tag.textContent = item;
        return tag;
      }));
      nodes.forEach(function (node) { node.classList.remove("is-updating"); });
      if (solutionPanel) {
        solutionPanel.classList.remove("scenario-pulse");
        void solutionPanel.offsetWidth;
        solutionPanel.classList.add("scenario-pulse");
      }
    }, 160);
  }

  const stackedWorkflow = window.matchMedia("(max-width: 900px)");

  function showMobileSolution() {
    if (!solutionPanel || !stackedWorkflow.matches) return;
    window.setTimeout(function () {
      solutionPanel.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
    }, 220);
  }

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      buttons.forEach(function (item) {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");
      renderScenario(button.dataset.scenario);
      showMobileSolution();
    });

    button.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const next = (index + direction + buttons.length) % buttons.length;
      buttons[next].focus();
      buttons[next].click();
    });
  });

  const mobileDemoReturn = document.querySelector(".mobile-demo-return");
  const problemPanel = document.querySelector(".problem-panel");
  if (mobileDemoReturn && problemPanel) {
    mobileDemoReturn.addEventListener("click", function () {
      problemPanel.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
    });
  }

  const priceForm = document.querySelector(".price-form");
  const priceRange = document.getElementById("price-range");
  const priceSummary = document.getElementById("price-summary");
  const monthlyRange = document.getElementById("monthly-range");

  if (priceForm && priceRange && priceSummary && monthlyRange) {
    function formatRange(minimum, maximum, suffix) {
      const numberFormat = new Intl.NumberFormat(currentLanguage() === "en" ? "en-GB" : "de-DE");
      return numberFormat.format(minimum) + "–" + numberFormat.format(maximum) + " €" + (suffix || "");
    }

    function updatePriceEstimate() {
      const project = priceForm.querySelector('input[name="project"]:checked');
      const addons = Array.from(priceForm.querySelectorAll('input[name="addon"]:checked'));
      const care = priceForm.querySelector('select[name="care"]');
      const careOption = care ? care.options[care.selectedIndex] : null;

      if (!project) return;

      let minimum = Number(project.dataset.min || 0);
      let maximum = Number(project.dataset.max || 0);
      addons.forEach(function (addon) {
        minimum += Number(addon.dataset.min || 0);
        maximum += Number(addon.dataset.max || 0);
      });

      const projectTitle = project.closest(".price-option").querySelector("strong").textContent;
      const addonText = addons.length === 0
        ? languageCopy("ohne zusätzliche Bausteine", "no additional features")
        : addons.length + (addons.length === 1
          ? languageCopy(" zusätzlicher Baustein", " additional feature")
          : languageCopy(" zusätzliche Bausteine", " additional features"));

      priceRange.textContent = formatRange(minimum, maximum);
      priceSummary.textContent = projectTitle + " · " + addonText;

      const monthlyMinimum = careOption ? Number(careOption.dataset.monthlyMin || 0) : 0;
      const monthlyMaximum = careOption ? Number(careOption.dataset.monthlyMax || 0) : 0;
      monthlyRange.textContent = monthlyMaximum > 0
        ? formatRange(monthlyMinimum, monthlyMaximum, languageCopy(" / Monat", " / month"))
        : languageCopy("nicht enthalten", "not included");

      priceForm.querySelectorAll(".price-option").forEach(function (option) {
        const control = option.querySelector("input");
        option.classList.toggle("is-selected", Boolean(control && control.checked));
      });
    }

    priceForm.addEventListener("change", updatePriceEstimate);
    priceForm.addEventListener("reset", function () {
      window.setTimeout(updatePriceEstimate, 0);
    });
    document.addEventListener("site-language-change", updatePriceEstimate);
    updatePriceEstimate();
  }

  document.addEventListener("site-language-change", function () {
    const activeScenario = document.querySelector(".scenario-button.is-active");
    if (activeScenario) renderScenario(activeScenario.dataset.scenario);
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  const progress = document.querySelector(".scroll-progress");
  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progress) progress.style.width = Math.min(100, Math.max(0, value)) + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    function updateBackToTop() {
      const isVisible = window.scrollY > Math.max(500, window.innerHeight * 0.65);
      backToTop.classList.toggle("is-visible", isVisible);
      backToTop.setAttribute("aria-hidden", String(!isVisible));
      backToTop.tabIndex = isVisible ? 0 : -1;
    }

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });

    window.addEventListener("scroll", updateBackToTop, { passive: true });
    window.addEventListener("resize", updateBackToTop);
    updateBackToTop();
  }

  const workCards = Array.from(document.querySelectorAll("[data-work-open]"));
  const workLightbox = document.querySelector(".work-lightbox");
  const workLightboxImage = document.getElementById("work-lightbox-image");
  const workLightboxTitle = document.getElementById("work-lightbox-title");
  const workLightboxClose = document.querySelector(".work-lightbox-close");
  let lastWorkTrigger = null;

  function closeWorkLightbox() {
    if (!workLightbox || workLightbox.hidden) return;
    workLightbox.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    window.setTimeout(function () {
      workLightbox.hidden = true;
      if (workLightboxImage) workLightboxImage.removeAttribute("src");
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 220);
    if (lastWorkTrigger) lastWorkTrigger.focus();
  }

  if (workLightbox && workLightboxImage && workLightboxTitle && workLightboxClose) {
    workCards.forEach(function (card) {
      card.addEventListener("click", function () {
        const preview = card.querySelector("img");
        const title = card.querySelector(".work-caption strong");
        if (!preview || !title) return;
        lastWorkTrigger = card;
        workLightboxImage.src = preview.currentSrc || preview.src;
        workLightboxImage.alt = preview.alt;
        workLightboxTitle.textContent = title.textContent;
        workLightbox.hidden = false;
        document.body.classList.add("modal-open");
        window.requestAnimationFrame(function () { workLightbox.classList.add("is-open"); });
        workLightboxClose.focus();
      });
    });

    workLightboxClose.addEventListener("click", closeWorkLightbox);
    workLightbox.addEventListener("click", function (event) {
      if (event.target === workLightbox) closeWorkLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeWorkLightbox();
    });
    document.addEventListener("site-language-change", closeWorkLightbox);
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const cursorLight = document.querySelector(".cursor-light");

  if (finePointer.matches && !reducedMotion.matches && cursorLight) {
    let pointerX = -400;
    let pointerY = -400;
    let cursorFrame = 0;

    document.addEventListener("pointermove", function (event) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursorLight.classList.add("is-active");
      if (cursorFrame) return;
      cursorFrame = window.requestAnimationFrame(function () {
        cursorLight.style.transform = "translate3d(" + (pointerX - 180) + "px," + (pointerY - 180) + "px,0)";
        cursorFrame = 0;
      });
    }, { passive: true });

    document.documentElement.addEventListener("mouseleave", function () {
      cursorLight.classList.remove("is-active");
    });
  }

  document.querySelectorAll(".hero-console, .fit-card, .tilt-card").forEach(function (card) {
    card.addEventListener("pointermove", function (event) {
      if (!finePointer.matches) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--card-x", (event.clientX - rect.left) + "px");
      card.style.setProperty("--card-y", (event.clientY - rect.top) + "px");
    }, { passive: true });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.classList.toggle("is-open");
      navigation.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen
        ? languageCopy("Menü schließen", "Close menu")
        : languageCopy("Menü öffnen", "Open menu"));
    });

    navigation.querySelectorAll("a, .language-switch").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("is-open");
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", languageCopy("Menü öffnen", "Open menu"));
      });
    });

    document.addEventListener("site-language-change", function () {
      menuToggle.setAttribute("aria-label", languageCopy("Menü öffnen", "Open menu"));
    });
  }

  const contactForm = document.querySelector(".contact-form");
  const formMessage = document.querySelector(".form-message");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      formMessage.className = "form-message";
      if (!name || !email || !message) {
        formMessage.textContent = languageCopy("Bitte füllen Sie alle Felder aus.", "Please complete all fields.");
        formMessage.classList.add("error");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = languageCopy("Bitte geben Sie eine gültige E-Mail-Adresse ein.", "Please enter a valid email address.");
        formMessage.classList.add("error");
        return;
      }

      const subject = encodeURIComponent(languageCopy("Projektanfrage über richardheim.design", "Project enquiry via richardheim.design"));
      const body = encodeURIComponent(
        languageCopy("Hallo Richard,\n\n", "Hello Richard,\n\n") + message
        + languageCopy("\n\nViele Grüße\n", "\n\nBest regards,\n") + name + "\n" + email
      );
      formMessage.textContent = languageCopy("Ihr E-Mail-Programm wird geöffnet.", "Your email application is opening.");
      formMessage.classList.add("success");
      window.location.href = "mailto:richardheim.design@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  if ("IntersectionObserver" in window) {
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const navSections = navLinks.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    }).filter(Boolean);

    const navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          const active = link.getAttribute("href") === "#" + entry.target.id;
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-35% 0px -55%", threshold: 0 });

    navSections.forEach(function (section) { navObserver.observe(section); });
  }
})();
