---
title: "Diagramme per Beschreibung erstellen"
description: "Beschreibe einen Ablauf in Worten. Die KI schreibt den Code, du bekommst ein sauberes Diagramm. In Sekunden."
category: "Design & Multimedia"
level: "Einsteiger"
duration: 10
tools: ["ChatGPT oder Claude", "Mermaid"]
published: 2026-09-15
---

Diagramme mit der Maus zu zeichnen kostet Zeit. Mit **Mermaid**, einer einfachen Textsprache für Diagramme, beschreibst du nur noch, was du willst. Die KI schreibt den Code, ein Werkzeug zeichnet das Bild.

## Warum Mermaid?

- **Text statt Klicken:** Änderungen sind in Sekunden gemacht.
- **Überall nutzbar:** Notion, GitHub, GitLab, Obsidian und viele Wikis zeigen Mermaid‑Diagramme direkt an.
- **KI‑freundlich:** Sprachmodelle beherrschen die Syntax sehr gut.

## Schritt 1: Beschreiben

```text
Erstelle ein Mermaid-Flussdiagramm für unseren Bestellprozess:
Kunde bestellt online. Ist der Artikel auf Lager, wird er verpackt und
versendet. Wenn nicht, wird beim Lieferanten nachbestellt und der Kunde
per Mail informiert. Nach dem Versand bekommt der Kunde eine
Versandbestätigung. Gib nur den Mermaid-Code aus.
```

## Schritt 2: Code erhalten

Die KI antwortet etwa so:

```text
flowchart TD
    A[Kunde bestellt online] --> B{Artikel auf Lager?}
    B -- Ja --> C[Verpacken]
    C --> D[Versenden]
    D --> E[Versandbestätigung an Kunden]
    B -- Nein --> F[Beim Lieferanten nachbestellen]
    F --> G[Kunde per Mail informieren]
    G --> C
```

## Schritt 3: Anzeigen

- **Schnell:** Code in den kostenlosen Editor auf [mermaid.live](https://mermaid.live) einfügen und als PNG oder SVG exportieren.
- **In Notion:** Codeblock anlegen, Sprache „Mermaid“ wählen.
- **In GitHub:** In einer Markdown‑Datei einen Codeblock mit der Sprache `mermaid` verwenden.

## Weitere Diagrammtypen

| Typ | Mermaid‑Schlüsselwort | Gut für |
|---|---|---|
| Flussdiagramm | `flowchart` | Prozesse, Entscheidungen |
| Sequenzdiagramm | `sequenceDiagram` | Wer spricht wann mit wem |
| Gantt | `gantt` | Projektpläne |
| Mindmap | `mindmap` | Ideen, Brainstorming |
| Zeitstrahl | `timeline` | Meilensteine |

> **Tipp:** Wenn dir das Ergebnis nicht gefällt, sag der KI einfach, was sie ändern soll: „Mach das horizontal“ oder „Fasse Schritte C und D zusammen“. Das ist schneller als jedes Neuzeichnen.
