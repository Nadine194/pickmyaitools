# Startgids: AI-notulisten testen en reviewen

Doel: drie eerlijke, QA-achtige reviews van **Jamie**, **tl;dv** en **Granola**,
plus één vergelijkingsartikel. Daarna de makers benaderen voor een affiliate-deal.

Reken op ongeveer 2-3 uur testen per tool en 3-4 uur schrijven per review.

---

## Stap 1 — Accounts aanmaken (30 min)

Maak bij alle drie een gratis account aan met **nadine@pickmyaitools.com**.

| Tool | Site | Let op |
|---|---|---|
| Jamie | meetjamie.ai | Werkt zonder bot; check of de Windows-app er is |
| tl;dv | tldv.io | Stuurt een bot naar Meet/Zoom/Teams |
| Granola | granola.ai | Werkt zonder bot; check Windows-ondersteuning |

Noteer per tool meteen:
- hoe lang het duurde van aanmelden tot eerste opname (= TC01);
- wat het gratis plan precies toestaat (aantal meetings, minuten);
- screenshots van de onboarding (Windows: **Win + Shift + S**).

## Stap 2 — Je testopstelling

**Gebruik nooit meetings van je retailklant.** Klantgesprekken door een externe
AI-tool halen is een vertrouwelijkheidsprobleem, en je kunt er geen
screenshots van publiceren.

Doe in plaats daarvan **2-3 testmeetings met je vriend of een bekende**, via
Teams of Google Meet. Laat alle drie de tools tegelijk meedraaien: tl;dv als
bot in de call, Jamie en Granola op je laptop. Zo krijgen alle drie exact
hetzelfde gesprek en is de vergelijking eerlijk.

### Het vaste testscript (± 15 minuten)

Spreek dit vooraf af, zodat je achteraf objectief kunt meten wat de tool
heeft opgepikt:

1. **Agenda noemen** — "We bespreken vandaag drie dingen: de vakantie, het
   budget voor de keuken en wie de verjaardag regelt."
2. **Drie actiepunten met naam en datum** — "Nadine belt de aannemer vóór
   vrijdag 14 november." (×3, verschillende personen en data)
3. **Een getal en een bedrag** — "Het budget is 4.750 euro."
4. **Een besluit** — "We kiezen voor optie B."
5. **Een moeilijke naam of term** — een straatnaam, merknaam of vakterm.
6. **Door elkaar praten** — tien seconden tegelijk praten.
7. **Taalwissel** — doe één meeting in het Nederlands en één in het Engels.

Achteraf check je: heeft de tool alle 3 de actiepunten, het bedrag, het
besluit en de moeilijke naam correct? Dat zijn je testresultaten (TC03-TC06).

## Stap 3 — De testcases afwerken

Gebruik de tabel uit het reviewformat (`src/content/reviews/_template.md`).
Dezelfde 9 testcases voor alle drie de tools:

- TC01 Aanmelden tot eerste opname
- TC02 Opname starten
- TC03 Transcriptie Engels
- TC04 Transcriptie Nederlands
- TC05 Actiepunten herkend (x van 3)
- TC06 Samenvatting bruikbaar zonder aanpassen
- TC07 Exporteren / delen
- TC08 Wat ziet de andere deelnemer? (vraag het je testpartner!)
- TC09 Opname en alle data verwijderen

Leg elke bug vast zoals je dat in je werk doet: wat gebeurde er, hoe
reproduceer je het, hoe ernstig is het. Maak er een screenshot bij.

## Stap 4 — De GDPR-check

Zoek per tool op (privacy policy, "trust center", "security"-pagina, lijst
met sub-processors):

- Waar staat de data? (EU of VS)
- Is er een DPA / verwerkersovereenkomst?
- Wordt je data gebruikt om AI-modellen te trainen? Kun je dat uitzetten?
- Welke sub-processors gebruiken ze? (Bijvoorbeeld OpenAI of AWS in de VS)

Twijfel je? Mail de support-afdeling met je vraag. **Het antwoord (of het
uitblijven ervan) is zelf ook reviewmateriaal.**

## Stap 5 — Tijdwinst meten

Schrijf voor één testmeeting eerst zelf notulen en stop je tijd. Meet daarna
hoe lang het kost om de AI-notulen te controleren en te corrigeren. Dat
verschil is je eerlijke tijdwinst.

## Stap 6 — De review schrijven

1. Kopieer `src/content/reviews/_template.md` naar bijvoorbeeld
   `src/content/reviews/tldv.md`.
2. Vul de frontmatter en de secties in. **In het Engels**, want de site is
   Engelstalig.
3. Laat `draft: true` staan. Dan staat de review nog niet live.
4. Screenshots zet je in `public/images/reviews/tldv/` en gebruik je in de
   tekst zo: `![Beschrijving](/images/reviews/tldv/onboarding.png)`.
   Haal namen, e-mailadressen en gezichten van je testpartner weg.

**Schrijf het zelf.** Claude mag je Engels nalopen en structuur voorstellen,
maar de ervaringen, bugs en meningen moeten van jou zijn. Dat is precies wat
de site onderscheidt van de AI-content die we eruit hebben gehaald.

## Stap 7 — Publiceren

Geef mij een seintje als een review af is. Ik controleer de build, je
leest de pagina na, en dan zetten we `draft: false` en publiceren we. De
link "Reviews" verschijnt automatisch in het menu zodra de eerste review
live staat.

## Stap 8 — De maker benaderen

Pas **na** publicatie:

- **tl;dv**: meld je aan voor hun open affiliate-programma (25% recurring).
- **Granola**: aanvragen via hun Dub-partnerpagina, met de link naar je review.
- **Jamie**: geen programma gevonden, dus mail of LinkedIn de oprichters met
  de review. Vraag of ze een affiliate- of partnerregeling hebben of willen
  opzetten.

Vraag nooit geld voor de review zelf. Een outreach-bericht stellen we samen
op als het zover is.

---

## Voorgestelde volgorde

| Week | Wat |
|---|---|
| 1 | Accounts aanmaken, testscript afspreken, 2 testmeetings opnemen |
| 2 | Testcases + GDPR-check voor alle drie, tijdwinst meten |
| 3 | Review tl;dv schrijven en publiceren (open programma, snelste route naar inkomsten) |
| 4 | Review Granola |
| 5 | Review Jamie |
| 6 | Vergelijkingsartikel: "Jamie vs tl;dv vs Granola" |
