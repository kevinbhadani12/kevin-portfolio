# 📸 Profile Image Setup

To add your profile image to the navbar logo:

## Step 1: Add Your Profile Image

1. Place your profile image in the `client/public/` folder
2. Name it: `profile-image.jpg` (or `.png`)
3. Recommended size: 200x200 pixels (square image works best)
4. Format: JPG or PNG

## Step 2: Update the Image Path (if needed)

If you use a different filename, update `client/src/components/Navbar.tsx`:

```tsx
<img
  src="/your-image-name.jpg"
  alt="Kevin Bhadani"
  ...
/>
```

## Step 3: Test

- The image will appear as a circular profile picture in the navbar
- If the image is not found, it will automatically fallback to "KB" initials
- The image should be optimized for web (compressed, reasonable file size)

## Current Setup

The navbar is already configured to:

- Display your profile image as a circular logo
- Show "KB" initials as fallback if image not found
- Scale nicely on mobile and desktop

---

**Note:** After adding the image, rebuild the site for it to appear.
