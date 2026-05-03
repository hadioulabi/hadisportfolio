# Apple User Interfaces

Stand: 2026-05-01

Dieses Dokument beschreibt, wie moderne Apple User Interfaces wirken, aufgebaut sind und gestaltet werden. Es ist als Design-Referenz fuer kommende UI-Sprints gedacht. Ziel ist nicht, Apple zu kopieren, sondern die Prinzipien zu verstehen: Klarheit, Ruhe, Praezision, Tiefe, direkte Bedienbarkeit und ein hochwertiges Gefuehl in jeder einzelnen Interaktion.

## 1. Grundprinzipien

Apple UI wirkt modern, weil sie fast nie wie Dekoration aussieht. Die Oberflaeche ordnet Inhalte, zeigt Handlungsmoeglichkeiten und tritt dann zurueck.

Zentrale Prinzipien:

- Inhalt zuerst: Die wichtigsten Inhalte stehen sichtbar im Mittelpunkt.
- Bedienung wirkt vertraut: Navigation, Suche, Buttons, Listen und Menues folgen bekannten Mustern.
- Hierarchie ist sofort lesbar: Wichtige Dinge sind groesser, naeher, kontrastreicher oder liegen auf einer hoeheren Ebene.
- Wenige Entscheidungen pro Moment: Die UI zeigt nicht alles gleichzeitig, sondern fuehrt Schritt fuer Schritt.
- Tiefe statt Unruhe: Schatten, Blur, Materialien und Ebenen schaffen Orientierung, aber keine Show.
- Konsistenz ueber alle Bereiche: Gleiche Aktionen sehen gleich aus und verhalten sich gleich.
- Anpassung an Kontext: Layouts reagieren auf Bildschirmgroesse, Eingabemethode, Textgroesse und Plattform.

Apple-Design fuehlt sich nicht hochwertig an, weil es viele Effekte nutzt. Es fuehlt sich hochwertig an, weil jeder Effekt eine Aufgabe hat.

## 2. Visuelle Sprache

### Ruhige Grundflaechen

Apple nutzt meist sehr ruhige, helle oder systemnahe Hintergruende. Inhalte liegen auf klaren Flaechen, Listen oder Materialebenen. Die Basis ist neutral, damit Inhalt, Status und Aktionen auffallen koennen.

Typische Wirkung:

- grosse, ruhige Hintergrundbereiche;
- klare Trennung zwischen App-Hintergrund, Inhaltsflaeche und Bedienebene;
- wenig harte Linien;
- dezente Separatoren statt schwerer Rahmen;
- Flaechen wirken aufgeraeumt, aber nicht leer.

### Tiefe und Ebenen

Apple trennt Ebenen oft ueber Material, Transparenz, Blur, leichte Schatten oder subtile Kontraste. Eine Toolbar, ein Tab-Bar-Element oder ein Sheet wirkt dadurch wie eine Bedienebene ueber dem Inhalt.

Wichtig: Tiefe ist funktional. Sie zeigt:

- Was gehoert zusammen?
- Was liegt im Vordergrund?
- Was ist aktive Auswahl?
- Was ist dauerhafte Navigation?
- Was ist temporaere Aktion?

Schlechte Apple-Interpretation:

- viele grosse Glass-/Blur-Flaechen ohne Zweck;
- starke Schatten auf jeder Karte;
- dekorative Verlaeufe;
- uebertriebene Rundungen;
- schwebende Elemente ohne klare Rolle.

Gute Apple-Interpretation:

- eine ruhige Arbeitsflaeche;
- wenige, klare Ebenen;
- aktive Auswahl sichtbar;
- Bedienleisten kompakt;
- Formulare und Panels wirken praezise eingebettet.

## 3. Layout

Apple-Layouts sind stark durch Beziehungen gepraegt. Der Nutzer soll ohne Erklaertext erkennen, welche Elemente zusammengehoeren.

### Gruppierung

Apple gruppiert verwandte Inhalte durch:

- Abstand;
- Hintergrundflaechen;
- Separatoren;
- Materialebenen;
- Listenstruktur;
- klare Abschnittstitel;
- wiederkehrende Zell- und Panelmuster.

Abstand ist dabei nicht nur Luft. Abstand ist Struktur.

### Adaptive Layouts

Moderne Apple UIs passen sich an:

