---
title: "Prompt-Grundlagen: So versteht dich jede KI"
description: "Fünf Bausteine, mit denen deine Prompts vom ersten Versuch an brauchbare Ergebnisse liefern – in ChatGPT, Claude oder Gemini."
category: "Grundlagen & Einrichtung"
level: "Einsteiger"
duration: 10
tools: ["ChatGPT", "Claude", "Gemini"]
published: 2026-06-02
featured: true
---

Die meisten enttäuschenden KI‑Antworten haben dieselbe Ursache: Die KI musste raten. Ein guter Prompt nimmt ihr das Raten ab. Dafür brauchst du keine Tricks, sondern fünf Bausteine.

## Die fünf Bausteine

| Baustein | Frage dahinter | Beispiel |
|---|---|---|
| **Rolle** | Aus welcher Perspektive soll die KI antworten? | „Du bist erfahrene Steuerberaterin für Selbstständige.“ |
| **Kontext** | Was muss sie über die Situation wissen? | „Ich bin Fotograf, Kleinunternehmer, erstes Geschäftsjahr.“ |
| **Aufgabe** | Was genau soll herauskommen? | „Erkläre, welche Ausgaben ich absetzen kann.“ |
| **Format** | Wie soll das Ergebnis aussehen? | „Als Tabelle mit Spalten Ausgabe, absetzbar ja/nein, Hinweis.“ |
| **Grenzen** | Was soll sie vermeiden? | „Maximal 10 Zeilen. Keine Fachbegriffe ohne Erklärung.“ |

Du musst nicht jedes Mal alle fünf verwenden. Aber jeder fehlende Baustein ist eine Stelle, an der die KI raten muss.

## Vorher und nachher

### Vorher

```text
Schreib mir eine E-Mail an einen Kunden wegen der Verspätung.
```

Das Ergebnis ist meist generisch, zu lang und im falschen Ton.

### Nachher

```text
Du bist meine Assistenz im Kundenservice einer kleinen Möbelmanufaktur.

Kontext: Herr Weber hat einen Esstisch bestellt, Liefertermin war der 12. Mai.
Wegen eines Lieferengpasses beim Holz verschiebt sich die Lieferung um 10 Tage.
Er ist Stammkunde.

Aufgabe: Schreibe eine kurze E-Mail, die die Verspätung erklärt und sich entschuldigt.
Biete als Ausgleich eine kostenlose Pflegeölflasche an.

Format: Betreffzeile + maximal 5 Sätze. Persönlich, warm, nicht unterwürfig.
```

Gleiche Aufgabe, aber jetzt kennt die KI Absender, Empfänger, Grund, Ton und Länge.

## Drei Techniken für bessere Ergebnisse

### 1. Beispiele zeigen statt beschreiben

Wenn du einen bestimmten Stil willst, füge ein oder zwei Beispiele ein. „Schreibe im Stil dieser drei Produktbeschreibungen: …“ funktioniert zuverlässiger als jede Stilbeschreibung.

### 2. In Schritten denken lassen

Bei komplexen Aufgaben hilft der Zusatz: „Geh Schritt für Schritt vor und nenne zuerst deine Annahmen.“ So erkennst du Denkfehler, bevor sie im Ergebnis landen.

### 3. Nachfragen erlauben

Ergänze: „Wenn dir Informationen fehlen, stelle mir zuerst bis zu drei Rückfragen.“ Das ist der einfachste Weg zu besseren Antworten, und die meisten vergessen ihn.

## Deine Vorlage zum Kopieren

```text
Du bist [Rolle].

Kontext: [Situation, Zielgruppe, relevante Fakten]

Aufgabe: [Was genau soll entstehen?]

Format: [Länge, Struktur, Ton]

Grenzen: [Was vermeiden?]

Wenn dir Informationen fehlen, stelle zuerst Rückfragen.
```

> **Tipp:** Speichere Prompts, die gut funktionieren. In ChatGPT und Claude kannst du dafür „Projekte“ mit festen Anweisungen anlegen. Dann musst du Rolle und Kontext nie wieder eintippen.

## Nächster Schritt

Wenn deine Prompts sitzen, lohnt sich der Schritt zur ersten Automation: [E‑Mails automatisch sortieren](/guides/emails-sortieren-n8n/).
