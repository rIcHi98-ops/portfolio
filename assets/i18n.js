(function () {
  "use strict";

  const translations = {
    "Richard Heim — Webdesign, Entwicklung & smarte Workflows": "Richard Heim — Web Design, Development & Smart Workflows",
    "Richard Heim entwickelt individuelle Websites mit sauberem Code sowie passende CMS-Lösungen und smarte digitale Abläufe.": "Richard Heim creates custom websites with clean code, tailored CMS solutions and smart digital workflows.",
    "Zum Inhalt springen": "Skip to content",
    "Verfügbar für neue Projekte": "Available for new projects",
    "Deutschland / Remote": "Germany / Remote",
    "Code · Design · CMS · KI": "Code · Design · CMS · AI",
    "Leistungen": "Services",
    "Arbeiten": "Work",
    "Preisrahmen": "Price guide",
    "Profil": "Profile",
    "Kontakt": "Contact",
    "Projekt anfragen": "Start a project",
    "Individuelle Webentwicklung · Design · CMS · KI-Automatisierung": "Custom web development · Design · CMS · AI automation",
    "Digitale Auftritte,": "Digital experiences",
    "die": "that",
    "Wirkung": "make",
    "entfalten.": "an impact.",
    "Mein Schwerpunkt:": "My focus:",
    "Ich konzipiere, gestalte und entwickle individuelle Websites direkt mit sauberem Code. Wenn Inhalte regelmäßig selbst gepflegt werden sollen, setze ich alternativ passende CMS-Lösungen mit WordPress oder Webflow um. Hosting, Betreuung und KI-Automatisierungen ergänzen das Angebot nach Bedarf.": "I plan, design and build custom websites with clean code. When regular in-house content updates are the priority, I also create tailored CMS solutions with WordPress or Webflow. Hosting, ongoing support and AI automation can be added where useful.",
    "Alle Leistungen ansehen": "Explore all services",
    "Ihr direkter Ansprechpartner": "Your direct point of contact",
    "studio.profile / leistung": "studio.profile / services",
    "VERFÜGBAR": "AVAILABLE",
    "MEIN ANSATZ": "MY APPROACH",
    "Vier Perspektiven.": "Four perspectives.",
    "Ein stimmiger Auftritt.": "One coherent experience.",
    "Vier Leistungsbereiche greifen gezielt ineinander und werden passend zu Ihrem Vorhaben kombiniert.": "Four capabilities work together and are combined to suit your project.",
    "responsiv & zuverlässig entwickeln": "responsive, reliable development",
    "klar & nutzerfreundlich gestalten": "clear, user-friendly design",
    "KI": "AI",
    "wiederkehrende Abläufe automatisieren": "automating repetitive workflows",
    "Besucher gezielt zur Anfrage führen": "guiding visitors towards action",
    "passend kombiniert": "combined with purpose",
    "IHR ERGEBNIS": "YOUR OUTCOME",
    "Ein digitaler Auftritt, der zu Ihrem Ziel passt.": "A digital presence built around your goal.",
    "Klar gestaltet · sauber umgesetzt · sinnvoll erweitert": "Clear design · clean build · purposeful features",
    "Sie wählen nicht vier Einzelpakete: Ich kombiniere genau die Bausteine, die Ihr Projekt wirklich braucht.": "You are not choosing four separate packages. I combine only what your project actually needs.",
    "persönlicher Ansprechpartner": "one personal contact",
    "verbundene Disziplinen": "connected disciplines",
    "direkte Kommunikation": "direct communication",
    "deutschlandweit verfügbar": "available throughout Germany",
    "Meine Leistungen für Ihren": "Services for your",
    "digitalen": "digital",
    "Auftritt.": "presence.",
    "Von der individuell programmierten Landingpage bis zum vollständigen Webauftritt oder automatisierten Arbeitsablauf: Ich unterstütze Betriebe, Kleinunternehmen und Selbstständige branchenübergreifend — mit einem Umfang, der zu Bedarf und Budget passt.": "From a custom-coded landing page to a complete website or automated workflow, I support businesses, small companies and independent professionals across industries — with a scope that fits both needs and budget.",
    "MEIN LEISTUNGSSPEKTRUM": "MY SERVICES",
    "Individuelle Webentwicklung": "Custom web development",
    "mit HTML, CSS und JavaScript ist mein bevorzugter Weg.": "with HTML, CSS and JavaScript is my preferred approach.",
    "CMS-Lösungen": "CMS solutions",
    "mit WordPress oder Webflow biete ich als zweite Option an, wenn die eigenständige Inhaltspflege im Mittelpunkt steht.": "with WordPress or Webflow are available when managing content independently is the main priority.",
    "Hosting, Betreuung und KI-Automatisierung": "Hosting, ongoing support and AI automation",
    "ergänzen das Projekt passend zum Bedarf.": "round out the project wherever they add value.",
    "01 / SCHWERPUNKT": "01 / CORE SERVICE",
    "Maßgeschneiderte Websites, direkt mit Code entwickelt — schnell, eigenständig gestaltet und exakt auf das Projekt abgestimmt.": "Tailored websites built directly with code — fast, distinctive and precisely aligned with the project.",
    "HTML · CSS · JavaScript · individuelle Funktionen": "HTML · CSS · JavaScript · custom features",
    "02 / ALTERNATIVE": "02 / ALTERNATIVE",
    "CMS-Websites": "CMS websites",
    "WordPress oder Webflow, wenn Inhalte regelmäßig selbst bearbeitet und flexibel weitergeführt werden sollen.": "WordPress or Webflow when content needs to be updated regularly and managed in-house.",
    "WordPress · Webflow · redaktionelle Pflege": "WordPress · Webflow · content editing",
    "Hosting, Pflege & Updates": "Hosting, care & updates",
    "Technischer Start mit Domain und SSL sowie auf Wunsch langfristige Inhaltspflege, Anpassungen und Kontrolle.": "A reliable technical launch with domain and SSL, plus optional long-term content care, updates and monitoring.",
    "Hosting · DNS · Inhalte · Updates · Sicherheit": "Hosting · DNS · content · updates · security",
    "Landingpages": "Landing pages",
    "Individuell entwickelte, fokussierte Seiten für Angebote, Kampagnen und lokale Dienstleistungen.": "Custom-built, focused pages for offers, campaigns and local services.",
    "Code · Conversion · Struktur · CTA": "Code · conversion · structure · CTA",
    "Portfolio-Websites": "Portfolio websites",
    "Persönliche, individuell entwickelte Auftritte für Selbstständige, Fachpersonen, Kreative und kleine Marken.": "Personal, custom-built websites for independent professionals, specialists, creatives and small brands.",
    "Profil · Leistungen · Arbeiten · Vertrauen": "Profile · services · work · trust",
    "Technische Beratung": "Technical consulting",
    "Pragmatische Hilfe bei Code, Tools, Website-Struktur, Hosting-Fragen und Optimierung.": "Practical support with code, tools, website structure, hosting decisions and optimisation.",
    "Analyse · Setup · Klarheit": "Analysis · setup · clarity",
    "07 / EIGENSTÄNDIGE LEISTUNG": "07 / STAND-ALONE SERVICE",
    "KI-Automatisierungen": "AI automation",
    "Ich konzipiere und entwickle individuelle, nachvollziehbare Workflows für wiederkehrende Aufgaben — etwa zur Qualifizierung von Anfragen, Content-Vorbereitung, Support-Sortierung oder Website-Optimierung. Umfang und eingesetzte Werkzeuge richten sich nach Ihrem konkreten Anwendungsfall.": "I design and build transparent, tailored workflows for recurring tasks — from lead qualification and content preparation to support triage and website optimisation. Scope and tools are chosen around your specific use case.",
    "Workflows · APIs · LLM · menschliche Freigaben": "Workflows · APIs · LLMs · human approval",
    "Anwendungsfälle im Workflow Lab ansehen": "Explore use cases in the Workflow Lab",
    "FÜR UNTERNEHMEN & HERZENSPROJEKTE": "FOR BUSINESSES & PURPOSE-DRIVEN PROJECTS",
    "Passende Lösungen — unabhängig von Branche oder Projektgröße.": "The right solution — regardless of industry or project size.",
    "Mein Angebot richtet sich an Betriebe, Kleinunternehmen und Selbstständige aller Bereiche. Ebenso willkommen sind kleinere Herzensprojekte aus Kunst, Kultur, Bildung und Sozialem — etwa für Kunstschaffende, Kitas, Schulprojekte oder politische Bildungsangebote für junge Menschen.": "My services are open to businesses, small companies and independent professionals in every field. Smaller purpose-driven projects in the arts, culture, education and social sectors are equally welcome — including artists, childcare centres, school initiatives and civic education projects for young people.",
    "Unverbindlich über die Idee sprechen": "Talk through your idea",
    "Für klassische Unternehmen": "For established businesses",
    "professionelle Auftritte für Angebot und Kundengewinnung": "professional websites that present services and attract clients",
    "Für Selbstständige": "For independent professionals",
    "klare Landingpages und Portfolios ohne unnötige Komplexität": "clear landing pages and portfolios without unnecessary complexity",
    "Für Bildung, Kultur & Soziales": "For education, culture & social initiatives",
    "zugängliche Lösungen auch für kleinere und ideelle Projekte": "accessible solutions for smaller and purpose-led projects",
    "Flexibel in der Umsetzung": "Flexible implementation",
    "individueller Code zuerst, CMS und Betreuung dort, wo sie sinnvoll sind": "custom code first, with CMS and ongoing support where they make sense",
    "Unverbindlicher Preisrahmen": "Non-binding price guide",
    "Was könnte Ihr Projekt": "What might your project",
    "ungefähr": "roughly",
    "kosten?": "cost?",
    "Wählen Sie die Bausteine, die zu Ihrer Idee passen. Sie erhalten sofort eine grobe Kostenspanne — ohne Anmeldung und ohne Verpflichtung.": "Choose the building blocks that fit your idea and receive an instant ballpark range — with no sign-up and no obligation.",
    "Was möchten Sie umsetzen?": "What would you like to create?",
    "Bitte eine Projektbasis auswählen.": "Choose one starting point.",
    "Individuelle Landingpage": "Custom landing page",
    "Fokussierter Onepager, direkt mit Code entwickelt": "A focused one-page site, built directly with code",
    "Individuell entwickelte Website": "Custom-developed website",
    "Mehrere Seiten mit maßgeschneidertem Design und Code": "Multiple pages with tailored design and code",
    "CMS-Website": "CMS website",
    "Umsetzung mit WordPress oder Webflow zur eigenen Inhaltspflege": "Built with WordPress or Webflow for in-house content updates",
    "KI-Automatisierung": "AI automation",
    "Ein konkreter Ablauf als individueller Workflow": "One specific process turned into a tailored workflow",
    "Welche Bausteine kommen hinzu?": "Which extras do you need?",
    "Mehrfachauswahl möglich.": "Select as many as you need.",
    "Texte & Bildaufbereitung": "Copy & image preparation",
    "Inhalte strukturieren, schreiben oder optimieren": "Structure, write or refine your content",
    "Formulare & Buchung": "Forms & booking",
    "Kontakt, Termin oder andere Funktionen": "Contact, appointments or other functionality",
    "SEO-Grundlage": "SEO foundation",
    "Struktur, Metadaten und technische Basis": "Structure, metadata and technical foundations",
    "Automatisierter Zusatzablauf": "Additional automated workflow",
    "Zum Beispiel Anfrage-, Content- oder Datenworkflow": "For example, a lead, content or data workflow",
    "Wie soll es nach dem Start weitergehen?": "What happens after launch?",
    "Laufende Betreuung ist optional.": "Ongoing support is optional.",
    "Betreuungsmodell": "Support model",
    "Saubere Übergabe, Pflege in Eigenregie": "Clear handover, managed independently",
    "Basis-Pflege und technische Kontrolle": "Basic maintenance and technical checks",
    "Aktive Betreuung und regelmäßige Inhalte": "Active support and regular content updates",
    "Auswahl zurücksetzen": "Reset selection",
    "Unverbindliche Orientierung": "Non-binding estimate",
    "Individuelle Landingpage · ohne zusätzliche Bausteine": "Custom landing page · no additional features",
    "Genaue Preise werden im persönlichen Gespräch besprochen und im individuellen Angebot an den tatsächlichen Umfang angepasst.": "Final pricing is discussed personally and tailored to the actual scope in an individual proposal.",
    "Laufende Betreuung": "Ongoing support",
    "nicht enthalten": "not included",
    "Persönliche Abstimmung vor Projektbeginn": "Personal consultation before the project starts",
    "Leistungen lassen sich passend zum verfügbaren Budget priorisieren": "Services can be prioritised to suit the available budget",
    "Auch kleinere Budgets und Herzensprojekte sind willkommen": "Smaller budgets and purpose-driven projects are welcome",
    "Projekt unverbindlich besprechen": "Discuss your project",
    "Die Spanne dient nur als erste Orientierung. Hosting-, Domain-, Lizenz- und sonstige Drittkosten sind nicht enthalten und hängen von der gewählten Plattform ab.": "This range is an initial guide only. Hosting, domain, licence and other third-party costs are not included and depend on the chosen platform.",
    "KI-Automatisierung · Leistung & Demo": "AI automation · Service & demo",
    "Vom Engpass zur": "From a bottleneck to",
    "passenden Automatisierung.": "the right automation.",
    "KI-Automatisierungen sind ein fester Bestandteil meines Leistungsangebots. Ich entwickle sie passend zum jeweiligen Unternehmen, Prozess und gewünschten Grad menschlicher Kontrolle.": "AI automation is a core part of my service offering. Every solution is shaped around the organisation, its process and the desired level of human oversight.",
    "Als individuelle Dienstleistung verfügbar": "Available as a tailored service",
    "Das Lab macht vier mögliche Anwendungsfälle interaktiv sichtbar. Im Projekt entsteht daraus keine Standardlösung, sondern ein auf Ihren tatsächlichen Ablauf zugeschnittenes Konzept.": "The lab brings four possible use cases to life. In a real project, these become a concept tailored to your actual workflow rather than an off-the-shelf solution.",
    "01 / Problem wählen": "01 / Choose a challenge",
    "Antippen zeigt Lösung": "Tap to reveal a solution",
    "Zu viele unklare Leads": "Too many unclear leads",
    "Anfragen schneller qualifizieren": "Qualify enquiries faster",
    "Content kostet Zeit": "Content takes too much time",
    "Vorbereitung intelligent bündeln": "Streamline preparation intelligently",
    "Anfragen landen falsch": "Requests reach the wrong team",
    "Support sauber vorsortieren": "Triage support requests clearly",
    "Website bleibt statisch": "The website stays static",
    "Signale in Optimierung übersetzen": "Turn signals into improvements",
    "02 / Lösungsroute": "02 / Solution route",
    "Demo aktiv": "Demo active",
    "Webformular": "Web form",
    "Bedarf + Kontext": "Needs + context",
    "Intent erkennen": "Detect intent",
    "Priorität + Kategorie": "Priority + category",
    "Passendes Routing": "Smart routing",
    "CRM + Team-Alert": "CRM + team alert",
    "Erwarteter Hebel": "Expected impact",
    "Schnellere Reaktion": "Faster response",
    "Priorisierte Anfragen erreichen ohne Umwege die richtige Person.": "Prioritised enquiries reach the right person without unnecessary detours.",
    "Möglicher Stack": "Possible stack",
    "Datenschutz und menschliche Freigaben werden im echten Projekt mitgedacht.": "Data protection and human approval are built into the real project.",
    "Anderes Problem auswählen": "Choose another challenge",
    "Interaktive Veranschaulichung meiner Leistung — keine echten Daten und keine externen Dienste.": "Interactive demonstration of my service — no real data and no external services.",
    "Prozess": "Process",
    "Vom ersten Gespräch": "From our first conversation",
    "bis zum stabilen": "to a reliable",
    "Ein klarer Ablauf hält Entscheidungen nachvollziehbar, reduziert Schleifen und schafft früh etwas Greifbares.": "A clear process keeps decisions transparent, reduces feedback loops and creates something tangible early on.",
    "Briefing": "Discovery",
    "Ziele, Inhalte, Zielgruppe und technische Anforderungen werden verständlich eingeordnet.": "We clarify goals, content, audiences and technical requirements in plain language.",
    "Konzept": "Concept",
    "Struktur, Seitenaufbau, Inhalte und visuelle Richtung werden greifbar gemacht.": "Structure, page flow, content and the visual direction become tangible.",
    "Umsetzung": "Build",
    "Design und Entwicklung entstehen sauber, responsiv und mit Blick auf die spätere Pflege.": "Design and development come together cleanly, responsively and with future maintenance in mind.",
    "Launch & Betreuung": "Launch & support",
    "Hosting, Domain und technische Übergabe schließen an. Bei einer CMS-Lösung oder auf Wunsch begleite ich auch die langfristige Inhaltspflege.": "Hosting, domain setup and a clear technical handover follow. For CMS projects, or whenever useful, I can also provide long-term content support.",
    "Mein Profil": "My profile",
    "Gestaltung im Kopf.": "Design in mind.",
    "Technik in den Händen.": "Technology at hand.",
    "Neugier im System.": "Curiosity built in.",
    "Als ausgebildeter Mediengestalter mit wachsendem Fokus auf Frontend, UI/UX und KI bringe ich verschiedene Perspektiven an einen Tisch. Ich arbeite mich schnell ein, denke vom Ziel her und mache aus einer Idee lieber einen testbaren Prototyp als eine lange Präsentation.": "As a trained media designer with a growing focus on frontend development, UI/UX and AI, I bring several perspectives together. I learn quickly, think from the desired outcome and would rather turn an idea into a testable prototype than a lengthy presentation.",
    "„Ich muss heute nicht alles können. Aber ich will morgen mehr können als heute — und es direkt anwenden.“": "“I do not need to know everything today. But tomorrow, I want to know more than I do now — and put it straight into practice.”",
    "Persönlich erreichbar und direkt im Projekt": "Personally available and directly involved",
    "DIGITALE VISITENKARTE": "DIGITAL BUSINESS CARD",
    "Rolle": "Role",
    "Webentwickler & Design-Partner": "Web developer & design partner",
    "Standort": "Location",
    "E-Mail": "Email",
    "Fokus": "Focus",
    "Individuelle Webentwicklung, Design und KI-Automatisierung · CMS bei Bedarf": "Custom web development, design and AI automation · CMS when needed",
    "Verstehen": "Understand",
    "Problem, Menschen und Ziel zuerst.": "Start with the problem, people and goal.",
    "Prototypen": "Prototype",
    "Schnell etwas Greifbares schaffen.": "Make ideas tangible quickly.",
    "Verbessern": "Improve",
    "Testen, lernen und Wirkung steigern.": "Test, learn and increase impact.",
    "Werkzeugkasten": "Toolkit",
    "Ehrlich eingeordnet — und in Bewegung.": "An honest snapshot — and always evolving.",
    "SICHERE BASIS": "STRONG FOUNDATION",
    "PRAXIS + VERTIEFUNG": "PRACTICE + GROWTH",
    "Projektformate": "Project formats",
    "Kleine Projekte.": "Small projects.",
    "Klare": "Clear",
    "Aufgabe.": "brief.",
    "Diese Beispiele zeigen typische Formate, die ich konzipieren, gestalten, umsetzen und technisch begleiten kann.": "These examples show typical formats I can plan, design, build and support technically.",
    "Website für ein lokales Unternehmen": "Website for a local business",
    "Kompakte Unternehmensseite mit Leistungen, Kontaktwegen und lokaler Ausrichtung.": "A concise business website with services, contact options and a clear local focus.",
    "Website · Sichtbarkeit": "Website · visibility",
    "SELBSTSTÄNDIGKEIT": "INDEPENDENT PROFESSIONALS",
    "Persönlicher digitaler Auftritt": "Personal digital presence",
    "Eine reduzierte Website für Person, Leistung, Referenzen und Kontakt — klar, glaubwürdig und einfach aktuell zu halten.": "A focused website for your profile, services, references and contact details — clear, credible and easy to keep current.",
    "Portfolio · Angebot · Sichtbarkeit": "Portfolio · services · visibility",
    "KLEINE & SOZIALE PROJEKTE": "SMALL & SOCIAL PROJECTS",
    "Landingpage für ein Herzensprojekt": "Landing page for a purpose-driven project",
    "Kultur, Bildung und soziale Initiativen erhalten eine professionelle Bühne in einem realistischen Umfang.": "Cultural, educational and social initiatives receive a professional platform within a realistic scope.",
    "Individueller Code · fokussierter Umfang · Betreuung": "Custom code · focused scope · support",
    "CMS & HOSTING": "CMS & HOSTING",
    "Technischer Start ohne Plattformstress": "A technical launch without platform headaches",
    "Einrichtung von CMS, Hosting, Domain und SSL sowie eine verständliche Übergabe oder laufende Betreuung.": "CMS, hosting, domain and SSL setup, followed by a clear handover or ongoing support.",
    "Setup · Betrieb · Inhaltspflege": "Setup · operations · content care",
    "Zusammenarbeit": "Working together",
    "Persönlich genug für kurze Wege.": "Personal enough for short lines.",
    "Technisch genug für": "Technical enough for",
    "saubere Systeme.": "robust systems.",
    "Tippen Sie auf eine Karte, um mehr zu erfahren.": "Tap a card to see the details.",
    "Ein direkter Ansprechpartner": "One direct point of contact",
    "Keine wechselnden Kontakte und keine unnötigen Abstimmungsschleifen.": "No changing contacts and no unnecessary coordination loops.",
    "Klare Kommunikation": "Clear communication",
    "Verständliche Entscheidungen, realistische Einschätzungen und transparente Schritte.": "Understandable decisions, realistic expectations and transparent next steps.",
    "Saubere Umsetzung": "Clean implementation",
    "Strukturierter Code, schnelle Ladezeiten und ein System, das langfristig wartbar bleibt.": "Structured code, fast load times and a system that remains maintainable.",
    "Breite mit Richtung": "Breadth with direction",
    "Gestaltung, Frontend, KI und Conversion werden nicht getrennt, sondern als Ganzes gedacht.": "Design, frontend, AI and conversion are considered as one connected experience.",
    "Lernen am echten Projekt": "Learning through real projects",
    "Neue Technologien erschließe ich pragmatisch, eigenständig und mit sichtbarem Ergebnis.": "I approach new technologies pragmatically, independently and with a visible outcome.",
    "Wirkung statt Buzzwords": "Impact over buzzwords",
    "Technik ist dann wertvoll, wenn sie Abläufe verbessert und für Menschen einen Unterschied macht.": "Technology is valuable when it improves processes and makes a meaningful difference for people.",
    "Aus einer Idee wird ein": "Turn an idea into a",
    "digitaler Auftritt.": "digital presence.",
    "Ob individuell entwickelte Unternehmenswebsite, einfache Landingpage, Herzensprojekt, CMS-Lösung oder KI-Automatisierung: Eine grobe Idee reicht aus. Gemeinsam finden wir den technischen Weg, der zu Ihrem Ziel, Alltag und Budget passt.": "Whether you need a custom business website, a simple landing page, a purpose-driven project, a CMS solution or AI automation, a rough idea is enough. Together, we will find the technical approach that suits your goals, day-to-day work and budget.",
    "Projektbeschreibung": "Project outline",
    "E-Mail vorbereiten": "Prepare email",
    "Web · Design · KI · Hosting · Automatisierung": "Web · Design · AI · Hosting · Automation",
    "© 2026 Richard Heim · Deutschland / Remote": "© 2026 Richard Heim · Germany / Remote",
    "Impressum": "Legal notice",
    "Persönlich entwickelt. Klar betreut.": "Personally developed. Clearly supported.",
    "Nach oben": "Back to top",
    "Impressum — Richard Heim": "Legal notice — Richard Heim",
    "Zur Website": "Back to website",
    "Anbieterkennzeichnung": "Provider information",
    "Angaben gemäß § 5 DDG": "Information pursuant to Section 5 DDG",
    "Verantwortlich für dieses Online-Angebot und direkt erreichbar über die nachfolgend genannten Kontaktdaten.": "Responsible for this website and directly available via the contact details provided below.",
    "01 / Anbieter": "01 / Provider",
    "Deutschland": "Germany",
    "02 / Kontakt": "02 / Contact",
    "Direkte Kommunikation": "Direct communication",
    "E-Mail:": "Email:",
    "03 / Tätigkeit": "03 / Activity",
    "Selbstständige Tätigkeit": "Independent professional activity",
    "Webentwicklung, Webdesign und digitale Dienstleistungen": "Web development, web design and digital services",
    "04 / Redaktion": "04 / Editorial responsibility",
    "Verantwortlich für Inhalte": "Responsible for content",
    "05 / Streitbeilegung": "05 / Dispute resolution",
    "Hinweis nach VSBG": "Notice under the German VSBG",
    "Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.": "I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    "06 / Inhalte und Links": "06 / Content and links",
    "Haftungshinweis": "Liability notice",
    "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für externe Links sind die jeweiligen Betreiber der verlinkten Seiten verantwortlich.": "The content of this website is prepared with care. The respective operators are responsible for the content of external links.",
    "Zurück zur Startseite": "Back to the home page",
    "Impressum · Richard Heim": "Legal notice · Richard Heim",
    "SPRACHAUSWAHL": "LANGUAGE PREFERENCE",
    "Bevorzugte Sprache auswählen": "Choose your preferred language",
    "Ihre Browsersprache scheint Englisch zu sein. Möchten Sie die Website lieber auf Englisch ansehen?": "Your browser language appears to be English. Would you like to view this website in English?",
    "Deutsch beibehalten": "Keep German",
    "Auf Englisch ansehen": "View in English",
    "Kurzinformationen": "Quick information",
    "Hauptnavigation": "Main navigation",
    "Zur Startseite": "Go to home page",
    "Seitenbereiche": "Page sections",
    "Leistungsprofil von Richard Heim": "Richard Heim service profile",
    "Vier Leistungsbereiche": "Four service areas",
    "Schwerpunkte": "Focus areas",
    "Vorteile der Zusammenarbeit": "Benefits of working together",
    "Zusammenfassung des Leistungsangebots": "Service overview",
    "Bestandteile des Angebots": "What the offer includes",
    "Unverbindlichen Preisrahmen berechnen": "Calculate a non-binding price range",
    "Unternehmensproblem auswählen": "Choose a business challenge",
    "Visualisierter Workflow": "Visualised workflow",
    "Digitale Visitenkarte": "Digital business card",
    "Arbeitsprinzipien": "Working principles",
    "Ihr Name": "Your name",
    "name@unternehmen.de": "name@company.com",
    "Individuelle Website, Landingpage, CMS oder Automatisierung — worum geht es?": "Custom website, landing page, CMS or automation — what is your project about?",
    "Footer-Navigation": "Footer navigation",
    "Zurück nach oben": "Back to top",
    "Impressum von Richard Heim.": "Legal notice for Richard Heim.",
    "Impressumsangaben": "Legal information",
    "Website auf Englisch anzeigen": "View website in English",
    "Sprachhinweis schließen": "Close language prompt",
    "Arbeiten & Konzeptstudien": "Work & concept studies",
    "Weniger erklären.": "Less explaining.",
    "Mehr zeigen.": "More showing.",
    "Ausgewählte responsive Webdesigns zeigen, wie unterschiedlich ein digitaler Auftritt wirken kann — vom persönlichen Onepager bis zur klar positionierten Unternehmenswebsite.": "Selected responsive web designs show how differently a digital presence can feel — from a personal one-page site to a clearly positioned business website.",
    "Responsive Konzept": "Responsive concept",
    "Interaktive Web-Demo": "Interactive web demo",
    "Die Auswahl zeigt gestalterische Arbeiten und Konzeptstudien. Jedes Projekt wird in Struktur, Stil und Technik individuell auf seinen Einsatzzweck zugeschnitten.": "This selection features design work and concept studies. Every project is tailored in structure, style and technology to its specific purpose.",
    "ARBEIT / KONZEPTSTUDIE": "WORK / CONCEPT STUDY",
    "Projektansicht": "Project view",
    "Ausgewählte Webdesign-Arbeiten": "Selected web design work",
    "Mockup der Website für Fenne Tischlerei vergrößern": "Enlarge the Fenne Tischlerei website mockup",
    "Helles Rachel Website-Konzept vergrößern": "Enlarge the light Rachel website concept",
    "Mockup der interaktiven Web-Demo vergrößern": "Enlarge the interactive web demo mockup",
    "Dunkles Rachel Website-Konzept vergrößern": "Enlarge the dark Rachel website concept",
    "Responsive Website-Konzept für Fenne Tischlerei auf Desktop, Tablet und Smartphone": "Responsive website concept for Fenne Tischlerei on desktop, tablet and smartphone",
    "Helles responsive Website-Konzept für Rachel KI-Agenten": "Light responsive website concept for Rachel AI agents",
    "Dunkle interaktive Web-Demo auf Desktop, Tablet und Smartphone": "Dark interactive web demo on desktop, tablet and smartphone",
    "Dunkles responsive Website-Konzept für Rachel KI-Agenten": "Dark responsive website concept for Rachel AI agents",
    "Vergrößerte Arbeitsprobe schließen": "Close enlarged work sample",
    "Menü öffnen": "Open menu",
    "Menü schließen": "Close menu",
    "Richard Heim an seinem Arbeitsplatz mit Blick auf einen See": "Richard Heim at his desk overlooking a lake",
    "Portrait von Richard Heim an seinem Arbeitsplatz": "Portrait of Richard Heim at his desk",
    "FOKUS": "FOCUS",
    "Datenschutz": "Privacy",
    "Datenschutz — Richard Heim": "Privacy — Richard Heim",
    "Datenschutzerklärung der Website von Richard Heim.": "Privacy policy for Richard Heim’s website.",
    "Datenschutzinformationen": "Privacy information",
    "Stand: 12. Oktober 2026": "Last updated: 12 October 2026",
    "Diese Erklärung erläutert transparent, welche personenbezogenen Daten beim Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet werden.": "This policy explains clearly which personal data is processed when you visit this website or contact me.",
    "01 / Verantwortlicher": "01 / Controller",
    "Wer für die Verarbeitung verantwortlich ist": "Who is responsible for processing",
    "02 / Hosting": "02 / Hosting",
    "Bereitstellung über GitHub Pages": "Delivery through GitHub Pages",
    "Diese Website wird als statische Website über GitHub Pages bereitgestellt. Anbieter des Dienstes sind GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande, und GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.": "This static website is delivered through GitHub Pages. The service is provided by GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, the Netherlands, and GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.",
    "Beim Aufruf der Website verarbeitet GitHub technisch erforderliche Verbindungs- und Nutzungsdaten. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite oder Datei, Referrer-URL, Browser-, Geräte- und Betriebssysteminformationen gehören. GitHub weist ausdrücklich darauf hin, dass die IP-Adresse von Besuchenden einer GitHub-Pages-Website zu Sicherheitszwecken protokolliert und gespeichert wird.": "When you access the website, GitHub processes technically necessary connection and usage data. This may include your IP address, the date and time of access, the page or file requested, the referrer URL, and browser, device and operating system information. GitHub expressly states that visitors’ IP addresses are logged and stored for security purposes when a GitHub Pages site is accessed.",
    "Die Verarbeitung dient der sicheren, stabilen und effizienten Auslieferung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der zuverlässigen und gegen Missbrauch geschützten Bereitstellung dieses Online-Angebots.": "The processing serves to deliver the website securely, reliably and efficiently. The legal basis is Art. 6(1)(f) GDPR. The legitimate interest lies in providing this online service reliably and protecting it against misuse.",
    "Weitere Informationen:": "Further information:",
    "und": "and",
    "Datenerhebung bei GitHub Pages": "Data collection by GitHub Pages",
    "Datenschutzerklärung von GitHub": "GitHub Privacy Statement",
    "03 / Domain & DNS": "03 / Domain & DNS",
    "Domainverwaltung über STRATO": "Domain management through STRATO",
    "Die Domain dieser Website wird über die STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, verwaltet. Soweit die STRATO-Nameserver genutzt werden, können bei der technischen Auflösung der Domain Verbindungsdaten verarbeitet werden. Die eigentlichen Website-Inhalte werden über GitHub Pages ausgeliefert.": "This website’s domain is managed through STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, Germany. Where STRATO name servers are used, connection data may be processed when the domain is resolved technically. The website content itself is delivered through GitHub Pages.",
    "Die Verarbeitung dient der Erreichbarkeit, Stabilität und Sicherheit der Domain. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen enthält die": "The processing serves the accessibility, stability and security of the domain. The legal basis is Art. 6(1)(f) GDPR. Further information is available in the",
    "Datenschutzerklärung von STRATO": "STRATO Privacy Policy",
    "04 / Drittlandübermittlung": "04 / International transfers",
    "Verarbeitung außerhalb der Europäischen Union": "Processing outside the European Union",
    "GitHub und Google können personenbezogene Daten auch in den USA und in weiteren Ländern außerhalb der Europäischen Union beziehungsweise des Europäischen Wirtschaftsraums verarbeiten. GitHub, Inc. und Google LLC sind nach dem EU-U.S. Data Privacy Framework zertifiziert. Soweit dessen Voraussetzungen nicht greifen, stützen die Anbieter Übermittlungen nach eigenen Angaben insbesondere auf die Standardvertragsklauseln der Europäischen Kommission.": "GitHub and Google may also process personal data in the United States and other countries outside the European Union or European Economic Area. GitHub, Inc. and Google LLC are certified under the EU–US Data Privacy Framework. Where that framework does not apply, the providers state that they rely in particular on the European Commission’s Standard Contractual Clauses for international transfers.",
    "Bei einer Verarbeitung in Drittländern kann trotz dieser Garantien ein von der Europäischen Union abweichendes Datenschutzniveau bestehen. Nähere Informationen finden Sie in den Datenschutzhinweisen der jeweiligen Anbieter.": "Despite these safeguards, processing in third countries may be subject to a level of data protection that differs from that of the European Union. Further details can be found in the providers’ respective privacy notices.",
    "05 / Verschlüsselung": "05 / Encryption",
    "HTTPS und Transportverschlüsselung": "HTTPS and transport encryption",
    "Die veröffentlichte Website wird verschlüsselt über HTTPS übertragen. Dadurch werden Inhalte und Verbindungsdaten während der Übertragung zwischen Browser und Hosting-Infrastruktur gegen ein unbefugtes Mitlesen oder Verändern geschützt. Eine verschlüsselte Übertragung verhindert jedoch nicht jede denkbare Verarbeitung durch beteiligte Diensteanbieter.": "The published website is transmitted using encrypted HTTPS connections. This protects content and connection data against unauthorised interception or alteration while travelling between the browser and the hosting infrastructure. Encryption in transit does not, however, prevent every form of processing by the service providers involved.",
    "06 / Spracheinstellung": "06 / Language settings",
    "Lokale Speicherung der Sprachwahl": "Local storage of your language choice",
    "Die Website liest die im Browser eingestellte Sprache lokal aus, um bei einer englischen Browsersprache einen Sprachhinweis anzuzeigen. Diese Information wird dabei nicht an Richard Heim übermittelt.": "The website reads your browser language locally so that it can display a language prompt when English is selected. This information is not transmitted to Richard Heim.",
    "Wenn Sie eine Sprache auswählen oder den Sprachhinweis schließen, speichert die Website im lokalen Speicher Ihres Browsers unter dem Schlüssel „rh-site-language“ ausschließlich die Auswahl „de“ oder „en“. Die Einstellung bleibt erhalten, bis Sie die Website-Daten in Ihrem Browser löschen. Sie wird nicht zur Analyse, Werbung oder Profilbildung verwendet.": "When you choose a language or dismiss the language prompt, the website stores only the value “de” or “en” in your browser’s local storage under the key “rh-site-language”. The setting remains until you delete this website’s data in your browser. It is not used for analytics, advertising or profiling.",
    "Die Speicherung ist erforderlich, um die ausdrücklich gewählte Sprachfassung dauerhaft bereitzustellen. Sie erfolgt auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG; soweit ein Personenbezug entsteht, zusätzlich auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.": "This storage is necessary to retain the language version you explicitly selected. It is based on section 25(2)(2) TDDDG and, where the information is considered personal data, additionally on Art. 6(1)(f) GDPR.",
    "07 / Kontaktaufnahme": "07 / Contact",
    "Kontaktformular und E-Mail": "Contact form and email",
    "Das Kontaktformular besitzt kein serverseitiges Formularsystem. Ihre Eingaben werden nicht an einen Website-Server übertragen oder dort gespeichert. Beim Absenden erzeugt die Website lediglich lokal einen „mailto“-Link und öffnet damit das auf Ihrem Gerät eingerichtete E-Mail-Programm. Erst wenn Sie die vorbereitete Nachricht dort tatsächlich versenden, werden die enthaltenen Daten über die beteiligten E-Mail-Anbieter übertragen.": "The contact form has no server-side form system. Your entries are not transmitted to or stored on a website server. Submitting the form merely creates a “mailto” link locally and opens the email application configured on your device. The data in the prepared message is transmitted through the email providers involved only if you actually send it from that application.",
    "Bei einer Kontaktaufnahme verarbeite ich die von Ihnen übermittelten Angaben, insbesondere Name, E-Mail-Adresse, Nachrichteninhalt sowie technisch übermittelte Metadaten, um Ihre Anfrage zu beantworten und gegebenenfalls ein Vertragsverhältnis anzubahnen oder durchzuführen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen und im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in der Bearbeitung und Dokumentation geschäftlicher Anfragen.": "When you contact me, I process the information you provide—particularly your name, email address, message and technical metadata—to respond to your enquiry and, where relevant, to take steps towards or perform a contract. The legal basis is Art. 6(1)(b) GDPR for contract-related enquiries and otherwise Art. 6(1)(f) GDPR. The legitimate interest is the handling and documentation of business enquiries.",
    "Für den Empfang und die Speicherung von E-Mails nutze ich Gmail. Anbieter für Nutzende im Europäischen Wirtschaftsraum ist grundsätzlich Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Verarbeitung durch Google LLC in den USA oder weitere Konzerngesellschaften kann nicht ausgeschlossen werden.": "I use Gmail to receive and store emails. For users in the European Economic Area, the provider is generally Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Processing by Google LLC in the United States or other group companies cannot be ruled out.",
    "Datenschutzerklärung von Google": "Google Privacy Policy",
    "Google-Hinweise zu internationalen Datenübermittlungen": "Google information on international data transfers",
    "08 / Keine Analyse": "08 / No analytics",
    "Cookies, Tracking und externe Inhalte": "Cookies, tracking and external content",
    "Diese Website setzt selbst keine Cookies, Analysewerkzeuge, Werbetracker, Zählpixel, Social-Media-Plugins oder eingebetteten Inhalte wie externe Schriftarten, Karten oder Videos ein. Es findet keine Reichweitenmessung und keine Erstellung von Nutzungsprofilen durch Richard Heim statt. Deshalb wird derzeit kein Einwilligungsbanner eingesetzt.": "This website itself uses no cookies, analytics tools, advertising trackers, tracking pixels, social media plugins or embedded content such as external fonts, maps or videos. Richard Heim does not measure reach or create usage profiles. No consent banner is therefore currently used.",
    "Externe Anbieter erhalten über Links auf dieser Website erst dann zusätzliche Daten, wenn Sie den jeweiligen Link aktiv aufrufen. Für die anschließend erfolgende Verarbeitung gelten die Datenschutzbestimmungen des verlinkten Angebots.": "External providers receive additional data through links on this website only when you actively open the relevant link. Any subsequent processing is governed by the privacy terms of the linked service.",
    "09 / Speicherdauer": "09 / Retention",
    "Wie lange personenbezogene Daten gespeichert werden": "How long personal data is retained",
    "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist. Kontakt- und Projektdaten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine vertraglichen, gesetzlichen oder beweissichernden Gründe für eine weitere Aufbewahrung bestehen. Gesetzliche Aufbewahrungsfristen, insbesondere aus dem Handels- und Steuerrecht, bleiben unberührt.": "Personal data is retained only for as long as necessary for the relevant purpose. Contact and project data is deleted once an enquiry has been fully dealt with and there are no contractual, statutory or evidentiary reasons for further retention. Statutory retention duties, particularly under commercial and tax law, remain unaffected.",
    "Auf die Speicherdauer der von GitHub, STRATO oder Google in eigener Verantwortung verarbeiteten Daten habe ich keinen vollständigen Einfluss. Es gelten ergänzend die in dieser Erklärung verlinkten Hinweise der Anbieter.": "I do not have full control over the retention periods applied by GitHub, STRATO or Google to data they process under their own responsibility. The providers’ notices linked in this policy also apply.",
    "10 / Ihre Rechte": "10 / Your rights",
    "Rechte betroffener Personen": "Data subject rights",
    "Unter den gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:": "Subject to the statutory requirements, you have the following rights in particular:",
    "Auskunft über die zu Ihrer Person verarbeiteten Daten nach Art. 15 DSGVO,": "access to personal data processed about you under Art. 15 GDPR,",
    "Berichtigung unrichtiger oder unvollständiger Daten nach Art. 16 DSGVO,": "rectification of inaccurate or incomplete data under Art. 16 GDPR,",
    "Löschung nach Art. 17 DSGVO,": "erasure under Art. 17 GDPR,",
    "Einschränkung der Verarbeitung nach Art. 18 DSGVO,": "restriction of processing under Art. 18 GDPR,",
    "Datenübertragbarkeit nach Art. 20 DSGVO und": "data portability under Art. 20 GDPR, and",
    "Widerspruch gegen eine Verarbeitung nach Art. 21 DSGVO.": "objection to processing under Art. 21 GDPR.",
    "Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte E-Mail-Adresse. Bestehen begründete Zweifel an Ihrer Identität, können zusätzliche Informationen zur Identitätsprüfung erforderlich sein.": "To exercise your rights, simply contact the email address given above. If there are reasonable doubts about your identity, additional information may be required to verify it.",
    "11 / Widerspruch": "11 / Right to object",
    "Besonderer Hinweis zum Widerspruchsrecht": "Specific information about your right to object",
    "Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung personenbezogener Daten Widerspruch einzulegen, die auf Art. 6 Abs. 1 lit. f DSGVO beruht. Die Verarbeitung wird dann beendet, sofern keine zwingenden schutzwürdigen Gründe nachgewiesen werden können, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.": "You have the right, on grounds relating to your particular situation, to object at any time to the processing of personal data based on Art. 6(1)(f) GDPR. The processing will then cease unless compelling legitimate grounds can be demonstrated that override your interests, rights and freedoms, or the processing is required for the establishment, exercise or defence of legal claims.",
    "12 / Beschwerderecht": "12 / Right to lodge a complaint",
    "Beschwerde bei einer Aufsichtsbehörde": "Complaint to a supervisory authority",
    "Sie haben nach Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die für den Sitz des Verantwortlichen zuständige Behörde ist:": "Under Art. 77 GDPR, you have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for the controller’s place of establishment is:",
    "13 / Bereitstellung & Automatisierung": "13 / Provision & automation",
    "Pflichtangaben und automatisierte Entscheidungen": "Required information and automated decisions",
    "Sie sind weder gesetzlich noch vertraglich verpflichtet, personenbezogene Daten über diese Website bereitzustellen. Für die Beantwortung einer Anfrage sind jedoch zumindest eine erreichbare Kontaktmöglichkeit und die zur Bearbeitung notwendigen Angaben erforderlich.": "You are under no legal or contractual obligation to provide personal data through this website. To receive a response, however, you must provide at least a working means of contact and the information required to handle your enquiry.",
    "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.": "No automated decision-making, including profiling within the meaning of Art. 22 GDPR, takes place.",
    "14 / Aktualisierung": "14 / Updates",
    "Änderungen dieser Datenschutzerklärung": "Changes to this privacy policy",
    "Diese Datenschutzerklärung wird angepasst, wenn sich Funktionen, eingesetzte Dienstleister oder rechtliche Anforderungen ändern. Maßgeblich ist die jeweils auf dieser Website veröffentlichte Fassung.": "This privacy policy will be updated whenever the website’s features, service providers or legal requirements change. The version published on this website at the relevant time applies.",
    "Rechtliche Navigation": "Legal navigation",
    "Startseite": "Home",
    "Datenschutz · Richard Heim": "Privacy · Richard Heim"
  };

  const textRecords = [];
  const attributeRecords = [];
  const attributeNames = ["aria-label", "placeholder", "alt"];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;

  while ((textNode = walker.nextNode())) {
    const parent = textNode.parentElement;
    const value = textNode.nodeValue;
    const key = value.trim();
    if (!parent || !key || parent.matches("script, style") || !translations[key]) continue;
    const start = value.indexOf(key);
    textRecords.push({
      node: textNode,
      prefix: value.slice(0, start),
      suffix: value.slice(start + key.length),
      de: key,
      en: translations[key]
    });
  }

  document.querySelectorAll("[aria-label], [placeholder], [alt]").forEach(function (element) {
    attributeNames.forEach(function (name) {
      const value = element.getAttribute(name);
      if (value && translations[value]) {
        attributeRecords.push({ element: element, name: name, de: value, en: translations[value] });
      }
    });
  });

  const originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description ? description.getAttribute("content") : "";
  const languageBanner = document.getElementById("language-banner");
  let currentLanguage = "de";

  function readPreference(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function savePreference(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* Local files may restrict storage. */ }
  }

  function closeLanguageBanner() {
    if (!languageBanner || languageBanner.hidden) return;
    languageBanner.classList.remove("is-visible");
    window.setTimeout(function () { languageBanner.hidden = true; }, 240);
  }

  function applyLanguage(language, persist) {
    currentLanguage = language === "en" ? "en" : "de";
    document.documentElement.lang = currentLanguage;

    textRecords.forEach(function (record) {
      if (!record.node.isConnected) return;
      record.node.nodeValue = record.prefix + record[currentLanguage] + record.suffix;
    });

    attributeRecords.forEach(function (record) {
      if (!record.element.isConnected) return;
      record.element.setAttribute(record.name, record[currentLanguage]);
    });

    document.title = currentLanguage === "en" && translations[originalTitle]
      ? translations[originalTitle]
      : originalTitle;
    if (description && translations[originalDescription]) {
      description.setAttribute("content", currentLanguage === "en" ? translations[originalDescription] : originalDescription);
    }

    document.querySelectorAll("[data-language-switch]").forEach(function (button) {
      button.setAttribute("aria-label", currentLanguage === "en" ? "View website in German" : "Website auf Englisch anzeigen");
    });

    if (persist !== false) savePreference("rh-site-language", currentLanguage);
    closeLanguageBanner();
    document.dispatchEvent(new CustomEvent("site-language-change", { detail: { language: currentLanguage } }));
  }

  window.siteLanguage = {
    get: function () { return currentLanguage; },
    set: function (language) { applyLanguage(language, true); },
    translate: function (germanText) {
      return currentLanguage === "en" && translations[germanText] ? translations[germanText] : germanText;
    }
  };

  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const storedLanguage = readPreference("rh-site-language");
  const initialLanguage = requestedLanguage === "en" || requestedLanguage === "de"
    ? requestedLanguage
    : (storedLanguage === "en" || storedLanguage === "de" ? storedLanguage : "de");
  applyLanguage(initialLanguage, false);

  document.querySelectorAll("[data-language-switch]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(currentLanguage === "de" ? "en" : "de", true);
    });
  });

  document.querySelectorAll("[data-language-choice]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.dataset.languageChoice, true);
    });
  });

  document.querySelectorAll("[data-language-dismiss]").forEach(function (button) {
    button.addEventListener("click", function () {
      savePreference("rh-site-language", currentLanguage);
      closeLanguageBanner();
    });
  });

  if (languageBanner && !storedLanguage && requestedLanguage !== "en" && requestedLanguage !== "de") {
    const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || "de";
    if (browserLanguage.toLowerCase().startsWith("en")) {
      window.setTimeout(function () {
        languageBanner.hidden = false;
        window.requestAnimationFrame(function () { languageBanner.classList.add("is-visible"); });
      }, 700);
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLanguageBanner();
  });
})();
