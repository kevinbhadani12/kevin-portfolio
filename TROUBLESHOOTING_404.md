# 🔧 Fixing GitHub Pages 404 Error

You're seeing a 404 error at `kevinbhadani12.github.io/kevin-portfolio/`. Here's how to fix it:

## ✅ Step-by-Step Fix

### Step 1: Check GitHub Actions Status

1. Go to your repository: `https://github.com/kevinbhadani12/kevin-portfolio`
2. Click the **"Actions"** tab
3. Check if there's a workflow run:
   - ✅ **Green checkmark** = Deployment successful
   - ❌ **Red X** = Build failed (click to see errors)
   - ⏳ **Yellow circle** = Still running (wait for it to finish)
   - ❓ **No workflow** = Workflow hasn't run yet

### Step 2: Enable GitHub Pages

1. Go to repository → **Settings** → **Pages** (left sidebar)
2. Under **"Source"**, select: **"GitHub Actions"**
3. Click **Save**
4. If you see a custom domain field with `kevinbhadani-portfolio`, **clear it** and save

### Step 3: Trigger Deployment

If the workflow hasn't run or failed:

**Option A: Push a new commit**

```bash
git add .
git commit -m "Trigger GitHub Pages deployment"
git push origin main
```

**Option B: Manually trigger workflow**

1. Go to repository → **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click **"Run workflow"**

### Step 4: Wait for Deployment

- First deployment: **2-5 minutes**
- Subsequent deployments: **1-2 minutes**
- Check the **Actions** tab to see progress

### Step 5: Verify Repository Settings

Make sure:

- ✅ Repository is **Public** (Settings → scroll down → Change visibility)
- ✅ GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
- ✅ No custom domain is set (unless you have a real domain)

### Step 6: Check the Correct URL

Your site should be at:

```
https://kevinbhadani12.github.io/kevin-portfolio/
```

**Note:** The URL format is:

- `https://USERNAME.github.io/REPO_NAME/`
- Make sure the repository name matches: `kevin-portfolio`

---

## 🔍 Common Issues

### Issue 1: "No workflow runs found"

**Solution:** Push a commit to trigger the workflow:

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Issue 2: "Workflow failed"

**Solution:**

1. Click on the failed workflow
2. Check the error logs
3. Common issues:
   - Missing dependencies
   - Build errors
   - TypeScript errors

### Issue 3: "Repository is private"

**Solution:**

1. Go to Settings → scroll to bottom
2. Click **"Change visibility"**
3. Make repository **Public**
4. GitHub Pages only works with public repos (free tier)

### Issue 4: "Still showing 404 after deployment"

**Solution:**

1. Wait 5-10 minutes (DNS propagation)
2. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
3. Try incognito/private browsing mode
4. Check if the Actions tab shows successful deployment

### Issue 5: "Base path issues"

**Solution:**
The `vite.config.static.ts` has been updated to use the correct base path. If you still have issues, the base should be:

```typescript
base: "/kevin-portfolio/";
```

---

## 📋 Quick Checklist

- [ ] Repository is **Public**
- [ ] GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
- [ ] Workflow has run successfully (Actions tab → green checkmark)
- [ ] No custom domain is set (unless you own a real domain)
- [ ] You're using the correct URL: `https://kevinbhadani12.github.io/kevin-portfolio/`
- [ ] Waited 5-10 minutes after deployment

---

## 🚀 Still Not Working?

1. **Check Actions tab** - Look for error messages
2. **Check repository name** - Must match URL: `kevin-portfolio`
3. **Try a different browser** - Clear cache
4. **Check if files are in the repo** - All files should be committed and pushed

---

## 💡 Quick Test

Run this locally to test the build:

```bash
npm run build:static
```

If this works, the issue is with GitHub Pages configuration, not your code.

---

## 📞 Need More Help?

Share:

1. Screenshot of the **Actions** tab
2. Any error messages from the workflow
3. Repository URL

Then I can help you debug further!
