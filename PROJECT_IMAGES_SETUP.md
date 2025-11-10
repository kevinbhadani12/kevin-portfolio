# Project Images Setup Guide

## Adding Project Images

To add images for your projects, follow these steps:

### 1. Create Project Images Directory

Create a `projects` folder in the `client/public/` directory:

```
client/public/projects/
```

### 2. Add Your Project Images

Place your project images in the `client/public/projects/` folder with these filenames:

- **n8n-workflow.jpg** - For "Intelligent Workflow Automation with n8n" project
- **ai-pipeline.jpg** - For "AI-Powered Data Processing Pipeline" project
- **review-api.jpg** - For "Review Aggregation API" project
- **ecommerce-automation.jpg** - For "E-commerce Affiliate Automation" project
- **app-scraping.jpg** - For "Multi-Store App Scraping" project

### 3. Image Recommendations

- **Format**: JPG or PNG
- **Size**: Recommended 1200x600 pixels (2:1 aspect ratio)
- **File Size**: Optimize images to keep file sizes under 500KB for faster loading
- **Content**: Screenshots, diagrams, or visual representations of your projects

### 4. Image Optimization Tips

You can use online tools to optimize your images:
- [TinyPNG](https://tinypng.com/) - Compress PNG and JPG images
- [Squoosh](https://squoosh.app/) - Advanced image compression
- [ImageOptim](https://imageoptim.com/) - For Mac users

### 5. Fallback Behavior

If an image is not found or fails to load, it will automatically be hidden. The project card will still display all other information normally.

### 6. Adding New Project Images

When adding new projects, simply:
1. Add the image to `client/public/projects/`
2. Update the `image` property in the project object in `Projects.tsx`
3. Use the path format: `/projects/your-image-name.jpg`

## Current Project Images Expected

The following images are expected in `client/public/projects/`:

1. `n8n-workflow.jpg` - n8n workflow automation screenshot
2. `ai-pipeline.jpg` - AI data processing pipeline visualization
3. `review-api.jpg` - Review aggregation API dashboard/screenshot
4. `ecommerce-automation.jpg` - E-commerce automation workflow
5. `app-scraping.jpg` - Mobile app scraping interface

## Example Image Sources

You can create or source images from:
- Screenshots of your actual projects
- Workflow diagrams
- Architecture diagrams
- Dashboard screenshots
- UI mockups
- Process flowcharts

