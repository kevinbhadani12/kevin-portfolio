# 🚀 GitHub Pages Deployment Guide

Complete guide to deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- A GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer
- Your portfolio code ready

---

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top-right → **"New repository"**
3. Fill in:
   - **Repository name**: `portfolio` (or your preferred name)
   - **Description**: "My professional portfolio website"
   - **Visibility**: ✅ **Public** (required for free GitHub Pages)
   - ⚠️ **DO NOT** check "Initialize with README"
4. Click **"Create repository"**

---

## Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Set main branch
git branch -M main

# Add GitHub repository (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace:**

- `YOUR_USERNAME` → Your GitHub username
- `YOUR_REPO_NAME` → Your repository name

### Authentication

When prompted for credentials:

- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (NOT your GitHub password)

#### Create Personal Access Token:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token (classic)"**
3. Name: "Portfolio Deployment"
4. Select scope: ✅ **repo** (all sub-options)
5. Click **"Generate token"**
6. **⚠️ COPY THE TOKEN** - you won't see it again!
7. Use this token as your password when pushing

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Source**: **GitHub Actions**
5. Click **"Save"**

---

## Step 4: Configure Contact Form for Static Hosting

⚠️ **Important**: GitHub Pages only serves static files. Your backend API (`/api/contact`) won't work.

### Option 1: Use Formspree (Recommended - Easiest)

1. Go to [formspree.io](https://formspree.io) and sign up (free tier: 50 submissions/month)
2. Create a new form
3. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

4. Update `client/src/components/ContactForm.tsx`:

```tsx
// Change line 24 from:
const response = await fetch("/api/contact", {

// To:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

5. Formspree will automatically send emails to your registered email address!

### Option 2: Use EmailJS (Free - 200 emails/month)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Install EmailJS: `npm install @emailjs/browser`
6. Update ContactForm to use EmailJS (see EmailJS documentation)

### Option 3: Use mailto: Link (Simple but less reliable)

Replace the form submission with a mailto link that opens the user's email client.

---

## Step 5: Test the Deployment

1. Go to your repository → **"Actions"** tab
2. Wait for the workflow to complete (green checkmark ✅)
3. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

⏱️ **First deployment takes 2-3 minutes**

---

## Step 6: Update Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy!

---

## 🔧 Troubleshooting

### "Authentication failed"

- Use Personal Access Token, not your password
- Regenerate token if expired

### "Repository not found"

- Check repository URL is correct
- Ensure you have push access

### "Site not loading"

- Wait 2-3 minutes for deployment
- Check "Actions" tab for build status
- Ensure repository is **Public**

### "Build failing"

- Check "Actions" tab → Click on failed workflow
- Look for error messages
- Common issues:
  - Missing dependencies in `package.json`
  - Build script errors
  - TypeScript errors

### "Contact form not working"

- GitHub Pages can't run backend code
- Use Formspree, EmailJS, or mailto: link
- See Step 4 above

### "404 Page Not Found"

- Check repository name matches URL
- Ensure GitHub Pages is enabled
- Check base path in `vite.config.static.ts` is `"./"`

---

## 📱 Verify Deployment

1. ✅ Check "Actions" tab - workflow should be green
2. ✅ Visit your site URL
3. ✅ Test all pages and links
4. ✅ Test contact form (if configured)

---

## 🌟 Next Steps

- **Custom Domain**: Add your own domain in GitHub Pages settings
- **SEO**: Add meta tags (see `client/index.html`)
- **Analytics**: Add Google Analytics or similar
- **Share**: Add portfolio link to LinkedIn, resume, etc.

---

## 📝 Important Notes

### What Works on GitHub Pages:

✅ Static HTML/CSS/JavaScript
✅ React (compiled to static files)
✅ Images and assets
✅ Client-side routing

### What Doesn't Work:

❌ Backend API endpoints (`/api/*`)
❌ Server-side code
❌ Database connections
❌ Environment variables (use build-time config instead)

### For Full Backend Features:

Consider deploying to:

- **Vercel** (free, supports serverless functions)
- **Netlify** (free, supports serverless functions)
- **Railway** (free tier available)
- **Render** (free tier available)

---

## 🎉 Success!

Your portfolio is now live on GitHub Pages! Share it with the world! 🚀

**Your site URL:**

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```
