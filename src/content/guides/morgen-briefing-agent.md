---
title: "Morgen-Briefing: Dein Tag in 30 Sekunden"
description: "Ein Workflow liest jeden Morgen Kalender und Posteingang und schickt dir eine Zusammenfassung dessen, was heute zählt."
category: "Produktivität & Büro"
level: "Anwender"
duration: 15
tools: ["n8n", "Google Kalender", "Gmail", "OpenAI oder Anthropic"]
published: 2026-09-08
featured: true
---

Statt morgens drei Apps zu öffnen, bekommst du um 7:30 Uhr eine einzige Nachricht: Termine, wichtige Mails und eine Empfehlung, womit du anfangen solltest.

## Das Ergebnis

```text
Guten Morgen! Dein Dienstag auf einen Blick:

TERMINE
09:30 Kundencall Müller GmbH
14:00 Team-Review Q4-Kampagne

WICHTIG IM POSTEINGANG
• Angebotsanfrage von Schmidt & Co – Antwort bis 12 Uhr erbeten
• Rechnung #1042 wurde bezahlt

EMPFEHLUNG
Beantworte zuerst die Angebotsanfrage, danach Vorbereitung für 09:30.
```

## Aufbau des Workflows

| Schritt | n8n‑Knoten | Aufgabe |
|---|---|---|
| 1 | Schedule Trigger | Startet jeden Werktag um 7:30 Uhr |
| 2 | Google Calendar | Holt alle Termine des Tages |
| 3 | Gmail | Holt ungelesene Mails der letzten 24 Stunden |
| 4 | Aggregate | Fasst Termine und Mails zu einem Datenpaket zusammen |
| 5 | Basic LLM Chain | Die KI schreibt das Briefing |
| 6 | Gmail (Send) | Schickt dir das Briefing |

## Schritt 1: Zeitplan

Füge einen **Schedule Trigger** hinzu: *Trigger Interval* = Custom (Cron), Ausdruck:

```text
30 7 * * 1-5
```

Das bedeutet: um 7:30 Uhr, Montag bis Freitag. Prüfe in den Workflow‑Einstellungen, dass die Zeitzone auf *Europe/Berlin* steht.

## Schritt 2: Termine holen

Knoten **Google Calendar**, Aktion *Get Many Events*:

- Calendar: dein Hauptkalender
- After: `{{ $now.startOf('day').toISO() }}`
- Before: `{{ $now.endOf('day').toISO() }}`

## Schritt 3: E‑Mails holen

Knoten **Gmail**, Aktion *Get Many Messages*, mit dem Suchfilter:

```text
is:unread newer_than:1d -category:promotions
```

Begrenze das Ergebnis auf 20 Mails. Das hält das Briefing kurz und die Kosten niedrig.

## Schritt 4: Der Prompt

Im Knoten **Basic LLM Chain** (verbunden mit einem Chat Model) verwendest du diesen Prompt:

```text
Du bist meine persönliche Assistenz. Erstelle ein Morgen-Briefing.

Termine heute:
{{ JSON.stringify($('Google Calendar').all().map(e => ({ start: e.json.start, titel: e.json.summary }))) }}

Ungelesene E-Mails:
{{ JSON.stringify($('Gmail').all().map(m => ({ von: m.json.from, betreff: m.json.subject, auszug: m.json.snippet }))) }}

Format:
- TERMINE: chronologisch, Uhrzeit + Titel
- WICHTIG IM POSTEINGANG: maximal 5 Punkte, nur was eine Reaktion braucht
- EMPFEHLUNG: ein Satz, womit ich anfangen sollte
Keine Einleitung, kein Fazit. Deutsch, knapp.
```

## Schritt 5: Zustellen

Ein **Gmail**‑Knoten mit *Send Message* an deine eigene Adresse. Betreff: `Dein Briefing für {{ $now.setLocale('de').toFormat('cccc, d. LLLL') }}`.

Statt per Mail kannst du das Briefing auch per Telegram, Slack oder als Seite in Notion zustellen. n8n hat für alle drei fertige Knoten.

> **Tipp:** Füge nach ein paar Tagen im Prompt hinzu, was dir wichtig ist: „Mails von Kunden haben immer Priorität“ oder „Ignoriere automatische Benachrichtigungen von GitHub“. So wird das Briefing jede Woche besser.
