# 🎨 Customization Guide

This guide will help you customize the portfolio with your own information.

## 📝 Quick Updates

### 1. Personal Information

**File: `client/src/components/Hero.tsx`**

```tsx
// Update these values:
<h1>Your Name</h1>
<p>Your Professional Title</p>
<p>Your summary/tagline</p>

// Update contact info:
<Button onClick={() => handleContactClick('email')}>
  your.email@example.com
</Button>
<Button onClick={() => handleContactClick('phone')}>
  +1-XXX-XXX-XXXX
</Button>
<Button onClick={() => window.open('https://linkedin.com/in/yourprofile')}>
  LinkedIn
</Button>

// Update location:
<span>Your City, State/Country</span>
```

### 2. Technical Skills

**File: `client/src/components/TechnicalSkills.tsx`**

```tsx
const skillCategories: SkillCategory[] = [
  {
    title: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more categories...
];
```

### 3. Work Experience

**File: `client/src/components/Experience.tsx`**

```tsx
const experiences: ExperienceItem[] = [
  {
    role: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Jan 2024 – Present",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      // Add more...
    ],
    projects: [  // Optional
      {
        title: "Project Name",
        description: "What you built/achieved"
      }
    ]
  },
  // Add more jobs...
];
```

### 4. Projects

**File: `client/src/components/Projects.tsx`**

```tsx
import { YourIcon } from "lucide-react"; // Choose an icon

const projects: Project[] = [
  {
    title: "Project Name",
    description: "Detailed description of what you built",
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    icon: YourIcon  // Code2, Workflow, Smartphone, etc.
  },
  // Add more projects...
];
```

**Available Icons** (from lucide-react):
- `Code2` - Coding projects
- `Workflow` - Automation/workflows
- `Smartphone` - Mobile apps
- `Globe` - Web applications
- `Database` - Data projects
- `Cloud` - Cloud services
- `Lock` - Security projects
- `Zap` - Performance/optimization
- [See all icons](https://lucide.dev/icons/)

### 5. Education

**File: `client/src/components/Education.tsx`**

```tsx
<h3>Your Degree Name</h3>
<p>Your Major/Field</p>
<p>University Name</p>
<span>2018 - 2022</span>  // Years
<span>GPA: 3.8</span>      // Your GPA (optional)
```

### 6. Footer Contact

**File: `client/src/components/Footer.tsx`**

```tsx
// Update availability message:
<p>Your custom message about availability</p>

// Update contact links:
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
<a href="tel:+1234567890">
  +1-234-567-890
</a>
<a href="https://linkedin.com/in/yourprofile">
  linkedin.com/in/yourprofile
</a>
```

---

## 🎨 Visual Customization

### Colors

**File: `client/src/index.css`**

The portfolio uses a color system. Update these variables:

```css
:root {
  /* Primary brand color (buttons, links, accents) */
  --primary: 217 91% 60%;  /* Blue - change to your brand color */
  
  /* Background colors */
  --background: 0 0% 100%;  /* White */
  --card: 0 0% 98%;         /* Slightly off-white */
  
  /* Text colors */
  --foreground: 0 0% 10%;         /* Almost black */
  --muted-foreground: 0 0% 35%;   /* Gray text */
}
```

**Color Format**: `H S% L%`
- H = Hue (0-360)
- S = Saturation (0-100%)
- L = Lightness (0-100%)

**Example Colors**:
- Blue: `217 91% 60%`
- Green: `142 76% 36%`
- Purple: `262 83% 48%`
- Orange: `32 95% 44%`
- Red: `0 84% 48%`

Use [HSL Color Picker](https://hslpicker.com/) to find your colors.

### Fonts

**File: `client/index.html`**

```html
<!-- Replace with your preferred Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap">
```

**File: `client/src/index.css`**

```css
:root {
  --font-sans: YourFont, sans-serif;
  --font-mono: YourMonoFont, monospace;
}
```

Popular font combinations:
- **Modern**: Inter + JetBrains Mono (current)
- **Classic**: Roboto + Roboto Mono
- **Elegant**: Montserrat + Source Code Pro
- **Professional**: Open Sans + Fira Code

---

## 🔧 Advanced Customization

### Adding a New Section

1. **Create Component**: `client/src/components/YourSection.tsx`
```tsx
export default function YourSection() {
  return (
    <section className="py-16 md:py-24" id="your-section">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Your Section Title
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. **Add to Home**: `client/src/pages/Home.tsx`
```tsx
import YourSection from "@/components/YourSection";

// Add in the main return:
<YourSection />
```

3. **Add Navigation** (optional): `client/src/components/Navbar.tsx`
```tsx
const navLinks = [
  // ... existing links
  { label: "Your Section", href: "#your-section" }
];
```

### Changing Layout

**Hero Height**: `client/src/components/Hero.tsx`
```tsx
// Change min-h-[80vh] to your preferred height
<section className="min-h-[90vh]">  // 90% viewport height
<section className="min-h-screen">   // Full screen
```

**Section Spacing**: Update in each component
```tsx
className="py-16 md:py-24"  // Current: 64px mobile, 96px desktop
className="py-12 md:py-20"  // Compact: 48px mobile, 80px desktop
className="py-20 md:py-32"  // Spacious: 80px mobile, 128px desktop
```

**Max Width**: Update in each section
```tsx
className="max-w-6xl"   // Current: 1152px
className="max-w-5xl"   // Narrower: 1024px
className="max-w-7xl"   // Wider: 1280px
```

### Adding Social Links

**File: `client/src/components/Hero.tsx` or `Footer.tsx`**

```tsx
import { Github, Twitter, Instagram } from "lucide-react";

<Button 
  variant="outline" 
  onClick={() => window.open('https://github.com/yourusername', '_blank')}
>
  <Github className="w-4 h-4" />
  GitHub
</Button>
```

### Adding Images

1. Place images in `attached_assets/` folder
2. Import in component:
```tsx
import profileImage from "@assets/profile-photo.jpg";

<img src={profileImage} alt="Your Name" />
```

### Animations

**Scroll animations** - Add to components:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

---

## 📱 Testing Responsiveness

Test your changes on different screen sizes:

1. **Browser DevTools**: Press F12 → Toggle device toolbar
2. **Test sizes**:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1440px (Laptop)

---

## ✅ Checklist Before Deploying

- [ ] Updated all personal information
- [ ] Added your actual work experience
- [ ] Included your real projects
- [ ] Updated contact information
- [ ] Changed colors to your brand (optional)
- [ ] Tested on mobile, tablet, desktop
- [ ] Checked all links work
- [ ] Spell-checked all content
- [ ] Updated meta tags in `index.html`

---

## 🆘 Need Help?

- Check component comments for guidance
- Use VS Code autocomplete for available props
- Reference existing sections for patterns
- Keep the design consistent with existing components

---

Happy customizing! 🎉
