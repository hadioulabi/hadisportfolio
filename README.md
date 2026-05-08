# Digitaler Lebenslauf und Portfolio-Website

Statische Portfolio-Website fuer Hadi Oulabi mit Profil, Erfahrung, Kompetenzen, Kontakt und fuenf Case-Seiten zu Business Operations, ERP, Export, Buchhaltung, Messe und KI-gestuetzter Automatisierung.

Die Seite ist als GitHub-Pages-ready Projekt aufgebaut: kein Backend, kein CMS, zentrale Datenpflege in JavaScript, schlanke HTML-Huellen fuer Startseite und Case-Seiten.

## Aktueller Stand

- Startseite ohne Header, Hauptnavigation und Footer.
- Profil, Timeline, Kompetenzen, Sprachen, Kontakt und Cases sind inhaltlich bereinigt.
- Alle sichtbaren Website-Seiten sollen gestalterisch im gleichen Stil weiterentwickelt werden.
- Design-Referenz ist der Lebenslauf in `lebenslauf/Lebenslauf Hadi Oulabi.html`.

## Struktur

```text
index.html
cases/
  ki-prozessautomatisierung.html
  erp-einfuehrung.html
  exportabwicklung.html
  odoo-buchhaltung.html
  messe.html
assets/
  css/
    tokens.css
    base.css
    layout.css
    components.css
    pages.css
  js/
    site-data.js
    common.js
    home.js
    case-page.js
  images/
    cases/
    profile/
lebenslauf/
  Lebenslauf Hadi Oulabi.html
  assets/hadi.jpg
  export/Lebenslauf Hadi Oulabi.pdf
outatex.jpg
```

## Content-Modell

- `assets/js/site-data.js` ist die zentrale Inhaltsquelle.
- Profil, Kontakt, Timeline, Kompetenzgruppen, Sprachen und Case-Daten liegen dort gebuendelt.
- `assets/js/home.js` rendert die Startseite.
- `assets/js/case-page.js` rendert die Case-Detailseiten.
- `cases/*.html` sind bewusst schlanke HTML-Huellen.
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
