# Portfolio-Case 01 — Von operativen Reibungspunkten zu internen WebApps

**Status:** geschärfte Arbeitsfassung  
**Rolle im Portfolio:** Flagship Case  
**Bereich:** KI / Automatisierung / Business Operations  
**Zeitraum:** ab April 2026  

---

## Kurzfassung

Ich habe drei interne WebApps entwickelt, um wiederkehrende Unternehmensprozesse schneller, konsistenter und nutzerfreundlicher zu machen: einen Dokumenten-Generator, einen Social-Media-Post-Generator und eine eigene ABD-Software als Alternative bzw. Ergänzung zur offiziellen IAAP-Oberfläche.

Der Case zeigt nicht nur den Einsatz von KI, sondern vor allem die Übersetzung realer operativer Reibung in nutzbare digitale Werkzeuge. Die eigentliche Leistung liegt in der Prozessanalyse, der Definition von Eingaben und Outputs, der technischen Umsetzung, dem Testen und der Anpassung an den Unternehmensalltag.

---

## Eckdaten

| Feld | Inhalt |
|---|---|
| Zeitraum | ab April 2026 |
| Unternehmen | Outatex GmbH |
| Kontext | internes Familienunternehmen, Textilbranche, internationale operative Prozesse |
| Rolle | Konzeption, Entwicklung, Testing, Iteration |
| Tools | Claude, ChatGPT, Claude Code, Codex, Perplexity, HTML, CSS, JavaScript, TypeScript, Python, PWA, Netlify, GitHub |
| Ergebnis | drei interne WebApps für Dokumente, Social Media und ABD-Prozesse |
| Portfolio-Funktion | stärkster technischer Case, Verbindung aus Operations und Software |

---

## Ausgangslage

Im operativen Alltag gab es mehrere wiederkehrende Aufgaben, die nicht komplex im strategischen Sinn waren, aber regelmäßig Zeit kosteten und durch manuelle Schritte fehleranfällig blieben.

Drei Reibungspunkte waren besonders sichtbar:

- formelle Dokumente wurden manuell kopiert, angepasst und nachformatiert
- Social-Media-Beiträge wurden nicht durchgängig einheitlich im Unternehmensauftritt erstellt
- die offizielle IAAP-Oberfläche für Ausfuhrbegleitdokumente war im praktischen Exportprozess unübersichtlich und wenig komfortabel

Diese Probleme waren nicht isoliert. Sie traten dort auf, wo Arbeit immer wieder ähnlich abläuft: Eingaben erfassen, Daten anpassen, Ausgabe erzeugen, Ergebnis prüfen.

---

## Problem

Die bestehenden Abläufe hatten vier gemeinsame Schwächen:

1. **Wiederholung:** dieselben oder ähnliche Angaben mussten mehrfach manuell verarbeitet werden.
2. **Inkonsistenz:** Ergebnisse waren abhängig davon, wie sorgfältig im Einzelfall kopiert, formatiert oder gestaltet wurde.
3. **Benutzerfreundlichkeit:** vorhandene Oberflächen und Workflows waren nicht konsequent auf den tatsächlichen Arbeitsalltag zugeschnitten.
4. **Automatisierungsgrenze:** solange Daten nicht strukturiert abgefragt und verarbeitet werden, lassen sich Prozesse später kaum sinnvoll automatisieren.

Der wichtigste Punkt: Es ging nicht um eine abstrakte KI-Idee, sondern um konkrete Reibung in echten Unternehmensprozessen.

---

## Ziel

Ziel war es, kleine, klar abgegrenzte interne Werkzeuge zu schaffen, die:

- wiederkehrende Eingaben strukturieren
- manuelle Nacharbeit reduzieren
- Ergebnisse einheitlicher machen
- ohne lange Einarbeitung nutzbar sind
- spätere Automatisierung vorbereiten
- optisch und funktional zum Unternehmen passen

Die Tools sollten nicht als große Plattform entstehen, sondern als pragmatische WebApps für konkrete Engpässe.

---

## Meine Rolle

Ich habe die Tools eigenständig konzipiert, technisch umgesetzt und iterativ verbessert.

Meine Verantwortung umfasste:

- operative Schwachstellen erkennen
- vorhandene Abläufe analysieren
- benötigte Eingabefelder und Outputs definieren
- WebApp-Strukturen entwickeln
- UI und Nutzerführung auf den Arbeitsprozess zuschneiden
- KI-Systeme für Entwicklung, Recherche, Debugging und Strukturierung einsetzen
- Ergebnisse testen und anpassen
- Deployment und Verwaltung über Web-/GitHub-Workflows vorbereiten