- kleine iPhone-Breiten;
- iPad Split View;
- frei skalierbare iPad-/Mac-Fenster;
- grosse Desktop-Flaechen;
- unterschiedliche Textgroessen;
- Touch, Maus, Trackpad und Tastatur.

Ein Layout sollte nicht einfach von "Desktop" zu "Mobile" springen. Es sollte stabil bleiben und erst dann kompakter werden, wenn die volle Struktur nicht mehr passt.

Typische Apple-Muster:

- Listen und Detailansicht als Split View;
- Sidebar fuer grosse Breiten;
- Tab Bar fuer kompakte Hauptnavigation;
- Inspector oder Detailpanel fuer Zusatzinformationen;
- Toolbar fuer kontextuelle Aktionen;
- Sheets fuer fokussierte Eingaben;
- progressive Offenlegung statt dauerhaft grosser Formulare.

### Flaechen und Dichte

Apple nutzt Weissraum, aber nicht als leere Dekoration. Die UI bleibt arbeitsfaehig. Gute Dichte bedeutet:

- wichtige Inhalte haben Raum;
- Nebeninformationen sind kleiner und ruhiger;
- wiederholte Items sind scanbar;
- Listen bleiben klar;
- Buttons haben stabile Groessen;
- Text bricht sauber um.

## 4. Typografie

Apple UI lebt stark von Typografie. Die Schrift ist nicht ornamental, sondern strukturiert Information.

Typische Prinzipien:

- wenige Schriftgroessen;
- klare Hierarchie aus Groesse, Gewicht und Farbe;
- Regular, Medium, Semibold und Bold statt ultraduenner Schnitte;
- kleine Labels fuer Metadaten;
- lesbare Body-Texte;
- Titel knapp und klar;
- keine ueberdimensionierten Headlines in Arbeitsoberflaechen;
- Text darf umbrechen, statt abgeschnitten zu wirken.

Apple nutzt Systemschriften, weil sie auf Lesbarkeit, Plattformgefuehl und dynamische Groessen optimiert sind. In Web-UIs kann man dieses Gefuehl durch systemnahe Fonts erreichen:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Wichtig ist nicht die exakte Schrift, sondern das Verhalten:

- gut lesbar;
- konsistent;
- responsive;
- ausreichend Kontrast;
- keine willkuerlichen Font-Mixe.

## 5. Farbe

Apple verwendet Farbe sehr gezielt. Farbe ist selten Flaechendekoration; sie kommuniziert Zustand, Auswahl, Aktion oder Marke.

Typische Farbregeln:

- neutrale Grundflaechen;
- eine klare Akzentfarbe fuer primaere Aktionen oder aktive Auswahl;
- semantische Farben fuer Status;
- gleiche Farbe bedeutet gleiche Funktion;
- keine grellen Dauerzustaende;
- Status nicht nur ueber Farbe vermitteln;
- gute Kontraste in hellen und dunklen Kontexten.

Beispiel fuer semantische Nutzung:

- Blau: aktive Auswahl, Information, Navigation;
- Gruen: Erfolg, abgeschlossen, bestaetigt;
- Gelb/Amber: Hinweis, offen, in Klaerung;
- Rot: kritisch, Fehler, blockiert, destruktiv;
- Grau/Slate: neutral, geparkt, sekundar.

Apple-artige Farbgestaltung heisst nicht, alles blau, weiss und grau zu machen. Es heisst, Farbe sparsam und verstaendlich einzusetzen.

## 6. Materialien, Blur und Glass

Moderne Apple UIs nutzen Materialien, um Ebenen voneinander zu trennen. Blur oder Glass macht Sinn, wenn darunterliegender Inhalt weiter als Kontext fuehlbar bleiben soll.

Gute Material-Nutzung:

- Navigation liegt ueber Inhalt, ohne ihn komplett zu verdecken.
- Toolbar bleibt lesbar und wirkt als Kontrollschicht.
- Sheets oder Popovers sind klar temporaer.
- Hintergrund scheint subtil durch, aber Text bleibt lesbar.

Schlechte Material-Nutzung:

- Blur als reine Dekoration;
- transparente Flaechen mit schlechtem Kontrast;
- Glass auf grossen Inhaltsbereichen;
- zu viele halbtransparente Karten;
- Effekte, die Inhalt schwerer lesbar machen.

Fuer Produktivitaets-UIs sollte Material sehr vorsichtig eingesetzt werden. Die wichtigste Wirkung ist nicht "wow", sondern "ich weiss, wo ich bin".

