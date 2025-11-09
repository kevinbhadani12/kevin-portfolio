# 🚀 GitHub Setup & Deployment Guide

Follow these steps to create a GitHub repository and deploy your portfolio.

## 📋 Prerequisites

- A GitHub account ([Sign up here](https://github.com/join) if you don't have one)
- Git installed on your computer ([Download here](https://git-scm.com/downloads))

---

## Method 1: Using Replit's GitHub Integration (Easiest)

### Step 1: Connect GitHub to Replit

1. Click the **three dots** (⋮) in the Replit sidebar
2. Select **"Version Control"**
3. Click **"Connect to GitHub"**
4. Authorize Replit to access your GitHub account
5. Create a new repository directly from Replit

This automatically pushes your code to GitHub!

---

## Method 2: Manual Setup (Step-by-Step)

### Step 1: Download Your Code from Replit

1. In Replit, click the **three dots** (⋮) menu
2. Select **"Download as ZIP"**
3. Extract the ZIP file to a folder on your computer

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` (or your preferred name)
   - **Description**: "My professional portfolio website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **⚠️ IMPORTANT**: DO NOT check "Initialize with README"
5. Click **"Create repository"**

### Step 3: Push Your Code to GitHub

Open your terminal/command prompt in the extracted folder and run these commands:

```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Set the main branch
git branch -M main

# Add your GitHub repository (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**📝 Note**: Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

### Step 4: Enter Your GitHub Credentials

When prompted:
- **Username**: Your GitHub username
- **Password**: Your Personal Access Token (NOT your GitHub password)

#### How to Create a Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Deployment"
4. Select scopes: Check **"repo"** (all sub-options)
5. Click "Generate token"
6. **⚠️ COPY THE TOKEN** - you won't see it again!
7. Use this token as your password when pushing

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Source: **GitHub Actions**
5. Click **"Save"**

### That's it! 🎉

GitHub Actions will automatically:
- Build your portfolio
- Deploy it to GitHub Pages

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

⏱️ **Wait time**: 2-3 minutes for first deployment

---

## 🔄 Updating Your Portfolio

After making changes in Replit:

### Option A: Using Replit GitHub Integration
1. Click "Version Control" in Replit
2. Commit and push your changes

### Option B: Manual Update
1. Download updated code from Replit
2. In your local folder, run:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages will automatically rebuild and redeploy!

---

## 🆘 Troubleshooting

### "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Regenerate your token if it expired

### "Repository not found"
- Check the repository URL is correct
- Make sure you have push access to the repository

### "Site not loading after deployment"
- Wait 2-3 minutes for deployment to complete
- Check the "Actions" tab for build status
- Ensure repository is Public

### "Permission denied"
```bash
# If you get SSH errors, use HTTPS instead
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### Build failing?
- Check the "Actions" tab in GitHub
- Look for error messages in the workflow logs
- Ensure all dependencies are listed in package.json

---

## 📱 Verify Deployment

1. Go to the "Actions" tab in your GitHub repository
2. Wait for the green checkmark ✅
3. Visit your site: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🌟 Next Steps

- Share your portfolio on LinkedIn
- Add the link to your resume
- Customize with your own content (see CUSTOMIZE.md)
- Consider adding a custom domain

---

## 📧 Need Help?

If you get stuck:
1. Check the error message carefully
2. Search for the error on Google
3. Check GitHub's documentation: [docs.github.com](https://docs.github.com)
4. Ask in GitHub Discussions or Stack Overflow

---

**Pro Tip**: Bookmark your portfolio URL and share it everywhere! 🚀
