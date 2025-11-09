#!/bin/bash

# Build script for GitHub Pages deployment
echo "Building static portfolio site for GitHub Pages..."

# Run the static build
npx vite build --config vite.config.static.ts

echo "✅ Build complete! The 'dist' folder is ready for deployment."
echo "📁 Deploy the contents of the 'dist' folder to GitHub Pages"
