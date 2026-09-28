// Lernpfade, Kurse und FAQ. Neue Module oder Kurse einfach hier ergänzen.
// Ein Modul mit `guide` verlinkt auf den Guide. Kostenlos oder Pro ergibt sich aus dem Guide selbst (pro: true).
// Module ohne `guide` sind Video-Lektionen in Pro.

export const paths = [
  {
    level: 'Einsteiger',
    goal: 'Du verstehst, was KI kann, und nutzt sie sicher im Alltag.',
    result: 'Prompts, die dir jede Woche Zeit sparen.',
    modules: [
      { title: 'Was Sprachmodelle können – und was nicht', minutes: 12 },
      { title: 'ChatGPT, Claude, Gemini: das richtige Werkzeug wählen', minutes: 14 },
      { title: 'Prompt-Grundlagen: die fünf Bausteine', minutes: 10, guide: 'prompt-grundlagen' },
      { title: 'Projekte und eigene Anweisungen', minutes: 12 },
      { title: 'Datenschutz: Was darf in die KI?', minutes: 15 },
    ],
  },
  {
    level: 'Anwender',
    goal: 'Du richtest erste Automationen ein, die ohne dich laufen.',
    result: 'Ein sortierter Posteingang und ein tägliches Morgen-Briefing.',
    modules: [
      { title: 'Denken in Workflows: Auslöser, Schritte, Ergebnis', minutes: 12 },
      { title: 'n8n einrichten – Cloud oder selbst gehostet', minutes: 18 },
      { title: 'E-Mails automatisch sortieren', minutes: 14, guide: 'emails-sortieren-n8n' },
      { title: 'Morgen-Briefing aus Kalender und Posteingang', minutes: 16, guide: 'morgen-briefing-agent' },
      { title: 'Meeting-Protokolle automatisieren', minutes: 12, guide: 'meeting-protokolle' },
    ],
  },
  {
    level: 'Automatisierer',
    goal: 'Du verbindest Tools, Daten und KI zu verlässlichen Abläufen.',
    result: 'Eine automatische Rechnungserfassung für dein Unternehmen.',
    modules: [
      { title: 'Strukturierte Daten aus Dokumenten extrahieren', minutes: 18 },
      { title: 'Rechnungen aus PDFs nach Excel', minutes: 20, guide: 'rechnungen-pdf-excel' },
      { title: 'APIs verstehen ohne Programmierkenntnisse', minutes: 16 },
      { title: 'Fehlerbehandlung und Benachrichtigungen', minutes: 14 },
      { title: 'Kosten im Griff: Modelle wählen, Tokens sparen', minutes: 12 },
    ],
  },
  {
    level: 'Architekt',
    goal: 'Du entwirfst eigene KI-Agenten und betreibst sie sicher.',
    result: 'Einen eigenen Agenten mit Werkzeugen, Wissen und klaren Grenzen.',
    modules: [
      { title: 'Was ein Agent ist – und wann du keinen brauchst', minutes: 14 },
      { title: 'Lokale KI mit Ollama', minutes: 20, guide: 'ollama-lokal-installieren' },
      { title: 'Werkzeuge anbinden mit MCP-Servern', minutes: 20 },
      { title: 'Wissen anbinden: eigene Dokumente als Quelle', minutes: 18 },
      { title: 'Sicherheit, Freigaben und menschliche Kontrolle', minutes: 16 },
    ],
  },
];

export const courses = [
  {
    label: 'Praxiskurs',
    title: 'KI-Automatisierung mit n8n',
    description: 'Vom ersten Workflow zur Automation, die jeden Tag läuft. Du baust fünf echte Workflows und verstehst jeden Schritt.',
    lessons: [
      { title: 'Einrichtung und erster Workflow', minutes: 9 },
      { title: 'Daten verstehen: JSON ohne Angst', minutes: 8 },
      { title: 'KI-Knoten richtig einsetzen', minutes: 10 },
      { title: 'Workflow 1: E-Mails sortieren', minutes: 10 },
      { title: 'Workflow 2: Morgen-Briefing', minutes: 10 },
      { title: 'Workflow 3: Rechnungen erfassen', minutes: 10 },
      { title: 'Workflow 4: Angebote vorbereiten', minutes: 9 },
      { title: 'Workflow 5: Meeting-Protokolle', minutes: 9 },
      { title: 'Betrieb, Fehler und Kosten', minutes: 9 },
    ],
    status: 'Verfügbar',
  },
  {
    label: 'Praxiskurs',
    title: 'Claude im Arbeitsalltag',
    description: 'Projekte, Skills und Konnektoren: So richtest du Claude ein, dass es deine Arbeitsweise kennt und Aufgaben selbstständig übernimmt.',
    lessons: [
      { title: 'Claude Desktop und Projekte', minutes: 8 },
      { title: 'Eigene Skills erstellen', minutes: 12 },
      { title: 'Konnektoren für E-Mail, Kalender und Dateien', minutes: 10 },
      { title: 'Claude Code für Nicht-Entwickler', minutes: 14 },
    ],
    status: 'Verfügbar',
  },
  {
    label: 'Demnächst',
    title: 'Lokale KI für Unternehmen',
    description: 'Sprachmodelle auf eigener Hardware: Auswahl, Einrichtung, Anbindung an Dokumente und Workflows. Deine Daten verlassen das Haus nicht.',
    lessons: [
      { title: 'Hardware und Modellauswahl', minutes: 10 },
      { title: 'Ollama im Team betreiben', minutes: 12 },
      { title: 'Eigene Dokumente durchsuchbar machen', minutes: 14 },
    ],
    status: 'Erscheint Q4 2026',
  },
];

export const faq = [
  {
    q: 'Brauche ich Programmierkenntnisse?',
    a: 'Nein. Alle Guides sind für Menschen ohne Programmierkenntnisse geschrieben. Wo Code vorkommt, kopierst du ihn nur, und wir erklären, was er tut.',
  },
  {
    q: 'Welche Tools brauche ich?',
    a: 'Für den Einstieg reicht ein kostenloses Konto bei ChatGPT, Claude oder Gemini. Für Automationen nutzen wir vor allem n8n. Jeder Guide nennt vorab alle Werkzeuge und ob Kosten entstehen.',
  },
  {
    q: 'Was ist der Unterschied zwischen Kostenlos und Pro?',
    a: 'Kostenlos bekommst du alle frei verfügbaren Guides, ausgewählte Prompts und den Newsletter. Pro enthält zusätzlich alle Video-Kurse, die Profi-Guides in voller Länge, Vorlagen zum Importieren, die komplette Prompt-Bibliothek sowie Community und Live-Sessions.',
  },
  {
    q: 'Kann ich Pro monatlich kündigen?',
    a: 'Ja. Die Mitgliedschaft läuft monatlich und ist jederzeit zum Ende des Abrechnungszeitraums kündbar.',
  },
  {
    q: 'Wie aktuell sind die Inhalte?',
    a: 'KI-Tools ändern sich schnell. Deshalb trägt jeder Guide ein Datum und wird überarbeitet, sobald sich etwas Wesentliches ändert.',
  },
  {
    q: 'Gibt es Angebote für Teams und Unternehmen?',
    a: 'Ja. Für Teams ab fünf Personen bieten wir Team-Lizenzen und individuelle Workshops an. Schreib uns über das Kontaktformular.',
  },
];
