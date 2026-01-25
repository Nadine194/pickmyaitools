# PowerShell Stap-voor-Stap Gids

## Stap 1: PowerShell Openen

1. Druk op de **Windows-toets** op je toetsenbord
2. Type: `powershell`
3. Klik op **Windows PowerShell** (of druk Enter)

## Stap 2: Navigeer naar je Projectmap

Type dit commando en druk Enter:

```powershell
cd C:\Users\nadin\Projecten\pickmyaitools
```

**Wat doet dit?** Dit gaat naar de map waar je website project staat.

## Stap 3: Controleer of je in de juiste map bent

Type dit om te zien waar je bent:

```powershell
pwd
```

Je zou moeten zien: `C:\Users\nadin\Projecten\pickmyaitools`

## Stap 4: Controleer of Node.js werkt

Type dit om te controleren:

```powershell
node --version
```

Je zou iets moeten zien zoals: `v24.12.0`

Type dit ook:

```powershell
npm --version
```

Je zou iets moeten zien zoals: `11.6.2`

**Als je een foutmelding krijgt:** Zie de troubleshooting sectie hieronder.

## Stap 5: Installeer Dependencies (alleen eerste keer)

Type dit commando:

```powershell
npm install
```

**Dit duurt 1-2 minuten.** Je ziet veel tekst voorbij scrollen - dat is normaal!

Wacht tot je weer de prompt ziet (zoals `PS C:\Users\nadin\Projecten\pickmyaitools>`)

## Stap 6: Start de Development Server

Type dit commando:

```powershell
npm run dev
```

**Wat gebeurt er nu?**
- Je ziet veel tekst verschijnen
- Aan het einde zie je iets zoals:
  ```
  ➜  Local:   http://localhost:4321/
  ```

## Stap 7: Open je Browser

1. Open je webbrowser (Chrome, Edge, Firefox, etc.)
2. Ga naar deze URL: `http://localhost:4321`
3. Je zou nu je website moeten zien!

## Stap 8: Server Stoppen (wanneer je klaar bent)

- Ga terug naar de PowerShell venster
- Druk op: **Ctrl + C**
- De server stopt

---

## Troubleshooting

### "node is not recognized"
- Node.js is niet geïnstalleerd of niet in je PATH
- Herstart je computer na installatie van Node.js
- Of installeer Node.js opnieuw van https://nodejs.org/

### "npm is not recognized"
- Zelfde als hierboven - herstart je computer

### "Cannot find module"
- Je bent niet in de juiste map
- Type: `cd C:\Users\nadin\Projecten\pickmyaitools`
- Probeer dan opnieuw: `npm install`

### "Port 4321 already in use"
- Iets anders gebruikt die poort
- Stop andere programma's of gebruik een andere poort
- Astro zal automatisch een andere poort proberen

### PowerShell Script Execution Error
- Als je een melding krijgt over scripts die niet mogen draaien
- Type dit commando:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- Druk Enter en type `Y` om te bevestigen

---

## Handige PowerShell Commando's

| Commando | Wat het doet |
|----------|-------------|
| `cd` | Ga naar een map |
| `cd ..` | Ga één map omhoog |
| `pwd` | Laat zien waar je nu bent |
| `dir` of `ls` | Laat bestanden in de map zien |
| `cls` | Maak het scherm leeg |
| `Ctrl + C` | Stop het huidige proces |

---

## Snel Starten (Volgende Keer)

Als je alles al hebt geïnstalleerd, hoef je alleen maar:

1. Open PowerShell
2. Type: `cd C:\Users\nadin\Projecten\pickmyaitools`
3. Type: `npm run dev`
4. Open browser: `http://localhost:4321`

Dat is alles!
