# ✅ GitHub Deployment Checklist

Quick checklist to deploy your portfolio to GitHub Pages.

## Before You Start

- [ ] GitHub account created
- [ ] Git installed on your computer
- [ ] Portfolio code is ready

## Step 1: Create Repository

- [ ] Go to github.com and create new repository
- [ ] Name it (e.g., "portfolio")
- [ ] Set to **Public**
- [ ] **Don't** initialize with README

## Step 2: Push Code

- [ ] Open terminal in project folder
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit"`
- [ ] Run: `git branch -M main`
- [ ] Run: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`
- [ ] Run: `git push -u origin main`
- [ ] Use Personal Access Token as password (not GitHub password)

## Step 3: Enable GitHub Pages

- [ ] Go to repository → Settings → Pages
- [ ] Source: Select **"GitHub Actions"**
- [ ] Click Save

## Step 4: Fix Contact Form (IMPORTANT!)

- [ ] Choose one option:
  - [ ] **Option A**: Use Formspree (easiest)
    - Sign up at formspree.io
    - Get form endpoint
    - Update ContactForm.tsx to use Formspree URL
  - [ ] **Option B**: Use EmailJS
    - Sign up at emailjs.com
    - Configure and update ContactForm
  - [ ] **Option C**: Use mailto: link (simplest but less reliable)

## Step 5: Wait & Verify

- [ ] Go to repository → Actions tab
- [ ] Wait for workflow to complete (green ✅)
- [ ] Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- [ ] Test all pages and links
- [ ] Test contact form

## Done! 🎉

Your portfolio is live!

---

**Need help?** See `GITHUB_DEPLOYMENT.md` for detailed instructions.