## 7. Navigation

Apple Navigation ist normalerweise einfach, stabil und erwartbar.

Haeufige Muster:

- Tab Bar fuer wenige Hauptbereiche;
- Sidebar fuer umfangreiche Navigation;
- Navigation Bar oder Toolbar fuer Titel, Zurueck, Suche und Aktionen;
- Split View fuer Liste plus Detail;
- Breadcrumbs oder Back Controls bei tieferen Strukturen;
- Suchfeld dort, wo es den Inhalt filtert.

Navigation soll zwei Fragen beantworten:

- Wo bin ich?
- Wohin kann ich sinnvoll als Naechstes?

Apple vermeidet Navigation, die wie eine Datenbankstruktur wirkt. Bereiche werden nach Nutzeraufgaben geschnitten, nicht nur nach Entitaeten.

## 8. Toolbars und Aktionen

Toolbars enthalten haeufig:

- Titel oder Kontext;
- Navigation;
- Suche;
- primaere und sekundare Aktionen;
- Menues fuer seltenere Aktionen.

Eine gute Toolbar ist bewusst knapp. Apple ueberfuellt sie nicht. Aktionen werden gruppiert und priorisiert.

Regeln:

- Primaeraktion sichtbar, aber nicht laut.
- Sekundaeraktionen ruhiger.
- Destruktive Aktionen klar getrennt.
- Wiederkehrende Aktionen mit vertrauten Symbolen.
- Icon-only nur, wenn das Icon eindeutig ist oder ein Label/Tooltip existiert.
- Menues fuer zusaetzliche Optionen statt viele Buttons nebeneinander.

## 9. Buttons

Apple Buttons sind klar in Stil, Inhalt und Rolle.

Typische Button-Hierarchie:

- Prominent: wichtigste Aktion.
- Standard/Sekundaer: normale Aktion.
- Plain/Ghost: leichte Aktion im Kontext.
- Destructive: loeschen, entfernen, kritisch.

Buttons wirken hochwertig, wenn:

- sie stabile Hoehen haben;
- Text nicht abgeschnitten wird;
- Icon und Label sinnvoll zusammenarbeiten;
- Hover/Focus/Pressed klar sind;
- Disabled State ruhig, aber erkennbar ist;
- sie nicht alle gleich wichtig aussehen.

Apple-artige Buttons sind selten riesig. Sie sind praezise.

## 10. Listen, Tabellen und Zellen

Apple nutzt Listen sehr stark, aber sie wirken nicht wie rohe Tabellen. Eine gute Apple-Liste ist scanbar:

- primaerer Text links/oben;
- Status oder Metadaten daneben oder darunter;
- Aktion rechts oder im Kontext;
- klare Auswahl;
- ruhige Separatoren;
- genug Hoehe fuer Touch;
- lange Titel brechen sauber um.

Tabellen sind nur dann passend, wenn Vergleich wirklich wichtig ist. Fuer Workflow-UIs sind Listen, Master-Detail-Strukturen und kompakte Cards oft besser.

Eine Apple-artige Listenzelle beantwortet:

- Was ist das?
- In welchem Zustand ist es?
- Warum ist es relevant?
- Was kann ich damit tun?

## 11. Forms und Eingaben

Apple-Formulare wirken leicht, weil sie nicht wie ein Pflichtformularblock dominieren.

Typische Muster:

- Formular erscheint im Kontext;
- nur wichtige Felder sofort sichtbar;
- optionale Felder sind klar optional;
- Labels bleiben sichtbar;
- Fehler erscheinen nahe am Feld;
- Speichern fuehrt sinnvoll weiter;
- lange Formulare werden gruppiert;
- Eingaben nutzen passende Controls: Toggle, Segmented Control, Picker, Stepper, Date Picker, Search, Textarea.

Gute Formular-UX:

- Nutzer weiss, was Pflicht ist.
- Nutzer kann unvollstaendig starten.
- Fehlertexte sind menschlich.
- Nach dem Speichern passiert etwas Sinnvolles.
- Formular verschwindet oder zeigt klar den gespeicherten Zustand.

## 12. Suche und Filter

Apple setzt Suche dort ein, wo sie direkt mit dem sichtbaren Inhalt verbunden ist.

Muster:

