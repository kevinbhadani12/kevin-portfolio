# Kevin Bhadani - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing professional experience, technical skills, and projects.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Professional transitions and scroll effects
- **SEO Optimized**: Meta tags for better search engine visibility
- **Fast Performance**: Vite-powered development and build process

## 📋 Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── TechnicalSkills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/
│   │   │   └── Home.tsx     # Main portfolio page
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html
├── server/                   # Express server (for development)
├── package.json
└── vite.config.ts
```

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: Wouter
- **Backend** (dev only): Express.js, Node.js

## 📦 Installation & Setup

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Local Development

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to `http://localhost:5000`

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create GitHub repository**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Create `.github/workflows/deploy.yml`**:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build:static
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

4. **Push to deploy**:
```bash
git push
```

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option 2: Manual Deployment

1. **Build the static site**:
```bash
npm run build:static
```

2. **Deploy the `dist` folder** to any static hosting service (Netlify, Vercel, etc.)

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** - `client/src/components/Hero.tsx`:
   - Name, title, summary
   - Contact information
   - Location

2. **Skills** - `client/src/components/TechnicalSkills.tsx`:
   - Add/remove skill categories
   - Update technologies

3. **Experience** - `client/src/components/Experience.tsx`:
   - Add/remove job positions
   - Update descriptions and projects

4. **Projects** - `client/src/components/Projects.tsx`:
   - Add your projects
   - Update descriptions and technologies

5. **Education** - `client/src/components/Education.tsx`:
   - Update degree and university information

6. **Footer** - `client/src/components/Footer.tsx`:
   - Update contact links
   - Modify availability status

### Update Colors & Styling

- **Colors**: Edit `client/src/index.css` (light and dark mode variables)
- **Fonts**: Update Google Fonts in `client/index.html`
- **Components**: Modify component styles in their respective files

## 📝 Adding New Sections

1. Create a new component in `client/src/components/`
2. Import and add it to `client/src/pages/Home.tsx`
3. Add navigation link in `client/src/components/Navbar.tsx` (optional)

Example:
```tsx
// client/src/components/Certifications.tsx
export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      {/* Your content */}
    </section>
  );
}

// Add to Home.tsx
import Certifications from "@/components/Certifications";
// ... add <Certifications /> in the main component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:static` - Build static site for GitHub Pages
- `npm run preview` - Preview production build

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 📧 Contact

- **Email**: kevinbhadani2121@gmail.com
- **Phone**: +91-6354116990
- **LinkedIn**: [linkedin.com/in/kevinbhadani](https://linkedin.com/in/kevinbhadani)
- **Location**: Ahmedabad, Gujarat, India

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