Wichtig für die spätere öffentliche Darstellung: KI war hier kein Ersatz für eigene Arbeit, sondern ein Entwicklungswerkzeug. Die Entscheidungen über Prozesslogik, Struktur, Ziel und praktische Nutzbarkeit lagen bei mir.

---

## Vorgehen

### 1. Prozessreibung identifizieren

Der Ausgangspunkt waren Aufgaben, bei denen im Alltag immer wieder dieselben Muster auftraten:

- Dokumente vorbereiten
- Inhalte gestalten
- Zoll-/Exportdaten erfassen
- Unternehmensdaten wiederverwenden
- Ergebnisse in ein brauchbares Format bringen

Diese Reibungspunkte wurden zuerst nicht technisch, sondern prozessual betrachtet: Welche Eingaben gibt es? Was muss am Ende herauskommen? Welche Schritte sind wiederkehrend? Wo entstehen Fehler oder Nacharbeit?

### 2. Eingaben und Outputs strukturieren

Für jedes Tool wurde der Prozess in Eingabe, Verarbeitung und Ausgabe zerlegt.

Beispiele:

- Dokumenten-Generator: Formularfelder → strukturierter Dokumenteninhalt → Word-Export
- Social-Media-Generator: Thema, Lieferant, CI-Vorgaben → Post-Layout / Social Output
- ABD-Software: Firmendaten und Exportangaben → vorbereitete ABD-Struktur / bessere Eingabeführung

Diese Struktur ist wichtig, weil sie den Unterschied zwischen "Tool bauen" und "Prozess verstehen" zeigt.

### 3. WebApps entwickeln

Die Umsetzung erfolgte mit Webtechnologien:

- HTML für Struktur
- CSS für Layout und CI-nahe Gestaltung
- JavaScript / TypeScript für Interaktion und Logik
- Python dort, wo es für Verarbeitung oder Automatisierung sinnvoll war
- PWA-Ansätze für einfache Nutzbarkeit
- Netlify / GitHub für Veröffentlichung und Verwaltung

KI-Systeme wurden eingesetzt, um Code zu entwickeln, Varianten zu prüfen, Fehler zu finden und technische Lösungen schneller umzusetzen.

### 4. Iterieren und alltagstauglich machen

Der Fokus lag nicht auf einer perfekten ersten Version, sondern auf nutzbaren Zwischenschritten:

- Felder anpassen
- UI vereinfachen
- Outputs prüfen
- Design konsistenter machen
- Prozesslogik korrigieren
- spätere Automatisierung mitdenken

Damit wurde aus Experimenten eine interne Tool-Landschaft mit konkretem Nutzen.

---

## Die drei Tools

## Tool 1: Dokumenten-Generator

### Ausgangsproblem

Formelle Dokumente wurden bisher manuell kopiert, angepasst und nachformatiert. Dadurch entstanden Aufwand, Wiederholungen und das Risiko uneinheitlicher Ergebnisse.

### Lösung

Ich entwickelte eine WebApp mit strukturierter Eingabemaske. Die App fragt relevante Felder ab und erzeugt daraus ein konsistentes Word-Dokument im Unternehmensdesign.

### Wirkung

Der Prozess wird von manueller Text- und Formatbearbeitung auf strukturierte Eingabe umgestellt. Dadurch sinkt die Wahrscheinlichkeit von Formatierungsfehlern und die Dokumente werden einheitlicher.

### Noch zu konkretisieren

- genaue Dokumenttypen
- technische Umsetzung des Word-Exports
- Beispieloutput mit Dummy-Daten
- geschätzte Zeitersparnis pro Dokument

---

## Tool 2: Social-Media-Post-Generator

### Ausgangsproblem

Social-Media-Beiträge waren nicht durchgängig einheitlich. Farben, Themen, Lieferantenbezug und Plattformformate mussten jedes Mal neu zusammengesetzt werden.

### Lösung

Ich entwickelte eine WebApp, die unternehmensspezifische Vorgaben wie Lieferanten, Themen und CI-Farben aufgreift und daraus Beiträge für Facebook und Instagram vorbereitet.

### Wirkung

Der Markenauftritt wird konsistenter, weil wiederkehrende Gestaltungselemente und Inhalte nicht jedes Mal neu improvisiert werden müssen.

### Noch zu konkretisieren

- konkrete CI-Regeln
- Unterschiede zwischen Facebook- und Instagram-Output
- Beispielpost mit neutralen Inhalten
- ob und wie Bild-Overlays genutzt werden

---

## Tool 3: ABD-Software

### Ausgangsproblem

