# 🔍 Debugging GitHub Actions Workflow Failures

Your workflow is failing. Here's how to find and fix the issue:

## Step 1: Check the Actual Error

1. Go to your repository: `https://github.com/kevinbhadani12/kevin-portfolio`
2. Click the **"Actions"** tab
3. Click on the **failed workflow** (the one with the red X)
4. Click on the **"build"** job (it will be red)
5. Expand each step to see the error message

**Look for:**

- ❌ "Error: Cannot find module..."
- ❌ "Build failed..."
- ❌ "Type error..."
- ❌ "File not found..."

## Step 2: Common Issues & Fixes

### Issue 1: Missing Files in Repository

**Symptoms:**

- "Cannot find file: client/index.html"
- "File not found"

**Fix:**
Make sure all files are committed:

```bash
git add .
git commit -m "Add all files"
git push origin main
```

**Check these files exist:**

- ✅ `client/index.html`
- ✅ `client/src/main.tsx`
- ✅ `vite.config.static.ts`
- ✅ `package.json`
- ✅ `.github/workflows/deploy.yml`

### Issue 2: Build Errors

**Symptoms:**

- TypeScript errors
- Import errors
- Missing dependencies

**Fix:**
Test locally first:

```bash
npm install
npm run build:static
```

If this fails locally, fix the errors before pushing.

### Issue 3: Missing Dependencies

**Symptoms:**

- "Cannot find module 'xxx'"
- "Package not found"

**Fix:**

1. Make sure `package.json` has all dependencies
2. Run `npm install` locally
3. Commit `package-lock.json`
4. Push again

### Issue 4: TypeScript Errors

**Symptoms:**

- "Type error: ..."
- "TS2307: Cannot find module..."

**Fix:**

1. Run `npm run check` locally
2. Fix all TypeScript errors
3. Commit and push

### Issue 5: .env File Issues

**Symptoms:**

- "Cannot find .env"
- Environment variable errors

**Fix:**
The `.env` file is in `.gitignore` (which is correct), but if the build tries to use it:

- The static build shouldn't need `.env`
- Make sure `vite.config.static.ts` doesn't reference environment variables that don't exist

### Issue 6: Path/Import Errors

**Symptoms:**

- "Cannot resolve '@/...'"
- Path resolution errors

**Fix:**
Check that `vite.config.static.ts` has correct alias paths:

```typescript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./client/src"),
    "@shared": path.resolve(__dirname, "./shared"),
    "@assets": path.resolve(__dirname, "./attached_assets"),
  },
}
```

## Step 3: Test Build Locally

Before pushing, test the build:

```bash
# Install dependencies
npm install

# Test the static build
npm run build:static

# Check if dist folder was created
ls dist
```

**If this works locally but fails on GitHub:**

- Check that all files are committed
- Check `.gitignore` isn't excluding needed files
- Check for OS-specific issues (line endings, etc.)

## Step 4: Check Repository Contents

Make sure these are in your repository:

**Required Files:**

- ✅ `.github/workflows/deploy.yml`
- ✅ `package.json`
- ✅ `package-lock.json` (or `yarn.lock`)
- ✅ `vite.config.static.ts`
- ✅ `tsconfig.json`
- ✅ `client/index.html`
- ✅ `client/src/main.tsx`
- ✅ `client/src/App.tsx`

**Should NOT be in repository:**

- ❌ `.env` (in `.gitignore`)
- ❌ `node_modules/` (in `.gitignore`)
- ❌ `dist/` (in `.gitignore`)

## Step 5: Quick Fix Checklist

Run these commands locally:

```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Test build
npm run build:static

# 3. If successful, commit everything
git add .
git commit -m "Fix build configuration"
git push origin main
```

## Step 6: Share Error Details

If you're still stuck, share:

1. **The exact error message** from the Actions tab
2. **Which step failed** (Install dependencies? Build? Deploy?)
3. **Output of local build test:**
   ```bash
   npm run build:static
   ```

## Common Error Messages & Solutions

### "npm ERR! code ELIFECYCLE"

- **Solution:** Check `package.json` scripts are correct

### "Cannot find module 'vite'"

- **Solution:** Run `npm install` and commit `package-lock.json`

### "Error: spawn ENOENT"

- **Solution:** Missing system dependencies (rare on GitHub Actions)

### "Build failed with exit code 1"

- **Solution:** Check the step above for specific error

### "Path must be a string"

- **Solution:** Check `vite.config.static.ts` path configurations

---

## 🚀 Quick Test Script

Run this to verify everything:

```bash
# Test 1: Install
npm install

# Test 2: Type check
npm run check

# Test 3: Build
npm run build:static

# Test 4: Verify output
ls -la dist/
```

If all 4 steps pass, the issue is likely with GitHub Actions configuration or missing files in the repo.

---

## 💡 Pro Tip

**Always test locally first!** If `npm run build:static` works on your machine, it should work on GitHub Actions (assuming all files are committed).
