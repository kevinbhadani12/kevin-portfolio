# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## Quick Start (Automated with GitHub Actions)

### Step 1: Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add your GitHub repository as remote (replace with your username/repo)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### Step 3: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already set up!

Every time you push to the `main` branch, your site will automatically:
- Build the latest version
- Deploy to GitHub Pages

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Manual Deployment (Alternative)

If you prefer to build and deploy manually:

### Build the Static Site

**On Linux/Mac:**
```bash
chmod +x build-static.sh
./build-static.sh
```

**On Windows:**
```bash
npx vite build --config vite.config.static.ts
```

**Or using npm:**
```bash
npm run build:static
```

### Deploy to GitHub Pages Manually

1. Install gh-pages package (one-time):
```bash
npm install --save-dev gh-pages
```

2. Add to your package.json scripts:
```json
"deploy": "npx gh-pages -d dist"
```

3. Run deployment:
```bash
npm run deploy
```

---

## Using a Custom Domain

### Step 1: Add CNAME file

Create a file named `CNAME` in the `client` folder with your domain:
```
yourdomain.com
```

### Step 2: Configure DNS

Add these DNS records with your domain provider:

**For apex domain (yourdomain.com):**
```
A Record → 185.199.108.153
A Record → 185.199.109.153
A Record → 185.199.110.153
A Record → 185.199.111.153
```

**For www subdomain:**
```
CNAME Record → YOUR_USERNAME.github.io
```

### Step 3: Enable Custom Domain in GitHub

1. Go to Settings → Pages
2. Enter your custom domain
3. Wait for DNS check to pass
4. Enable "Enforce HTTPS"

---

## Alternative Hosting Platforms

### Netlify

1. Connect your GitHub repository
2. Build command: `npx vite build --config vite.config.static.ts`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npx vite build --config vite.config.static.ts`
4. Output directory: `dist`
5. Deploy!

### Cloudflare Pages

1. Connect GitHub repository
2. Build command: `npx vite build --config vite.config.static.ts`
3. Build output directory: `dist`
4. Deploy!

---

## Updating Your Site

### With GitHub Actions (Automated)

Simply push your changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

The site will automatically rebuild and redeploy!

### Manual Updates

1. Make your changes
2. Build: `./build-static.sh`
3. Deploy: `npm run deploy` (if using gh-pages)

---

## Troubleshooting

### Site not loading?
- Check GitHub Actions tab for build errors
- Ensure GitHub Pages is enabled in Settings
- Wait 2-3 minutes after first deployment

### Styles not working?
- The `vite.config.static.ts` uses relative paths (`base: "./"`)
- This works for both custom domains and github.io URLs

### 404 Errors?
- Make sure the repository is public
- Check that the workflow has Pages write permissions

### Build Errors?
- Check that all dependencies are in package.json
- Run `npm install` to ensure all packages are installed
- Check the Actions tab for detailed error logs

---

## 📊 Monitoring

- **GitHub Actions**: Check the "Actions" tab in your repository
- **Build Status**: See real-time build progress
- **Deployment History**: View all past deployments

---

## 🎉 Success!

Once deployed, share your portfolio:
- LinkedIn profile
- Resume
- Email signature
- Professional networks

Your portfolio is now live and accessible worldwide! 🌍
