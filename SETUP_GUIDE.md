# Setup Guide - Viewing Your Website Preview

## Step 1: Install Node.js

You need Node.js installed to run the Astro development server.

### Download and Install Node.js

1. **Visit:** https://nodejs.org/
2. **Download:** The LTS (Long Term Support) version (recommended)
3. **Install:** Run the installer and follow the setup wizard
4. **Verify:** After installation, restart your terminal/PowerShell and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v20.x.x and 10.x.x)

## Step 2: Install Project Dependencies

Once Node.js is installed, open PowerShell in your project directory and run:

```bash
npm install
```

This will install all required packages (Astro, Tailwind CSS, etc.)

## Step 3: Start the Development Server

Run this command to start the preview server:

```bash
npm run dev
```

You should see output like:
```
  Astro  v4.x.x  ready in XXX ms

  ➜  Local:   http://localhost:4321/
  ➜  Network: use --host to expose
```

## Step 4: View Your Website

1. **Open your browser**
2. **Navigate to:** `http://localhost:4321`
3. **You should see:** Your PickMyAITools homepage!

## Alternative: Build and Preview Production Version

To see how the production build looks:

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

This will show you the optimized, static version that will be deployed.

## Troubleshooting

### "npm is not recognized"
- Make sure Node.js is installed
- Restart your terminal/PowerShell after installing Node.js
- Check that Node.js is in your system PATH

### Port 4321 already in use
- The dev server will automatically try another port
- Check the terminal output for the actual URL

### Installation errors
- Make sure you're in the project directory (`c:\Users\nadin\Projecten\pickmyaitools`)
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

## Quick Commands Reference

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## What You'll See

When you open `http://localhost:4321`, you should see:
- Homepage with hero section
- Links to Use Cases, Comparisons, and Guides sections
- Navigation menu
- All 20 content pages accessible via navigation

You can click through all the pages to see the full site structure!
