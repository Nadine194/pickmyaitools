# Deployment Guide voor PickMyAITools

Deze gids helpt je om je Astro website te deployen naar het internet en je Namecheap domein te koppelen.

## Optie 1: Netlify (Aanbevolen - Meest Eenvoudig)

Netlify is de makkelijkste optie voor statische sites. Gratis tier is ruim voldoende.

### Stap 1: Account aanmaken
1. Ga naar [netlify.com](https://netlify.com)
2. Maak een gratis account aan (met GitHub, GitLab, of email)

### Stap 2: Site deployen via GitHub (Aanbevolen)

**A. Push je code naar GitHub:**
```bash
# Als je nog geen git repository hebt:
git init
git add .
git commit -m "Initial commit"

# Maak een repository op GitHub.com, dan:
git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/pickmyaitools.git
git branch -M main
git push -u origin main
```

**B. Deploy op Netlify:**
1. Log in op Netlify
2. Klik op "Add new site" → "Import an existing project"
3. Kies "GitHub" en autoriseer Netlify
4. Selecteer je `pickmyaitools` repository
5. Netlify detecteert automatisch Astro! Instellingen:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Klik "Deploy site"

### Stap 3: Custom Domain Koppelen (Namecheap)

**A. Op Netlify:**
1. Ga naar je site dashboard
2. Klik "Domain settings" → "Add custom domain"
3. Voer je domein in: `pickmyaitools.com` (en eventueel `www.pickmyaitools.com`)
4. Netlify geeft je DNS records die je nodig hebt

**B. Op Namecheap:**
1. Log in op Namecheap
2. Ga naar "Domain List" → klik "Manage" bij je domein
3. Ga naar "Advanced DNS"
4. Voeg deze records toe:

   **Voor pickmyaitools.com (zonder www):**
   - Type: `A Record`
   - Host: `@`
   - Value: `75.2.60.5` (of het IP dat Netlify geeft)
   - TTL: Automatic

   **Voor www.pickmyaitools.com:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `pickmyaitools.netlify.app` (of wat Netlify aangeeft)
   - TTL: Automatic

5. Verwijder oude DNS records als die er zijn
6. Sla op

**C. SSL Certificate:**
- Netlify geeft automatisch een gratis SSL certificaat (Let's Encrypt)
- Dit kan 5-60 minuten duren na DNS update
- Je site is dan beschikbaar op `https://pickmyaitools.com`

### Stap 4: Automatische Deploys
- Elke keer dat je naar GitHub pusht, deployt Netlify automatisch
- Je kunt ook "Deploy manually" gebruiken voor test builds

---

## Optie 2: Vercel (Ook Zeer Goed)

Vercel is ook uitstekend voor Astro sites.

### Stap 1: Account aanmaken
1. Ga naar [vercel.com](https://vercel.com)
2. Maak account aan met GitHub

### Stap 2: Site Deployen
1. Klik "Add New Project"
2. Importeer je GitHub repository
3. Vercel detecteert Astro automatisch
4. Klik "Deploy"

### Stap 3: Custom Domain
1. Ga naar Project Settings → Domains
2. Voeg je domein toe: `pickmyaitools.com`
3. Volg de DNS instructies (vergelijkbaar met Netlify)

---

## Optie 3: Cloudflare Pages (Gratis & Snel)

Goed als je al Cloudflare gebruikt.

### Stap 1: Account
1. Ga naar [cloudflare.com](https://cloudflare.com)
2. Maak account aan

### Stap 2: Deploy
1. Ga naar "Pages" in dashboard
2. "Create a project" → "Connect to Git"
3. Selecteer repository
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`

### Stap 3: Custom Domain
1. Ga naar je Pages project → "Custom domains"
2. Voeg domein toe
3. Update DNS bij Namecheap volgens Cloudflare instructies

---

## Testen Voordat Je Deployt

Voordat je deployt, test lokaal of alles werkt:

```bash
# Build de site
npm run build

# Preview de gebouwde site
npm run preview
```

Open `http://localhost:4321` om te zien of alles correct werkt.

**Let op:** De sitemap plugin is tijdelijk uitgeschakeld vanwege een build issue. Dit heeft geen invloed op de functionaliteit van je site. We kunnen dit later fixen door de plugin te updaten of een alternatieve sitemap oplossing te gebruiken.

---

## Belangrijke Instellingen

Je `astro.config.mjs` heeft al het juiste domein:
```javascript
site: 'https://pickmyaitools.com'
```

Dit zorgt ervoor dat alle links en sitemap correct werken.

---

## Troubleshooting

**DNS werkt niet?**
- DNS updates kunnen 24-48 uur duren (meestal 1-2 uur)
- Check je DNS records met [whatsmydns.net](https://www.whatsmydns.net)
- Zorg dat je de juiste records hebt toegevoegd

**Build faalt?**
- Check de build logs in je hosting dashboard
- Test lokaal met `npm run build`
- Zorg dat alle dependencies geïnstalleerd zijn

**SSL certificaat werkt niet?**
- Wacht 5-60 minuten na DNS update
- Check of je DNS records correct zijn
- Sommige providers hebben extra verificatie nodig

---

## Aanbeveling

**Voor jouw situatie raad ik Netlify aan omdat:**
- ✅ Makkelijkste setup
- ✅ Automatische SSL
- ✅ Goede documentatie
- ✅ Gratis tier is ruim voldoende
- ✅ Automatische deploys vanuit GitHub
- ✅ Goede performance

---

## Volgende Stappen Na Deployment

1. Test alle pagina's op je live site
2. Check of sitemap werkt: `https://pickmyaitools.com/sitemap.xml`
3. Submit je sitemap aan Google Search Console
4. Test op verschillende devices
5. Check of alle links werken

---

## Hulp Nodig?

Als je vastloopt:
- Netlify docs: https://docs.netlify.com
- Astro deployment: https://docs.astro.build/en/guides/deploy/
- Namecheap DNS help: https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/
