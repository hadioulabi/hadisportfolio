# Digitaler Lebenslauf und Portfolio-Website

Statische, dreisprachige Portfolio-Website fuer Hadi Oulabi (Englisch, Deutsch, Arabisch) mit Profil, Erfahrung, Kompetenzen, Kontakt und neun Cases zu Business Operations, ERP, Export, Buchhaltung, Messen, Retail Analytics, Markenforschung und KI-gestuetzter Automatisierung.

Die Seite ist als GitHub-Pages-ready Projekt aufgebaut: kein Backend, kein CMS, zentrale Datenpflege in JavaScript, schlanke HTML-Huellen fuer Startseite und Case-Seiten.

## Aktueller Stand

- Startseite ohne Header, Hauptnavigation und Footer.
- Profil, Timeline, Kompetenzen, Sprachen, Kontakt und Cases sind inhaltlich bereinigt.
- Alle sichtbaren Website-Seiten sollen gestalterisch im gleichen Stil weiterentwickelt werden.
- Design-Referenz ist der Lebenslauf in `lebenslauf/Lebenslauf Hadi Oulabi.html`.
- Die Seite startet standardmaessig auf Englisch. Der Sprachumschalter sitzt als schmale, mitscrollende Leiste oben rechts und wechselt zu Deutsch und Arabisch.
- Arabisch wird als RTL-Layout ausgeliefert; die Sprachwahl wird im Browser gemerkt.
- Im Arabischen werden die Case-Grafiken gespiegelt, damit sie von rechts nach links gelesen werden; die Beschriftungen werden zurueckgedreht.
- Der Lebenslauf unter `lebenslauf/` bleibt bewusst nur auf Deutsch.

## Struktur

```text
index.html
cases/
  fashion-store-score.html
  ki-prozessautomatisierung.html
  erp-einfuehrung.html
  brand-activism.html
  exportabwicklung.html
  odoo-buchhaltung.html
  messe.html
  egy-stitch-tex.html
assets/
  css/
    tokens.css
    base.css
    layout.css
    components.css
    pages.css
  js/
    content/
      en.js
      de.js
      ar.js
    common.js
    home.js
    case-page.js
  images/
    cases/
    profile/
lebenslauf/
  Lebenslauf Hadi Oulabi.html
  Lebenslauf Hadi Oulabi.pdf
  assets/hadi.jpg
outatex.jpg
```

## Content-Modell

- `assets/js/content/<sprache>.js` ist die zentrale Inhaltsquelle, je eine Datei pro Sprache.
- Jede Datei enthaelt denselben Aufbau: `meta`, `ui`, `profile`, `contact`, `timeline`, `skillGroups`, `cases`.
- Neue Inhalte muessen in allen drei Dateien gepflegt werden, sonst faellt die Sprache auf leere Felder zurueck.
- `assets/js/common.js` waehlt die Sprache, setzt `lang`/`dir`, baut den Sprachumschalter und rendert bei jedem Wechsel neu.
- Statische Texte im HTML tragen `data-i18n="pfad.zum.text"` und werden daraus gefuellt.
- `assets/js/home.js` rendert die Startseite, `assets/js/case-page.js` die Case-Detailseiten.
- `cases/*.html` sind bewusst schlanke HTML-Huellen; `data-case` verweist auf die Case-ID.
- Case-Grafiken werden inline geladen statt als `img`, damit ihre Beschriftungen uebersetzbar sind.
- Jedes `<text>` in `assets/images/cases/*.svg` traegt ein `data-t="<index>"`.
- Die Beschriftungen liegen unter `svgText["<dateiname-ohne-endung>"]` als Liste in derselben Reihenfolge.
- Wer eine Grafik aendert, muss die Indizes in allen drei Sprachdateien mitziehen.
- Ein Case ohne `slug` und mit `pending: true` wird als Platzhalterkarte ohne Unterseite angezeigt.
- Styling ist modular getrennt in Tokens, Basis, Layout, Komponenten und Seitentypen.

## Portfolio-Fokus

Die Website zeigt Arbeit aus folgenden Bereichen:

- Business Operations und operative Prozessverantwortung.
- Export, Logistik, Spediteurskoordination und Zollprozesse.
- ERP-Einfuehrung, Datenpflege, Testing und internationales Onboarding.
- Odoo, Eingangs-/Ausgangsrechnungen und buchhalterische Ablaufe.
- Messevorbereitung, Marketingmaterialien und internationale Koordination.
- KI-gestuetzte WebApps und interne Automatisierung.

