# Pflege‑Handbuch

So änderst du Inhalte auf der Klarwerk‑Website. Die meisten Aufgaben bestehen aus: **Datei bearbeiten → speichern → hochladen (git push)**. Nach ein bis zwei Minuten ist die Änderung online.

Technische Hintergründe stehen in [ARCHITEKTUR.md](ARCHITEKTUR.md). Schreibregeln, Glossar und CTA‑System stehen in [KONZEPT.md](../KONZEPT.md#2-sprache). Neue Texte sollten sich daran halten.

---

## Arbeitsweise

### Variante A: Am eigenen Rechner (empfohlen)

Einmalig: [Node.js](https://nodejs.org) (Version 22 oder neuer) und [Git](https://git-scm.com) installieren, dann im Projektordner:

```bash
npm install
```

Bei jeder Bearbeitung:

```bash
npm run dev          # Vorschau starten: http://localhost:4321
# ... Dateien bearbeiten, Vorschau aktualisiert sich automatisch ...
npm run build        # Prüfen, ob alles fehlerfrei baut
git add .
git commit -m "Neuer Guide: Rechnungen automatisieren"
git push             # → wird automatisch auf IONOS veröffentlicht
```

### Variante B: Direkt im Browser auf GitHub

Für kleine Textänderungen: Datei auf github.com öffnen, auf das Stift‑Symbol klicken, ändern, **Commit changes**. Die Veröffentlichung startet automatisch. Den Fortschritt siehst du unter **Actions**.

---

## Häufige Aufgaben

### Einen neuen Guide veröffentlichen

1. Neue Datei in `src/content/guides/` anlegen. Der Dateiname wird zur URL:
   `rechnungen-automatisieren.md` → `/guides/rechnungen-automatisieren/`
   (nur Kleinbuchstaben, Bindestriche, keine Umlaute)

2. Diesen Kopf einfügen und ausfüllen:

   ```markdown
   ---
   title: "Titel des Guides"
   description: "Ein bis zwei Sätze: Was baut man, was hat man davon?"
   category: "Produktivität & Büro"
   level: "Anwender"
   duration: 20
   tools: ["n8n", "Gmail"]
   published: 2026-10-01
   pro: false
   draft: false
   ---

   Einleitung ...

   ## Erster Abschnitt
   ```

   | Feld | Erlaubte Werte |
   |---|---|
   | `category` | `Grundlagen & Einrichtung`, `Produktivität & Büro`, `Marketing & Vertrieb`, `Design & Multimedia` |
   | `level` | `Einsteiger`, `Anwender`, `Automatisierer`, `Architekt` |
   | `duration` | Einrichtungszeit in Minuten (Zahl) |
   | `pro` | `true` = nur Teaser auf der Website, darunter erscheint automatisch der Pro‑Hinweis |
   | `draft` | `true` = wird nicht veröffentlicht |
   | `updated` | optional: Datum der letzten inhaltlichen Überarbeitung |

   Tippfehler in diesen Feldern stoppen den Build mit einer verständlichen Fehlermeldung. So geht nichts Fehlerhaftes online.

3. Den Text in Markdown schreiben:
   - `## Überschrift` → erscheint automatisch im Inhaltsverzeichnis rechts
   - `**fett**`, `*kursiv*`, `[Linktext](/guides/anderer-guide/)`
   - Code und Prompts in Codeblöcke mit drei Backticks
   - `> **Tipp:** …` erzeugt einen hervorgehobenen Hinweiskasten
   - Tabellen mit `| Spalte | Spalte |`

4. Bilder: in `public/images/guides/` ablegen und mit `![Beschreibung](/images/guides/bild.png)` einbinden. Vorher verkleinern (max. 1600 px breit, WebP oder PNG).

Der Guide erscheint automatisch in der Übersicht, bei „Frisch getestet“ auf der Startseite (die drei neuesten) und in der Sitemap.

### Einen Guide aktualisieren

Text ändern und im Kopf `updated: 2026-10-15` setzen. Auf der Seite steht dann „Aktualisiert“ mit Datum.

### Einen Guide umbenennen oder löschen

Die alte URL wurde vielleicht schon verlinkt. Deshalb in `public/.htaccess` eine Weiterleitung ergänzen:

```apache
RewriteRule ^guides/alter-name/?$ /guides/neuer-name/ [L,R=301]
```

### Prompt hinzufügen

In `src/data/prompts.ts` in der passenden Gruppe einen Eintrag ergänzen:

```ts
{
  title: 'Kurzer Titel',
  text: 'Der Prompt. Zeilenumbrüche mit \n.',
  tip: 'Optionaler Hinweis.',   // optional
  pro: true,                     // optional: nur Titel sichtbar
},
```

### Lernpfad‑Modul oder Kurs ändern

In `src/data/learning.ts`. Ein Modul mit `guide: 'dateiname-ohne-md'` wird automatisch verlinkt.

### FAQ ändern

In `src/data/learning.ts` im Abschnitt `faq`.

### Preis, E‑Mail, Social‑Links, Navigation

Alles zentral in `src/data/site.ts`.

### Newsletter anbinden

Im Newsletter‑Anbieter ein Anmeldeformular erstellen und die **Formular‑Action‑URL** in `site.ts → newsletterAction` eintragen. Das E‑Mail‑Feld heißt `EMAIL`; falls der Anbieter einen anderen Feldnamen erwartet, in `src/components/Newsletter.astro` anpassen. Solange das Feld leer ist, läuft das Formular im Demo‑Modus.

---

## Routine

| Wann | Was |
|---|---|
| **Jede Woche** | Neuen Guide oder Prompt veröffentlichen (passend zum Newsletter) |
| **Jeden Monat** | Kontaktformular testen · GitHub → Actions: Waren alle Deployments grün? |
| **Alle 3 Monate** | Ältere Guides prüfen: Stimmen Menüpunkte und Screenshots der Tools noch? · `npm update` ausführen, testen, pushen |
| **Bei jedem neuen Dienst** | Datenschutzerklärung ergänzen |
| **Einmal im Jahr** | Impressum, Datenschutz, AGB prüfen lassen · SSL‑Zertifikat und Domain‑Verlängerung im IONOS‑Kundenbereich kontrollieren |

## Wenn etwas schiefgeht

| Problem | Lösung |
|---|---|
| Deployment rot in GitHub Actions | Auf den fehlgeschlagenen Lauf klicken. Meist steht dort ein Tippfehler im Guide‑Kopf, z. B. eine falsch geschriebene Kategorie. |
| Änderung nicht sichtbar | Browser‑Cache leeren (Strg + F5). HTML wird nie lange gecacht. |
| Seite komplett kaputt | Letzte Änderung zurücknehmen: `git revert HEAD` und `git push`. Die vorherige Version ist nach 1–2 Minuten wieder online. |
| Kontaktformular sendet nicht | Prüfen, ob das Postfach `website@…` bei IONOS existiert und die Adressen in `public/api/kontakt.php` stimmen. |
