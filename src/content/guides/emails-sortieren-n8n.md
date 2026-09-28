---
title: "E-Mails automatisch sortieren mit n8n"
description: "Die KI liest jede neue E-Mail, erkennt Anfrage, Rechnung oder Newsletter und vergibt das passende Label. Dein Posteingang sortiert sich selbst."
category: "Produktivität & Büro"
level: "Anwender"
duration: 30
tools: ["n8n", "Gmail", "OpenAI oder Anthropic"]
published: 2026-08-04
---

Du öffnest morgens den Posteingang, und alles ist schon sortiert: Kundenanfragen oben, Rechnungen im Buchhaltungs‑Label, Newsletter aus dem Weg. Genau das baust du in diesem Guide.

## So funktioniert der Workflow

1. **Auslöser:** Eine neue E‑Mail kommt in Gmail an.
2. **KI‑Klassifizierung:** Ein Sprachmodell liest Betreff und Text und ordnet die Mail einer Kategorie zu.
3. **Aktion:** n8n vergibt in Gmail das passende Label.

## Vorbereitung

- Ein **n8n**‑Konto. Für den Einstieg reicht n8n Cloud mit Testphase. Alternativ kannst du n8n selbst hosten.
- Ein **Gmail**‑Konto.
- Ein **API‑Schlüssel** von OpenAI oder Anthropic. Die Kosten liegen bei dieser Aufgabe typischerweise bei wenigen Cent pro hundert E‑Mails.
- Lege in Gmail vier Labels an: `Anfrage`, `Rechnung`, `Newsletter`, `Sonstiges`.

## Schritt 1: Gmail als Auslöser

1. Erstelle in n8n einen neuen Workflow.
2. Füge den Knoten **Gmail Trigger** hinzu und verbinde dein Google‑Konto.
3. Stelle „Poll Times“ auf *Every Minute* oder *Every 5 Minutes*.
4. Aktiviere unter „Options“ den Filter `Read Status: Unread emails only`.

Klicke auf **Fetch Test Event**, um eine Beispiel‑Mail zu laden.

## Schritt 2: Die KI klassifizieren lassen

1. Füge den Knoten **Text Classifier** hinzu.
2. Als Eingabetext wählst du Betreff und Text der Mail, zum Beispiel:

```text
Betreff: {{ $json.subject }}
Absender: {{ $json.from.value[0].address }}
Text: {{ $json.snippet }}
```

3. Lege die Kategorien an und beschreibe jede in einem Satz. Die Beschreibung ist entscheidend für die Qualität:

| Kategorie | Beschreibung |
|---|---|
| Anfrage | Eine Person fragt nach einem Angebot, Termin oder einer Leistung. |
| Rechnung | Die Mail enthält eine Rechnung, Zahlungserinnerung oder Quittung. |
| Newsletter | Werbung, Newsletter oder automatische Benachrichtigungen. |
| Sonstiges | Alles, was in keine andere Kategorie passt. |

4. Verbinde als Modell einen **Chat Model**‑Knoten (OpenAI oder Anthropic) und hinterlege deinen API‑Schlüssel. Ein kleines, günstiges Modell reicht für diese Aufgabe völlig.

## Schritt 3: Label vergeben

Der Text Classifier hat für jede Kategorie einen eigenen Ausgang. Hänge an jeden Ausgang einen **Gmail**‑Knoten mit der Aktion *Add Label to Message*:

- Message ID: `{{ $('Gmail Trigger').item.json.id }}`
- Label: das jeweils passende Label

## Schritt 4: Testen und aktivieren

1. Schicke dir selbst drei Test‑Mails: eine Anfrage, eine „Rechnung“, einen Newsletter.
2. Führe den Workflow manuell aus und prüfe die Labels.
3. Schalte den Workflow oben rechts auf **Active**.

> **Datenschutz:** Die E‑Mail‑Inhalte werden zur Klassifizierung an den KI‑Anbieter übertragen. Für vertrauliche Postfächer kannst du stattdessen ein lokales Modell über [Ollama](/guides/ollama-lokal-installieren/) anbinden oder nur den Betreff auswerten lassen.

## Erweiterungen

- **Priorität erkennen:** Eine fünfte Kategorie `Dringend` für Mails mit Fristen.
- **Antwortentwurf:** Für Anfragen automatisch einen Entwurf erstellen lassen, den du nur noch prüfst.
- **Rechnungen weiterleiten:** Mails mit dem Label `Rechnung` direkt an die Buchhaltung schicken.