- Suchfeld in Toolbar fuer globale oder bereichsweite Suche;
- Inline-Suche direkt ueber einer Liste, wenn sie diese Liste filtert;
- Scope Controls oder Tokens fuer genauere Filter;
- Vorschlaege oder letzte Suchen, wenn passend;
- Clear Button und sofortige Rueckkehr zum ungefilterten Zustand.

Filter sollten nicht nach Datenbankfeldern aussehen. Sie sollten Nutzerfragen abbilden:

- Offen
- In Klaerung
- Ohne Quelle
- Nicht ausgewertet
- Entscheidungen
- Zuletzt bearbeitet

## 13. Progressive Disclosure

Ein grosser Teil der Apple-Wirkung entsteht dadurch, dass nicht alles gleichzeitig sichtbar ist.

Beispiele:

- Eine Liste zeigt nur das Wichtigste; Detail kommt bei Auswahl.
- Sekundare Aktionen liegen in Menues.
- Formulare erscheinen erst nach Klick auf "Neu" oder "Bearbeiten".
- Zusatzinformationen liegen in einem Inspector.
- Leere Zustaende schlagen eine konkrete naechste Aktion vor.

Progressive Disclosure ist nicht Verstecken. Es ist Reihenfolge.

## 14. Motion und Feedback

Apple-Bewegung ist meist kurz, direkt und raeumlich sinnvoll.

Gute Motion:

- bestaetigt eine Aktion;
- zeigt Zusammenhang zwischen Liste und Detail;
- laesst ein Sheet aus der richtigen Richtung erscheinen;
- macht Statuswechsel nachvollziehbar;
- fuehlt sich weich, aber schnell an.

Schlechte Motion:

- dekoratives Schweben;
- langsame Uebergaenge;
- Animationen, die Arbeit verzoegern;
- Bewegung ohne Informationswert.

Feedback ist nicht nur Animation:

- Button pressed state;
- Hover;
- Fokus;
- Statusmeldung;
- Haptik auf nativen Plattformen;
- Inline-Fehler;
- gespeicherter Zustand.

## 15. Icons und Symbole

Apple nutzt Symbole als schnelle Wiedererkennung, nicht als Schmuck.

Regeln:

- bekannte Systemmetaphern verwenden;
- gleiche Aktion bekommt gleiches Icon;
- keine Icons erzwingen, wenn sie nicht klar sind;
- Icon und Label kombinieren, wenn die Aktion nicht absolut eindeutig ist;
- Symbolgroesse zur Textgroesse passend halten;
- Icons nicht als einzige Statusinformation verwenden.

Im Web-Kontext bedeutet das: eine konsistente Icon-Bibliothek nutzen, Symbole sparsam einsetzen und jedes Icon semantisch begruenden.

## 16. Empty States

Apple-artige Empty States sind konkret. Sie sagen nicht nur "Keine Daten", sondern erklaeren kurz, was hier passieren kann.

Schlecht:

```text
Keine Eintraege.
```

Besser:

```text
Noch keine Quellen verbunden.
Verknuepfe eine Quelle, um diese Frage belegbar zu klaeren.
```

Ein guter leerer Zustand hat:

- einen menschlichen Titel;
- eine konkrete Bedeutung;
- eine passende Aktion;
- keine Schuldzuweisung.

## 17. Accessibility

Apple behandelt Accessibility nicht als Zusatz, sondern als Teil der Produktqualitaet.

Wichtige Anforderungen:

- ausreichender Kontrast;
- Text skalierbar;
- keine wichtigen Informationen nur ueber Farbe;
- Tastaturbedienung;
- sichtbare Fokuszustaende;
- Screenreader-Labels;
- sinnvolle Reihenfolge im DOM;
- grosse genug klickbare Flaechen;
- reduzierte Bewegung respektieren;
- klare Fehlermeldungen;
- lange Inhalte nicht abschneiden.

Eine UI wirkt erst dann wirklich hochwertig, wenn sie auch unter Stress, mit vergroesserter Schrift, auf kleinen Screens und per Tastatur stabil bleibt.

## 18. Moderne Apple UI in Produktivitaetsapps

Fuer Arbeitsapps wie Notes, Mail, Files, Reminders, Settings oder Freeform sind besonders relevant:

