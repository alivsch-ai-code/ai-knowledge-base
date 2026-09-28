---
title: "Lokale KI mit Ollama: Installation in 20 Minuten"
description: "Ein Sprachmodell auf deinem eigenen Rechner. Ohne Cloud, ohne Abo. Deine Daten bleiben bei dir."
category: "Grundlagen & Einrichtung"
level: "Einsteiger"
duration: 20
tools: ["Ollama"]
published: 2026-07-14
featured: true
---

Mit Ollama läuft ein Sprachmodell direkt auf deinem Computer. Das ist ideal für vertrauliche Dokumente, Kundendaten oder einfach, um zu verstehen, wie KI unter der Haube funktioniert.

## Was du brauchst

| | Minimum | Empfohlen |
|---|---|---|
| **Arbeitsspeicher** | 8 GB (kleine Modelle, ca. 3 Mrd. Parameter) | 16 GB oder mehr (Modelle mit 7–8 Mrd. Parameter) |
| **Speicherplatz** | 5 GB frei | 20 GB frei |
| **System** | Windows 10/11, macOS 12+, Linux | Mac mit Apple‑Chip oder PC mit aktueller Grafikkarte |

Ohne Grafikkarte funktioniert es auch, die Antworten kommen dann nur langsamer.

## Schritt 1: Ollama installieren

1. Öffne [ollama.com](https://ollama.com) und lade das Installationsprogramm für dein System herunter.
2. Führe es aus. Unter Windows und macOS läuft Ollama danach im Hintergrund, erkennbar am Symbol in der Taskleiste bzw. Menüleiste.

Unter Linux genügt ein Befehl im Terminal:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## Schritt 2: Das erste Modell starten

Öffne das Terminal (Windows: „PowerShell“, Mac: „Terminal“) und gib ein:

```bash
ollama run llama3.2
```

Beim ersten Mal lädt Ollama das Modell herunter (rund 2 GB). Danach kannst du direkt chatten. Mit `/bye` beendest du die Unterhaltung.

> **Hinweis:** Modelle entwickeln sich schnell. Welche aktuell empfehlenswert sind, siehst du in der Bibliothek auf [ollama.com/library](https://ollama.com/library). Achte auf die Größenangabe hinter dem Namen, zum Beispiel `:3b` oder `:8b`.

## Schritt 3: Die wichtigsten Befehle

| Befehl | Was er tut |
|---|---|
| `ollama list` | Zeigt alle installierten Modelle |
| `ollama pull <modell>` | Lädt ein Modell herunter, ohne es zu starten |
| `ollama run <modell>` | Startet einen Chat mit dem Modell |
| `ollama rm <modell>` | Löscht ein Modell und gibt Speicher frei |
| `ollama ps` | Zeigt, welche Modelle gerade geladen sind |

## Schritt 4: Eine Oberfläche statt Terminal

Die aktuelle Ollama‑App für Windows und macOS bringt ein eigenes Chatfenster mit. Wer mehr will – etwa Dokumente hochladen oder mehrere Modelle vergleichen –, findet mit Open WebUI eine beliebte, kostenlose Oberfläche.

## Schritt 5: Ollama in Automationen nutzen

Ollama stellt auf deinem Rechner eine Schnittstelle unter `http://localhost:11434` bereit. Darüber können Tools wie n8n das lokale Modell ansprechen. Ein schneller Test:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Fasse in einem Satz zusammen, was Ollama ist.",
  "stream": false
}'
```

Kommt eine Antwort zurück, ist dein lokales Modell bereit für eigene Workflows.

## Wann lokal, wann Cloud?

- **Lokal:** vertrauliche Daten, Offline‑Arbeit, keine laufenden Kosten, Lernen und Experimentieren.
- **Cloud (ChatGPT, Claude, Gemini):** anspruchsvolle Texte, lange Dokumente, beste Qualität bei komplexem Denken.

Viele nutzen beides: lokal für die Vorverarbeitung sensibler Daten, Cloud für die Feinarbeit.
