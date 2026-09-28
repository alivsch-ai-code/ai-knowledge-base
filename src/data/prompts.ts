// Prompt-Bibliothek. Neue Prompts einfach in der passenden Gruppe ergänzen.
// pro: true = nur Titel sichtbar, Prompt selbst in der Pro-Bibliothek.

interface Prompt {
  title: string;
  text: string;
  tip?: string;
  pro?: boolean;
}

export const promptGroups: { title: string; prompts: Prompt[] }[] = [
  {
    title: 'E-Mail & Kommunikation',
    prompts: [
      {
        title: 'E-Mail zusammenfassen und Antwort vorschlagen',
        text: 'Fasse diese E-Mail in drei Stichpunkten zusammen. Nenne dann, was von mir erwartet wird und bis wann. Schlage zum Schluss eine kurze, freundliche Antwort vor.\n\nE-Mail:\n[einfügen]',
        tip: 'Funktioniert auch mit ganzen E-Mail-Verläufen.',
      },
      {
        title: 'Heikle Nachricht entschärfen',
        text: 'Hier ist mein Entwurf für eine Nachricht an [Person/Rolle]. Formuliere ihn so um, dass er klar in der Sache, aber wertschätzend im Ton ist. Behalte alle Fakten bei. Zeige mir danach in zwei Sätzen, was du geändert hast.\n\nEntwurf:\n[einfügen]',
      },
      {
        title: 'Absage, die Türen offen lässt',
        text: 'Schreibe eine kurze Absage an [Name] für [Anfrage/Projekt]. Grund: [Grund]. Die Beziehung ist mir wichtig, ich möchte für künftige Anfragen offen bleiben. Maximal 5 Sätze.',
      },
    ],
  },
  {
    title: 'Recherche & Analyse',
    prompts: [
      {
        title: 'Dokument in 60 Sekunden verstehen',
        text: 'Lies das folgende Dokument und antworte in dieser Struktur:\n1. Worum geht es? (1 Satz)\n2. Die 5 wichtigsten Aussagen\n3. Was bedeutet das konkret für [meine Rolle/mein Unternehmen]?\n4. Offene Fragen oder Widersprüche\n\nDokument:\n[einfügen]',
      },
      {
        title: 'Entscheidung strukturiert abwägen',
        text: 'Ich muss mich entscheiden zwischen [Option A] und [Option B]. Kontext: [Situation]. Mir ist besonders wichtig: [Kriterien]. Erstelle eine Tabelle mit Vor- und Nachteilen, bewerte jede Option je Kriterium von 1 bis 5 und gib eine begründete Empfehlung. Nenne auch, welche Information die Entscheidung noch ändern könnte.',
      },
      {
        title: 'Wettbewerber-Kurzanalyse',
        text: 'Analysiere die folgenden Informationen über [Wettbewerber]. Was ist das Angebot, wer ist die Zielgruppe, wie ist die Preisstrategie, welche Stärken und Schwächen erkennst du? Leite drei konkrete Ideen ab, wie sich [mein Unternehmen] abheben kann.\n\nInformationen:\n[einfügen]',
        pro: true,
      },
    ],
  },
  {
    title: 'Marketing & Vertrieb',
    prompts: [
      {
        title: 'Produktbeschreibung mit Nutzenfokus',
        text: 'Schreibe eine Produktbeschreibung für [Produkt]. Zielgruppe: [Zielgruppe]. Wichtigste Eigenschaften: [Liste]. Übersetze jede Eigenschaft in einen konkreten Nutzen. Aufbau: eine starke Überschrift, ein Satz Versprechen, drei Nutzen-Absätze, ein Satz Handlungsaufforderung. Kein Superlativ ohne Beleg.',
      },
      {
        title: 'Eine Idee, fünf Kanäle',
        text: 'Hier ist ein Kerngedanke: [Idee]. Mache daraus:\n1. einen LinkedIn-Post (max. 1.200 Zeichen)\n2. drei Instagram-Slides (je 1 Satz)\n3. einen Newsletter-Absatz\n4. einen kurzen Video-Hook (max. 2 Sätze)\n5. eine Betreffzeile für eine E-Mail\nTon: [Ton].',
        pro: true,
      },
    ],
  },
  {
    title: 'Organisation & Planung',
    prompts: [
      {
        title: 'Aus Chaos wird eine Aufgabenliste',
        text: 'Hier sind meine ungeordneten Notizen. Mache daraus eine Aufgabenliste, gruppiert nach Projekten. Markiere, was dringend ist, was delegiert werden kann und was eigentlich gestrichen werden könnte.\n\nNotizen:\n[einfügen]',
      },
      {
        title: 'Wochenplan mit Fokuszeiten',
        text: 'Hier sind meine Termine und Aufgaben für nächste Woche: [einfügen]. Erstelle einen realistischen Wochenplan mit festen Fokusblöcken von 90 Minuten für die drei wichtigsten Aufgaben. Plane Puffer ein und sag mir, was nicht reinpasst.',
      },
    ],
  },
];
