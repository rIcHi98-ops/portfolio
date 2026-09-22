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
    "Helles Raphael Website-Konzept vergrößern": "Enlarge the light Raphael website concept",
    "Mockup der interaktiven Web-Demo vergrößern": "Enlarge the interactive web demo mockup",
    "Dunkles Raphael Website-Konzept vergrößern": "Enlarge the dark Raphael website concept",
    "Responsive Website-Konzept für Fenne Tischlerei auf Desktop, Tablet und Smartphone": "Responsive website concept for Fenne Tischlerei on desktop, tablet and smartphone",
    "Helles responsive Website-Konzept für Raphael KI-Agenten": "Light responsive website concept for Raphael AI agents",
    "Dunkle interaktive Web-Demo auf Desktop, Tablet und Smartphone": "Dark interactive web demo on desktop, tablet and smartphone",
    "Dunkles responsive Website-Konzept für Raphael KI-Agenten": "Dark responsive website concept for Raphael AI agents",
    "Vergrößerte Arbeitsprobe schließen": "Close enlarged work sample",
    "Menü öffnen": "Open menu",
    "Menü schließen": "Close menu",
    "Richard Heim an seinem Arbeitsplatz mit Blick auf einen See": "Richard Heim at his desk overlooking a lake",
    "Portrait von Richard Heim an seinem Arbeitsplatz": "Portrait of Richard Heim at his desk",
    "FOKUS": "FOCUS"
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