## Cases

1. **KI-gestuetzte Prozessautomatisierung**  
   Interne WebApps fuer Dokumentenerstellung, Social-Media-Posts und ABD-Prozesse.

2. **ERP-Einfuehrung & internationales Onboarding**  
   Begleitung einer individuellen ERP-Einfuehrung mit Testing, Datenpflege, Schulung und laufender Betreuung.

3. **Exportabwicklung A-Z**  
   Eigenstaendige Abwicklung groesserer Exportsendungen inkl. Spediteur, Ursprung, ABD und Versandvorbereitung.

4. **Odoo & operative Buchhaltung**  
   Einrichtung und Nutzung von Odoo sowie Bearbeitung von Eingangs-/Ausgangsrechnungen und Altdaten.

5. **Messevorbereitung**  
   Vorbereitung von Techtextil Frankfurt 2026 und NASTEX Syrien 2026 mit Materialien, Standplanung und Koordination.

6. **Fashion Store Score**  
   Retail-Analytics-Konzept im Dreierteam zur datenbasierten Bewertung von Verkaufsflaechen im Modehandel.

7. **Semesterarbeit Brand Activism**  
   Vergleichende visuelle Fallanalyse von Patagonia und Nike zur Rolle von Authentizitaet, Note 1,0.

8. **Egy Stitch & Tex Kairo 2026**  
   Messezyklus von Einladung und Kundenkommunikation ueber Material und Messetage bis zur Nachbereitung im CRM.

9. **CRM & Controlling**  
   Prozessinnovation bei Outatex. Platzhalter, Inhalte und Unterseite folgen.

## Pflegeprinzip

Neue Inhalte sollten nach drei Formaten einsortiert werden:

- **Routine:** wiederkehrende Aufgabe ohne klares Ende.
- **Projekt:** zeitlich begrenzter Auftrag mit Anfang und Abschluss.
- **Case:** komplexerer Nachweis mit Problem, Eingriff, Ergebnis und Learning.

Entscheidungsregel:

- Wiederkehrend ohne Endpunkt = Routine.
- Klarer Auftrag mit Abschluss = Projekt.
- Eigenstaendig geloestes Problem mit Wirkung = Case.
- Im Zweifel das hoehere Format waehlen.

## Offene inhaltliche Punkte

- KI-Tools: konkrete Zeitersparnis, Screenshots oder Demo-Material pruefen.
- ABD-Tool: spezifische IAAP-Reibungspunkte genauer dokumentieren.
- ERP: konkrete Testfaelle, Schulungsform und laufende Betreuung weiter schaerfen.
- Export: schwierige Sendung oder konkreten Problemfall ergaenzen.
- Techtextil: Outcomes, Kontakte und Erkenntnisse nachtragen.
- NASTEX: nach Juli 2026 vollstaendig aktualisieren.
- Odoo: Ausloeser, geschulte Personen und Startprobleme genauer festhalten.
- Store Score: Validierung der Bewertungslogik und Erhebungsaufwand dokumentieren.
- Groz-Beckert: Praktikum im TEZ nach ersten Wochen inhaltlich schaerfen.
- CRM & Controlling: Inhalte erarbeiten und Case-Unterseite anlegen.
- Egy Stitch & Tex: konkretes Datum, Ergebnisse und Kontaktzahlen nachtragen.
- Semesterarbeit: genauen Zeitraum der Arbeit ergaenzen.

## Sensibilitaet

Keine Kundennamen, Sendungsmengen, internen Werte, Mitarbeiternamen oder vertraulichen Laenderdetails oeffentlich dokumentieren. Cases sollen extern verstaendlich und glaubwuerdig sein, aber sensible Unternehmensinformationen schuetzen.

## GitHub Pages

Fuer GitHub Pages reicht ein oeffentliches Repository mit diesen Dateien. In den Repository-Einstellungen:

1. `Settings`
2. `Pages`
3. Source: `Deploy from a branch`
4. Branch: `main`
5. Folder: `/root`

Danach ist die Seite unter `https://USERNAME.github.io/REPOSITORY/` erreichbar.
