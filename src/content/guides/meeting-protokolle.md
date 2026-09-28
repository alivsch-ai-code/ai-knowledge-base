---
title: "Meeting-Protokolle in zwei Minuten"
description: "Aus dem Transkript deines Meetings wird ein sauberes Protokoll mit Entscheidungen, Aufgaben und Verantwortlichen."
category: "Produktivität & Büro"
level: "Einsteiger"
duration: 15
tools: ["Microsoft Teams, Zoom oder Google Meet", "ChatGPT oder Claude"]
published: 2026-07-28
---

Niemand schreibt gern Protokoll. Mit der Transkriptionsfunktion deines Meeting‑Tools und einem guten Prompt ist es in zwei Minuten erledigt.

## Schritt 1: Transkript erstellen

Alle großen Meeting‑Tools können Gespräche mitschreiben:

- **Microsoft Teams:** Im Meeting unter „Weitere Optionen“ die Transkription starten. Je nach Lizenz fasst auch Copilot direkt zusammen.
- **Zoom:** Audio‑Transkription in den Einstellungen der Cloud‑Aufzeichnung aktivieren.
- **Google Meet:** Transkription über „Aktivitäten“ starten, sofern dein Workspace‑Tarif das unterstützt.

> **Wichtig:** Informiere alle Teilnehmenden zu Beginn, dass transkribiert wird, und hole ihr Einverständnis ein. Das ist nicht nur höflich, sondern datenschutzrechtlich geboten.

Nach dem Meeting lädst du das Transkript als Textdatei herunter.

## Schritt 2: Der Protokoll‑Prompt

Öffne ChatGPT oder Claude, füge das Transkript ein und verwende diesen Prompt:

```text
Erstelle aus dem folgenden Meeting-Transkript ein Protokoll.

Struktur:
1. Eckdaten: Datum, Teilnehmende, Thema (aus dem Transkript ableiten)
2. Zusammenfassung: 3–5 Sätze
3. Entscheidungen: nummerierte Liste
4. Aufgaben: Tabelle mit Spalten Aufgabe | Verantwortlich | Frist
5. Offene Fragen

Regeln:
- Nur Inhalte aus dem Transkript, nichts erfinden.
- Wenn Verantwortliche oder Fristen unklar sind, schreibe "offen".
- Sachlicher Ton, keine wörtlichen Zitate.

Transkript:
[hier einfügen]
```

## Schritt 3: Prüfen und versenden

Lies das Protokoll einmal gegen. Achte besonders auf Namen und Fristen, denn hier passieren die meisten Fehler. Dann kannst du es direkt per Mail verschicken oder in Notion, Confluence oder OneNote ablegen.

## Profi‑Tipp: Als Vorlage speichern

Lege in ChatGPT oder Claude ein **Projekt** namens „Protokolle“ an und hinterlege den Prompt als Anweisung. Ab dann fügst du nur noch das Transkript ein.

Wer noch einen Schritt weitergehen will, automatisiert auch das: Ein n8n‑Workflow kann neue Transkripte aus einem Ordner holen, das Protokoll erstellen und es allen Teilnehmenden schicken.
