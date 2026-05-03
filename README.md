# Digitaler Lebenslauf und Portfolio-Website

Statische GitHub-Pages-ready Basis fuer Hadis digitalen Lebenslauf mit Case-Beweisen zu Business Operations, ERP und KI-Automatisierung.

## Struktur

```text
index.html
cases/
  ki-prozessautomatisierung.html
  erp-einfuehrung.html
  exportabwicklung.html
  messe.html
  odoo-buchhaltung.html
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
```

## Pflege

- Die Case-Daten liegen zentral in `assets/js/site-data.js`.
- Profil, Timeline und Skills liegen ebenfalls zentral in `assets/js/site-data.js`.
- Die Startseite rendert Case-Karten aus `assets/js/home.js`.
- Die Case-Seiten sind bewusst schlanke HTML-Huellen und werden aus `assets/js/case-page.js` befuellt.
- Styling ist modular getrennt: Design-Tokens, Basis, Layout, Komponenten und Seitentypen.

## GitHub Pages

Fuer GitHub Pages reicht ein oeffentliches Repository mit diesen Dateien. In den Repository-Einstellungen:

1. `Settings`
2. `Pages`
3. Source: `Deploy from a branch`
4. Branch: `main`
5. Folder: `/root`

Danach ist die Seite unter `https://USERNAME.github.io/REPOSITORY/` erreichbar.

## Naechste inhaltliche Arbeit

Die Website-Basis ist nur das Gefaess. Als naechstes sollten die Cases inhaltlich maximiert werden:

1. KI-Prozessautomatisierung
2. ERP-Einfuehrung
3. Export
4. Odoo
5. Messe nach NASTEX aktualisieren

## Last State (Mai 2026)

### Design
- Navy Blue Farbpalette durchgehend (`--color-accent: #1d4fa0`, `--color-strong: #0c1e48`)
- Apple HIG: keine dekorativen Borders, Hierarchie via Hintergrundfarben (`surface` = weiss, `surface-2` = hellgrau) + selektiver Schatten
- Alle 5 SVG-Prozessdiagramme auf Navy umgestellt

### CSS
- `base.css`: `scroll-margin-top: 72px` auf alle `section[id]` (sticky Header ueberlappt nicht)
- `layout.css`: `#kompetenzen` + `#kontakt` haben `min-height: calc(100vh - 60px)` — fuellen den Viewport
- `components.css`: Portrait-Slot `width: 60%`, `height: auto`, kein Aspect-Ratio. Skill-Grid 2 Spalten. Keine Borders auf Karten.

### JS
- `common.js`: Nav-Links auf Homepage als `#fragment` (kein Seitenreload). Brand = nur Name, kein Box-Icon.
- `home.js`: Scroll-Spy nach sichtbarer Pixelflaeche pro Abschnitt (nicht Scroll-Position). Skill-Karten mit `desc`-Feld. Kontakt-Links mit `display`-Feld.
- `site-data.js`: skillGroups haben `desc`-Feld. Kontakt-Links haben `display`-Feld (z.B. "Profil ansehen").

### Offene Punkte
- Case-Detailseiten (`cases/*.html`) zuletzt nicht angefasst
- Mobile-Ansicht noch nicht getestet
- GitHub Pages Deployment ausstehend