Die offizielle IAAP-Oberfläche für Ausfuhrbegleitdokumente war im operativen Einsatz unübersichtlich. Wiederkehrende Unternehmens- und Exportdaten mussten im Prozess umständlich verarbeitet werden, und die Oberfläche bot keine gute Grundlage für spätere Automatisierung.

### Lösung

Ich entwickelte eine eigene ABD-Software bzw. vorbereitende Oberfläche mit besserer Nutzerführung, gespeicherten Firmendaten und einer Struktur, die spätere Automatisierung ermöglicht.

### Wirkung

Dieser Teil ist wahrscheinlich der stärkste Deep Dive des Cases, weil er direkt aus eigener Exportpraxis entstanden ist. Hier verbindet sich regulierter Prozess mit konkreter Softwareentwicklung.

### Noch zu konkretisieren

- welche IAAP-Felder besonders störend oder wiederkehrend waren
- welche Stammdaten gespeichert werden
- ob das Tool aktuell produktiv, prototypisch oder vorbereitend genutzt wird
- Screenshot mit Dummy-Daten
- Prozessvergleich IAAP vorher / eigene Oberfläche nachher

---

## Ergebnis

Es entstanden drei funktionsfähige interne WebApps, die auf konkrete operative Probleme reagieren:

- Dokumentenerstellung wird über strukturierte Eingaben vorbereitet
- Social-Media-Posts können konsistenter im Unternehmensauftritt erzeugt werden
- ABD-Prozesse erhalten eine nutzerfreundlichere und automatisierbare Struktur

Das Ergebnis ist keine abstrakte KI-Demo, sondern eine Reihe praktischer Werkzeuge aus dem Unternehmensalltag.

---

## Wirkung

Die bisher belegbare Wirkung liegt vor allem in vier Bereichen:

- **Standardisierung:** wiederkehrende Aufgaben werden in klare Eingaben und Outputs überführt.
- **Konsistenz:** Dokumente und Posts können einheitlicher erstellt werden.
- **Nutzerfreundlichkeit:** interne Abläufe werden an echte Nutzungssituationen angepasst.
- **Automatisierungsbasis:** besonders bei ABD-Prozessen entsteht eine Grundlage für spätere Teilautomatisierung.

Exakte Zeitmessungen liegen aktuell noch nicht vor. Deshalb sollte öffentlich nicht mit erfundenen Prozentwerten gearbeitet werden. Die Wirkung wird besser über Vorher/Nachher-Prozesse, Screenshots und Beispieloutputs belegt.

---

## Belegplan

| Beleg | Zweck | Status |
|---|---|---|
| Screenshot ABD-Software mit Dummy-Daten | zeigt konkretes Interface und bessere Nutzerführung | noch erstellen / anonymisieren |
| Vorher/Nachher-Diagramm IAAP vs. eigene Oberfläche | zeigt Prozessverbesserung | noch erstellen |
| Beispieloutput Dokumenten-Generator | zeigt echten Nutzen des Tools | noch anonymisieren |
| Beispielpost Social-Media-Generator | zeigt CI-Logik und Output | noch erstellen |
| Toolchain-Grafik KI → Code → Test → Deployment | erklärt Arbeitsweise | optional |

---

## Reflexion

Der wichtigste Lerneffekt war, dass interne Prozessverbesserung selten mit einem großen Systemwechsel beginnt. Oft reicht ein klar begrenztes Tool, wenn es ein echtes wiederkehrendes Problem trifft.

Ich habe außerdem gelernt, dass KI-gestützte Entwicklung nur dann sinnvoll ist, wenn der zugrunde liegende Prozess verstanden ist. Ohne klares Verständnis von Eingaben, Nutzern und Output erzeugt KI nur Code. Mit Prozessverständnis kann daraus ein Werkzeug entstehen, das im Alltag wirklich hilft.

---

## Offene Punkte für die finale Version

1. Welches Tool wird der Haupt-Deep-Dive? Empfehlung: ABD-Software.
2. Welche Screenshots dürfen mit Dummy-Daten gezeigt werden?
3. Welche Outputs können anonymisiert werden?
4. Welche Zeitersparnis lässt sich realistisch schätzen oder beschreiben?
5. Welche Versionen der Tools sind produktiv, prototypisch oder in Weiterentwicklung?

---

## Datenschutz

Firmenspezifische Inhalte, Lieferantendaten, Zollinformationen, Dokumentdaten, Kundendaten und interne Abläufe werden nicht öffentlich gezeigt. Öffentliche Belege müssen mit Dummy-Daten, anonymisierten Screenshots oder abstrahierten Prozessgrafiken arbeiten.

