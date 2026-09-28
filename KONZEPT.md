# Klarwerk — Konzept 2.0

> **KI. Klar gemacht.**

Diese Fassung verfeinert Konzept 1.0. Sie behält Marke, Aufbau und Gestaltung und schärft Positionierung, Sprache, Struktur und Texte. Alle Texte hier sind final formuliert und so auf der Website umgesetzt. Was sich geändert hat und warum, steht in [Abschnitt 9](#9-was-sich-geändert-hat--und-warum).

Technik und Betrieb: [docs/ARCHITEKTUR.md](docs/ARCHITEKTUR.md) · Inhalte pflegen: [docs/PFLEGE.md](docs/PFLEGE.md)

---

## 1. Kern

### Positionierung
**Klarwerk ist die KI‑Akademie für alle, die mit KI echte Arbeit abgeben wollen – ohne Programmierkenntnisse und ohne Hype.**

### Value Proposition

| Ebene | Text |
|---|---|
| **Versprechen** (Hero) | Arbeit, die sich selbst erledigt. |
| **Erklärung** | Lerne, KI‑Automationen einzurichten, die für dich lesen, schreiben und sortieren. Ohne eine Zeile Code. |
| **Beweis** (drei Pfeiler) | **Jeder Guide getestet.** Was nicht funktioniert, erscheint nicht. · **Kein Code nötig.** Du richtest ein, statt zu programmieren. · **Datenschutz mitgedacht.** Du weißt immer, welche Daten wohin fließen. |
| **Markenclaim** | KI. Klar gemacht. |

### Was Klarwerk nicht ist
Keine Nachrichtenseite für KI‑Tools. Keine Entwickler‑Dokumentation. Kein „10x‑Produktivität“‑Versprechen. Klarwerk ist die ruhige Werkstatt, in der Automationen entstehen, die wirklich laufen.

### Zielgruppen

| Priorität | Zielgruppe | Kernbedürfnis |
|---|---|---|
| 1 | Selbstständige & kleine Teams | Zeit zurückgewinnen, ohne Personal einzustellen |
| 2 | Unternehmer | Wiederkehrende Abläufe verlässlich automatisieren |
| 3 | Angestellte | KI‑Kompetenz für die eigene Karriere |
| 4 | Tech‑Interessierte | Verstehen, wie es funktioniert, und eigene Agenten bauen |

---

## 2. Sprache

### Fünf Schreibregeln

| Regel | So | Nicht so |
|---|---|---|
| **Zwei Takte statt einem Satz.** Headlines haben höchstens sechs Wörter, oft als Paar mit Punkt. | Einmal einrichten. Für immer entlastet. | Richte Automationen ein, die dich dauerhaft entlasten |
| **Nutzen vor Funktion.** | Deine Daten bleiben, wo sie hingehören. | Lokale Inferenz ohne Cloud‑Anbindung |
| **Nur belegbare Zahlen.** Keine Mengenangaben, die nicht stimmen. | {Anzahl} Guides (automatisch gezählt) | Über 70 Anleitungen, Hunderte Prompts |
| **Ruhig, direkt, per Du.** Keine Ausrufezeichen, keine Superlative. | Wer heute anfängt, arbeitet morgen anders. | Revolutioniere jetzt deinen Workflow! |
| **Ehrlich über Grenzen.** | Prüfe Summen immer selbst. | Die KI erledigt alles fehlerfrei. |

### Glossar

Jeder Begriff bedeutet auf der ganzen Website genau eine Sache.

| Begriff | Bedeutung | Stattdessen nicht |
|---|---|---|
| **Automation** | Ein Ablauf, der ohne dich läuft: Auslöser → Schritte → Ergebnis. | Workflow‑Automatisierung, Bot |
| **Guide** | Getestete Schritt‑für‑Schritt‑Anleitung. Am Ende läuft eine Automation. | Tutorial, Anleitung (nur im Fließtext) |
| **Lernpfad** | Vier Stufen: Einsteiger → Anwender → Automatisierer → Architekt. | Kurs, Curriculum |
| **Modul** | Ein Baustein innerhalb eines Lernpfads: ein kostenloser Guide oder ein Pro‑Inhalt (Profi‑Guide oder Video‑Lektion). | nur innerhalb der Lernpfade verwenden |
| **Video‑Kurs** | Videoreihe zu einem Thema, Teil von Pro. | Masterclass |
| **Vorlage** | Fertiger Workflow zum Importieren, Teil von Pro. | Template, Skill, Tool |
| **Prompt** | Formulierte Anweisung an eine KI, gesammelt in der Prompt‑Bibliothek. | – |
| **KI‑Agent** | KI, die mehrere Schritte selbstständig ausführt und Werkzeuge nutzt. | Bot, Assistent (außer in Headlines) |
| **Klartext** | Der kostenlose Newsletter. | – |
| **Pro** | Die bezahlte Mitgliedschaft. | Premium, Plus |

### CTA‑System

Jeder Button sagt genau, was als Nächstes passiert.

| Ort | Label | Ziel | Rolle |
|---|---|---|---|
| Navigation | **Klartext abonnieren** | `/newsletter/` | Kostenlose Bindung |
| Hero, Tarif „Kostenlos“ | **Ersten Guide starten** | `/guides/prompt-grundlagen/` | Sofortiger Nutzen |
| Hero (sekundär), Guide‑Listen | Alle Guides ansehen › | `/guides/` | Erkunden |
| Beispiel‑Sektion | Zum Guide › | Guide | Vertiefen |
| Startseite, Tarif „Pro“ | **Pro entdecken** | `/pro/` | Informieren |
| Pro‑Seite | **Pro werden** | Checkout | Kaufen |

---

## 3. Informationsarchitektur

### Navigation
`Klarwerk` · Lernpfade · Guides · Kurse · Prompts · Pro · Über uns · **Klartext abonnieren**

Die Reihenfolge folgt dem Lernweg: erst die Orientierung, dann Inhalte, dann das Angebot.

### Dramaturgie der Startseite

Jedes Kapitel beantwortet genau eine Frage.

| # | Kapitel | Frage des Besuchers | Hintergrund |
|---|---|---|---|
| 1 | **Hero** | Was bekomme ich hier? | Weiß |
| 2 | **Was du lernst.** | Welche Fähigkeiten? | Grau |
| 3 | **Ein Beispiel.** | Wie konkret ist das? | Weiß |
| 4 | **Warum automatisieren?** | Lohnt sich das für mich? | Schwarz (Bühne) |
| 5 | **So lernst du.** | Wie läuft das Lernen ab? | Grau |
| 6 | **Frisch getestet.** | Ist das aktuell? | Weiß |
| 7 | **Für wen.** | Bin ich gemeint? | Weiß |
| 8 | **Starte kostenlos.** | Was kostet es? | Weiß |
| 9 | **Klartext.** | Wie bleibe ich dran? | Grau |

### Seitenstruktur

| Seite | Aufgabe |
|---|---|
| `/` | Überzeugen und orientieren |
| `/lernpfade/` | Den Weg zeigen, kostenlose und Pro‑Module unterscheiden |
| `/guides/` · `/guides/<name>/` | Nutzen stiften, Vertrauen aufbauen |
| `/kurse/` | Pro‑Inhalte zeigen |
| `/prompts/` | Schneller Nutzen, Einstieg in Prompting |
| `/pro/` | Verkaufen, Fragen beantworten |
| `/ueber-uns/` | Haltung zeigen |
| `/newsletter/` · `/kontakt/` | Bindung, Anfragen |

---

## 4. Startseite — finale Texte

### 4.1 Hero

| Element | Text |
|---|---|
| Eyebrow | Klarwerk Akademie |
| Headline | **Arbeit, die sich selbst erledigt.** |
| Subline | Lerne, KI‑Automationen einzurichten, die für dich lesen, schreiben und sortieren. Ohne eine Zeile Code. |
| CTA primär | Ersten Guide starten |
| CTA sekundär | Alle Guides ansehen › |
| Pfeiler | Jeder Guide getestet · Kein Code nötig · Datenschutz mitgedacht |
| Visual | Lebendige Workflow‑Karte: Neue E‑Mail → KI versteht → Aufgabe angelegt. Statuszeile „Aktiv · heute 38‑mal ausgeführt“. |
| Tool‑Zeile | *Guides für* ChatGPT · Claude · Gemini · Ollama · n8n · Notion · Gmail · Outlook · Google Kalender |

### 4.2 Was du lernst.

**Headline:** Was du lernst. *(grau:)* Und was es dir bringt.

| Kachel | Label | Headline | Text | Visual |
|---|---|---|---|---|
| groß | Automationen | **Einmal einrichten. Für immer entlastet.** | Erkenne, welche Aufgaben sich wiederholen, und übergib sie an die KI. Schritt für Schritt, mit Ergebnissen ab dem ersten Tag. | Arbeitswoche, deren Aufgaben nach und nach die KI übernimmt |
| klein | KI‑Tools | **Jedes Tool. Auf den Punkt.** | Was ChatGPT, Claude, n8n und Co. können, wo ihre Grenzen liegen und welches du wann brauchst. | Tool‑Chips |
| klein | Für Unternehmen | **Dein Team. Nur schneller.** | Rechnungen, Angebote, Reporting: bewährte Abläufe, angepasst an eure Prozesse. | PDF → KI → Excel |
| klein | Lokale KI | **Privat. Per Design.** | Sprachmodelle auf deinem eigenen Rechner. Deine Daten bleiben, wo sie hingehören. | Laptop mit Schloss |
| klein | KI‑Agenten | **Assistenten, die handeln.** | Agenten recherchieren, sortieren und erledigen Aufgaben selbstständig. Die Entscheidung bleibt bei dir. | Atmender Aurora‑Orb |
| breit | Prompting | **Die richtigen Worte. Sofort.** | Lerne die fünf Bausteine guter Prompts. Und nutze geprüfte Vorlagen aus der Bibliothek. → *Zur Prompt‑Bibliothek ›* | Prompts mit Kopieren‑Button |

### 4.3 Ein Beispiel.

| Element | Text |
|---|---|
| Eyebrow | Ein Beispiel |
| Headline | **Dein Morgen. In 30 Sekunden erfasst.** |
| Text | Jeden Morgen um 7:30 liest ein Workflow deinen Kalender und Posteingang. Dann schickt er dir, was heute zählt. Einrichtung: 15 Minuten. Ersparnis: jeden Tag. |
| CTA | Zum Guide › |
| Visual | Briefing‑Karte „Dienstag, 7:30 · Guten Morgen, Lena.“ mit Terminen, wichtigen Mails und einer Empfehlung |

### 4.4 Warum automatisieren? *(dunkle Bühne)*

**Headline:** Warum automatisieren? · **Subline:** Weil deine Zeit für Besseres gemacht ist.

| Argument | Text | Visual |
|---|---|---|
| **Zeit. Zurückgewonnen.** | Routine kostet dich jede Woche Stunden. Eine Automation gibt sie dir zurück. Jede Woche aufs Neue. | Aktivitätsring füllt sich |
| **Kopf frei. Für das Wesentliche.** | Sortieren, abtippen, nachfassen: Das läuft von allein. Du konzentrierst dich auf das, was nur du kannst. | Aufgabenstapel löst sich auf, eine Karte bleibt |
| **Mehr Anfragen. Gleicher Aufwand.** | Doppelt so viele Anfragen? Deine Workflows schaffen das. Dein Kalender bleibt, wie er ist. | Ein Knoten verzweigt sich in viele |
| **Ein Vorsprung, der wächst.** | Jede Automation macht die nächste leichter. Wer heute anfängt, arbeitet morgen anders. | Linie biegt sich zur Kurve |

### 4.5 So lernst du.

**Headline:** Vom ersten Prompt zum eigenen Agenten. · **Subline:** Ein klarer Weg. In deinem Tempo.

| Kachel | Label | Headline | Text | Visual |
|---|---|---|---|---|
| breit | Lernpfade | **Dein Weg. Vorgezeichnet.** | Vier Stufen vom Einsteiger zum Architekten. Du weißt immer, wo du stehst und was als Nächstes kommt. → *Lernpfade ansehen ›* | Fortschrittsleiste mit vier Stationen |
| halb | Guides | **Klick für Klick. Zum Ergebnis.** | Jeder Guide ist getestet und endet mit einer Automation, die läuft. | Checkliste, die sich abhakt |
| halb, dunkel | Video‑Kurse | **Zusehen. Nachmachen. Können.** | Kompakte Lektionen mit Projektdateien. Pausieren, nachbauen, weiter. | Video‑Player |
| halb | Vorlagen | **Importieren statt nachbauen.** | Fertige Workflows für n8n. Anpassen, aktivieren, fertig. | vorlage.json → Importieren → Aktiv |
| halb | Community | **Niemand automatisiert allein.** | Fragen stellen, Workflows teilen und einmal im Monat live voneinander lernen. | Avatar‑Gruppe |

### 4.6 Frisch getestet.

**Headline:** Frisch getestet. · **Subline:** Die neuesten Guides aus der Werkstatt. · Drei neueste Guides automatisch · *Alle Guides ansehen ›*

### 4.7 Für wen

**Headline:** Gemacht für alle, die mehr bewegen wollen. · Umschalter mit vier Tabs. Workflows mit vorhandenem Guide sind verlinkt.

| Tab | Headline | Text | Typische Workflows |
|---|---|---|---|
| Unternehmer | **Führe dein Unternehmen. Nicht deinen Posteingang.** | Buchhaltung, Kundenanfragen und Reporting laufen automatisch. Du gewinnst Zeit für Strategie, Team und Wachstum. | Rechnungen automatisch erfassen · Angebote in Minuten · Wöchentliches Kennzahlen‑Briefing |
| Selbstständige | **Allein selbstständig. Nie mehr ohne Team.** | KI übernimmt Recherche, Entwürfe und Terminabstimmung. Du konzentrierst dich auf deine Kunden. | Neukunden recherchieren · Content für eine Woche in einer Stunde · Termine ohne Hin und Her |
| Angestellte | **Werde die Person, die weiß, wie es geht.** | Protokolle, Recherchen und Präsentationen in einem Bruchteil der Zeit. KI‑Kompetenz bringt jede Karriere voran. | Meeting‑Protokolle in zwei Minuten · Recherchen zusammenfassen · Präsentationen aus Stichpunkten |
| Tech‑Interessierte | **Nicht nur nutzen. Verstehen.** | Lokale Modelle, eigene Agenten, APIs und MCP‑Server. Für alle, die wissen wollen, wie es funktioniert. | Lokale KI mit Ollama · Eigene Agenten bauen · n8n selbst hosten |

### 4.8 Starte kostenlos. Wachse mit Pro.

| Kostenlos | Pro |
|---|---|
| **0 €** · Für immer. | **19 € / Monat** · Monatlich kündbar. *(Preis als Platzhalter)* |
| Alle frei verfügbaren Guides | Alles aus Kostenlos |
| Newsletter „Klartext“, jeden Sonntag | Alle Video‑Kurse |
| Ausgewählte Prompts | Profi‑Guides in voller Länge |
| | Vorlagen zum Importieren |
| | Komplette Prompt‑Bibliothek |
| | Community und monatliche Live‑Sessions |
| **Ersten Guide starten** | **Pro entdecken** |

### 4.9 Klartext.

**Klartext.** · Eine Automation pro Woche. Jeden Sonntag. Kostenlos. · `[E‑Mail‑Adresse] [Abonnieren]` · *Kein Spam. Abmeldung mit einem Klick.*

---

## 5. Unterseiten — Seitenköpfe

| Seite | Eyebrow | Headline | Lead |
|---|---|---|---|
| Lernpfade | Lernpfade | **Dein Weg. Vorgezeichnet.** | Vier Stufen, {n} Module, rund {h} Stunden. Jede Stufe endet mit etwas, das du sofort nutzt. |
| Guides | Guides | **Klick für Klick. Zum Ergebnis.** | Jeder Guide ist getestet und endet mit einer Automation, die läuft. Mit Zeitangabe und Schwierigkeitsgrad, damit du vorher weißt, worauf du dich einlässt. |
| Kurse | Video‑Kurse | **Zusehen. Nachmachen. Können.** | Kompakte Lektionen, echte Projekte, Dateien zum Mitmachen. Alle Kurse sind Teil von Pro. |
| Prompts | Prompt‑Bibliothek | **Die richtigen Worte. Sofort.** | Geprüfte Prompts, sortiert nach Aufgabe. Ersetze die Stellen in eckigen Klammern. Fertig. |
| Pro | Klarwerk Pro | **Mehr Tiefe. Mehr Tempo.** | Video‑Kurse, Profi‑Guides und fertige Vorlagen. Für alle, die KI nicht nur ausprobieren, sondern einsetzen wollen. |
| Über uns | Über Klarwerk | **KI ist kein Hexenwerk. Sondern Handwerk.** | Jeder kann von KI profitieren, wenn es jemand verständlich erklärt. Genau das tun wir. |
| Kontakt | Kontakt | **Sprich mit uns.** | Fragen zu einem Guide, Feedback oder ein Workshop für dein Team? Wir antworten in der Regel innerhalb von zwei Werktagen. |
| 404 | 404 | **Diese Seite hat sich wegautomatisiert.** | Vielleicht wurde sie verschoben oder umbenannt. |

**Pro‑Hinweis in Profi‑Guides:** *Weiter mit Pro.* Die vollständige Anleitung mit allen Schritten, Video und importierbarer Vorlage ist Teil von Pro. → **Pro entdecken**

---

## 6. Designsystem

| Prinzip | Umsetzung |
|---|---|
| **Eine Frage pro Kapitel** | Eine Headline, ein Gedanke, höchstens ein CTA. |
| **Typografie ist das Design** | Headlines 48–104 px, Gewicht 600, Laufweite −0,015 em. Fließtext 17–21 px. |
| **Weißraum als Luxus** | Kapitelabstand 120–160 px (Desktop), 80 px (Mobil). |
| **KI als Licht, nicht als Maschine** | Keine Roboter, keine Neon‑Gehirne. Aurora‑Verläufe, leuchtende Punkte, fließende Linien. |
| **Produkt statt Stockfoto** | Nutzen wird als echte Oberfläche gezeigt: Workflow‑Karten, Briefings, Checklisten. |
| **Bewegung mit Bedeutung** | Einblenden beim Scrollen (0,8 s, 24 px). Linien zeigen Datenfluss. `prefers-reduced-motion` wird respektiert. |

**Typografie:** System‑Stack mit SF Pro auf Apple‑Geräten. Auf allen anderen Geräten wird Inter vom eigenen Server geladen, ohne Verbindung zu Google.

**Farbverhältnis:** 90 % Polar (Weiß und Grau) · 8 % Graphite Night (Bühnen, Pro) · 2 % Aurora (nur KI‑Momente: Eyebrows, KI‑Knoten, Fortschritt).

**Komponenten:** Navigation mit Milchglas‑Effekt (48 px) · Pill‑Buttons · Kacheln mit 28 px Radius · Segmented Control · Aufklapp‑FAQ · weiche, groß gestreute Schatten.

---

## 7. Marke

### Slogans und wo sie eingesetzt werden

| Slogan | Einsatz |
|---|---|
| **KI. Klar gemacht.** | Markenclaim: neben dem Logo, im Footer, in Social‑Profilen |
| **Arbeit, die sich selbst erledigt.** | Hero der Startseite, Anzeigen |
| **Denk größer. Automatisiere den Rest.** | Kampagnen, Social‑Media‑Posts |
| **Weniger tun. Mehr bewirken.** | Newsletter‑Signatur, Vorträge |

### Logo
**Empfehlung: der Funke im Quadrat.** Ein schwarzes, abgerundetes Quadrat mit einem weichen, vierzackigen Stern im Aurora‑Verlauf. Das Zeichen ist minimal, funktioniert als Favicon und App‑Icon und ist bereits umgesetzt.
- **Der Orbit** wird zum Bewegungselement: ein Punkt, der als Ladeanimation um das Zeichen kreist.
- **Das offene K** bleibt Reserve für eine spätere Wortmarke.

### Farbpaletten

| Palette | Rolle | Farben |
|---|---|---|
| **Polar** | Basis | `#FFFFFF` · `#F5F5F7` · Text `#1D1D1F` / `#6E6E73` · Akzent `#0071E3` |
| **Graphite Night** | Bühnen & Pro | `#000000` · `#1D1D1F` · Text `#F5F5F7` / `#86868B` · Akzent `#2997FF` |
| **Aurora** | KI‑Signatur | Verlauf `#7A5CFF` → `#3FB6FF` → `#5CF2D0` |

### Domains

| Domain | Bewertung |
|---|---|
| **klarwerk.ai** | Empfehlung: kurz, markenfähig, international |
| **klarwerk.de** | Zusätzlich sichern: Vertrauen im deutschen Markt, Weiterleitung auf .ai |
| automatik.academy, flowschule.de | Nur als Alternative, falls Klarwerk markenrechtlich nicht frei ist |

---

## 8. Offene Entscheidungen

1. **Community:** Wo findet sie statt (z. B. Circle, Discord, eigene Plattform)? Solange das offen ist, erscheint die Community nur in Pro.
2. **Kostenloses Konto:** Aktuell besteht „Kostenlos“ aus Guides und Newsletter, ohne Registrierung. Soll es später ein Konto geben (z. B. für Lernfortschritt)?
3. **Preis:** 19 € / Monat ist ein Platzhalter. Ein Jahrestarif würde „Monatlich kündbar“ gut ergänzen.

---

## 9. Was sich geändert hat — und warum

| Bereich | Vorher | Nachher | Warum |
|---|---|---|---|
| **Positionierung** | Nicht ausformuliert | Ein Satz, drei Pfeiler, Abgrenzung | Jeder Text lässt sich daran messen |
| **Zahlen** | „Über 70 Anleitungen“, „Hunderte Prompts“ | Keine erfundenen Zahlen, Guide‑Anzahl wird automatisch gezählt | Die Marke verspricht „getestet statt behauptet“. Falsche Zahlen würden genau das brechen. |
| **CTAs** | „Kostenlos starten“ führte zum Newsletter | Jeder Button sagt, was passiert (siehe CTA‑System) | Klarheit vor Konvention |
| **Features** | Acht Kacheln mischten Themen (Agenten, Lokale KI) und Formate (Videos, Guides) | Zwei Kapitel: **Was du lernst** (Fähigkeiten) und **So lernst du** (Formate) | Eine Achse pro Kapitel. Das Format‑Kapitel ersetzt „Wie funktioniert die Plattform“, statt es zu doppeln. |
| **„Module“ und „Tools“** | Abstrakte Bausteine; „Tools“ kollidierte mit „KI‑Tools“ | Guides, Video‑Kurse, **Vorlagen**, Community | Konkrete Begriffe, siehe Glossar |
| **Warum‑Argumente** | Fünf, darunter „Präzision, die nicht müde wird“ | Vier. Präzision gestrichen. | Die Guides warnen selbst, dass KI Fehler macht. Vier starke Argumente wirken mehr als fünf gemischte. |
| **Lernpfade** | Module ohne Hinweis, wo man sie findet | Jedes Modul ist als **Guide** (kostenlos) oder **Pro** markiert, automatisch aus den Guide‑Daten | Der Weg ist sofort verständlich und zeigt den Mehrwert von Pro |
| **Kurse** | „Lektionen unter zehn Minuten“, aber eine Lektion mit 48 Minuten | Lange Lektion in fünf Teile geteilt, Versprechen „kompakt“ | Aussage und Inhalt passen zusammen |
| **Beispiel** | Briefing um 7:30, Karte zeigte 8:00 | Beides 7:30 | Detailtreue |
| **Tool‑Zeile** | „Funktioniert mit“, inklusive Make und Zapier | „Guides für“ und nur Tools, für die es Guides gibt | Keine Integration behaupten, die es nicht gibt |
| **Zielgruppen** | Teils Fachjargon („Lead‑Recherche“, „KPI“) | Alltagssprache; vorhandene Guides sind verlinkt | Jede Zielgruppe landet mit einem Klick bei einem Ergebnis |
| **Pro‑Seite** | „Alles. Für alle, die es ernst meinen.“ | „Mehr Tiefe. Mehr Tempo.“ | Nutzen statt Anspruchshaltung |
| **Navigation** | Guides zuerst | Lernpfade zuerst | Folgt dem Lernweg |
| **Typografie‑Hinweis** | Inter über Google Fonts | Inter vom eigenen Server | Datenschutz, entspricht der Umsetzung |