- Split View: Liste und Arbeitsbereich gleichzeitig.
- Sidebar oder Tab Bar: klare Hauptbereiche.
- Toolbar: Suche und haeufige Aktionen.
- Inspector: Details, Metadaten, Einstellungen.
- Inline-Erstellung: neue Objekte ohne Kontextverlust.
- Sheets: fokussierte temporaere Eingaben.
- Listen mit Status: scanbare Arbeitsobjekte.
- Gruppierte Beziehungen: Inhalte nach fachlicher Bedeutung sortieren.
- Kleine, klare Statuspillen.
- Wenige, aber gute Primaeraktionen.

Das Apple-Gefuehl entsteht aus dem Zusammenspiel:

```text
ruhige Basis
+ klare Hierarchie
+ direkte Aktionen
+ adaptive Layouts
+ gutes Feedback
+ konsistente Komponenten
= hochwertiges Arbeitsgefuehl
```

## 19. Was Apple meistens vermeidet

- UI, die wie eine Datenbanktabelle startet.
- Zu viele gleich wichtige Buttons.
- Dauerhaft sichtbare Mega-Formulare.
- Reine Statistik-Dashboards ohne Handlung.
- Viele gleich aussehende Karten ohne Fokus.
- Grelle Farben als Flaechendeko.
- Icons ohne Bedeutung.
- Hover-Effekte, die Layout verschieben.
- Text, der abgeschnitten oder gequetscht wirkt.
- Technische Begriffe in Nutzeroberflaechen.
- Modalitaet ohne klaren Grund.

## 20. Uebersetzung in Web-UI-Regeln

Wenn man Apple-Prinzipien in eine Web-App uebertraegt, sollte man nicht versuchen, iOS nachzubauen. Stattdessen:

- systemnahe Typografie verwenden;
- Layouts als Workspaces statt CRUD-Seiten gestalten;
- Listen und Detailbereiche kombinieren;
- Formen progressiv anzeigen;
- Navigation nach Aufgaben ordnen;
- Aktionen klar priorisieren;
- Status sichtbar, aber ruhig darstellen;
- Beziehungen gruppieren;
- Empty States handlungsorientiert schreiben;
- mobile, tablet und desktop bewusst gestalten;
- jede Seite mit einer klaren Primaeraktion versehen;
- technische Datenmodellnamen aus der UI entfernen.

## 21. Checkliste fuer einen Apple-inspirierten UI-Sprint

Jede Seite pruefen:

- Erkennt man in 5 Sekunden, worum es geht?
- Gibt es genau eine klare Primaeraktion?
- Sind Listen scanbar?
- Sind wichtige Objekte sichtbar priorisiert?
- Sind Formen nur dann sichtbar, wenn man sie braucht?
- Sind Beziehungen fachlich gruppiert?
- Ist der naechste Schritt klar?
- Sind Status und Fehler menschlich formuliert?
- Funktioniert die Seite bei 390 px Breite?
- Brechen lange Titel sauber um?
- Sind Icon-only Buttons beschriftet?
- Wirkt die UI ruhig, hochwertig und arbeitsorientiert?
- Gibt es irgendwo visuelle Deko ohne Aufgabe?

## 22. Konsequenz fuer oLib

Fuer oLib bedeutet Apple-inspirierte UI:

- Dashboard als echtes Cockpit, nicht als Zahlenwand.
- Themen als Arbeitsraeume, nicht als Detaildatensaetze.
- Fragen als Klaerungsflow, nicht als Liste.
- Quellen als Auswertungsflow, nicht als Ablage.
- Lernlogbuch als Fortschritt, nicht als Randnotiz.
- Produkte als Wissensanker, nicht als Stammdatensatz.
- Vorgaenge als Timeline-Arbeitsraum, nicht als Prozessmaske.
- Wissenslinks als Beziehungen, nicht als technische Knoten.

Der naechste UI-Sprint sollte deshalb nicht nur Farben und Abstaende korrigieren. Er muss jede Seite neu nach Aufgabe, Hierarchie, Aktion und Arbeitsgefuehl bewerten.

## Quellen

- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- Layout: https://developer.apple.com/design/human-interface-guidelines/layout
- Typography: https://developer.apple.com/design/human-interface-guidelines/typography
- Color: https://developer.apple.com/design/human-interface-guidelines/color
- Materials: https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/materials/
- Toolbars: https://developer.apple.com/design/human-interface-guidelines/toolbars
- Search fields: https://developer.apple.com/design/human-interface-guidelines/search-fields
- Buttons: https://developer.apple.com/design/human-interface-guidelines/buttons
- Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility/
