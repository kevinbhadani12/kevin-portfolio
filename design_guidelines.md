# Portfolio Website Design Guidelines for Kevin Bhadani

## Design Approach
**Reference-Based**: Drawing inspiration from modern developer portfolios (Linear team pages, Vercel showcase, Stripe careers) - emphasizing clean typography, generous whitespace, and content clarity over visual flourish.

## Core Design Principles
- **Professional Minimalism**: Tech-focused, content-first approach
- **Scannable Hierarchy**: Information structured for quick assessment by recruiters/employers
- **Credibility Through Clarity**: Technical skills and achievements take center stage

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) - modern, professional sans-serif
- **Accent Font**: JetBrains Mono for code snippets or technical callouts
- **Hierarchy**:
  - Hero Name: text-5xl to text-7xl, font-bold
  - Section Headings: text-3xl to text-4xl, font-semibold
  - Subsection/Role Titles: text-xl to text-2xl, font-medium
  - Body Text: text-base to text-lg, leading-relaxed
  - Technical Tags: text-sm, font-medium

## Layout System
**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Component gaps: gap-6 to gap-12
- Container: max-w-6xl mx-auto with px-6 md:px-8

## Page Structure

### Hero Section (80vh min-height)
- Full-width with gradient overlay background (no image - keep professional/tech focused)
- Centered content: Name, professional title ("Python Developer & Automation Engineer")
- One-line impactful summary
- Contact icons (email, phone, LinkedIn) with links
- Subtle scroll indicator at bottom

### Technical Skills Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skill category cards with:
  - Category title (e.g., "Programming", "Web Scraping")
  - List of technologies as pills/tags with subtle borders
  - Compact spacing within cards (p-6)

### Experience Timeline
- Two-column on desktop (timeline + content): grid-cols-1 lg:grid-cols-[200px_1fr]
- Left column: Company logo placeholder + dates
- Right column: Role title, company name, achievement bullets
- Visual timeline connector (vertical line with dots) between entries
- Expandable project details within experience cards

### Key Projects Showcase
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Project cards with:
  - Project name (text-xl font-semibold)
  - Brief description (2-3 lines)
  - Tech stack tags
  - Subtle border with hover lift effect (transform scale-105)
  - No background images - icon/emoji placeholder for visual interest

### Education Section
- Simple card layout with degree, institution, dates, GPA
- Single centered card: max-w-2xl

### Contact/Footer Section
- Split layout: Contact form (left) + Quick links/info (right)
- Form fields: Name, Email, Message with consistent input styling
- Footer with social links, copyright, built with tech stack mention

## Component Specifications

### Cards
- Rounded corners: rounded-xl
- Padding: p-6 to p-8
- Border treatment: border with subtle shadow on hover
- Consistent spacing between card elements: space-y-4

### Buttons
- Primary CTA: px-8 py-3, text-base, font-medium, rounded-lg
- Secondary: outlined variant with border-2
- Icon buttons for social: w-10 h-10, rounded-full

### Tags/Pills (Skills, Tech Stack)
- Compact: px-3 py-1, text-sm, rounded-full
- Inline-flex with gap-2 in containers

### Navigation (if needed)
- Sticky header: h-16
- Logo/name left, nav links right
- Mobile: Hamburger menu transforming to overlay

## Responsive Breakpoints
- Mobile: Base (single column, stacked)
- Tablet: md: (2 columns for grids)
- Desktop: lg: (3 columns, full layouts)

## Animations
- Minimize to professional essentials only:
  - Subtle fade-in on scroll for sections
  - Card hover lift (translate-y-1)
  - Button hover states
  - No parallax, no complex scroll animations

## Images
**No hero image** - keep professional with gradient background. No project screenshots needed - text descriptions and tech tags sufficient for this technical portfolio.

## Accessibility
- Semantic HTML throughout (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Focus states for all interactive elements (ring-2 ring-offset-2)
- Consistent form input styling with labels

**Critical Implementation Notes**: 
- All sections must feel complete - no sparse layouts
- Each experience entry includes 3-5 achievement bullets minimum
- Skills organized into clear categories with 4-6 items each
- Projects section shows at least 3 substantial project cards
- Footer includes newsletter/updates section + social proof element ("Available for opportunities")