---
title: "Rechnungen aus PDFs automatisch nach Excel"
description: "PDF in den Ordner legen, eine Minute später steht die Rechnung in deiner Tabelle. Mit Nummer, Datum, Betrag, Lieferant und Dublettenprüfung."
category: "Produktivität & Büro"
level: "Automatisierer"
duration: 45
tools: ["n8n", "Google Drive oder OneDrive", "Google Sheets oder Excel 365", "OpenAI oder Anthropic"]
published: 2026-08-25
pro: true
---

Jeden Monat dasselbe: Rechnungen öffnen, Beträge abtippen, Nummern prüfen. Dieser Workflow übernimmt das komplett. Du legst die PDF in einen Ordner, eine Minute später steht sie in deiner Tabelle.

## Was du in diesem Guide baust

- **Auslöser:** Neue Datei in einem Ordner (Google Drive oder OneDrive).
- **Texterkennung:** Der Text der PDF wird ausgelesen, auch bei eingescannten Rechnungen.
- **KI‑Extraktion:** Rechnungsnummer, Datum, Lieferant, Netto, Steuer und Brutto werden als strukturierte Daten erkannt.
- **Dublettenprüfung:** Ist die Rechnungsnummer schon in der Tabelle, wird die Rechnung nicht doppelt erfasst.
- **Ablage:** Neue Zeile in Google Sheets oder Excel 365, die PDF wird in einen Ordner „Erfasst“ verschoben.

## Das Ergebnis

| Datum | Lieferant | Rechnungsnr. | Netto | USt. | Brutto | Datei |
|---|---|---|---|---|---|---|
| 02.09.2026 | Büro Schmidt GmbH | RE‑2026‑0815 | 84,03 € | 15,97 € | 100,00 € | Link |
| 05.09.2026 | Hosting AG | 2026090512 | 10,00 € | 1,90 € | 11,90 € | Link |
