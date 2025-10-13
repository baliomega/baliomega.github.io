# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Version 3 of Nurul Izwan Dahlan's personal portfolio website. A modern, production-ready Next.js application showcasing UI/UX design work with a focus on design systems and enterprise UX for the energy sector. Features a bold brutalist design aesthetic with asymmetric layouts and interactive elements.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Static export (`output: 'export'`) for GitHub Pages/Vercel/Netlify

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, metadata, Inter font
│   ├── page.tsx         # Home page (imports Portfolio component)
│   └── globals.css      # Tailwind directives, smooth scroll behavior
└── components/
    └── Portfolio.tsx    # Main portfolio component (client-side)
```

## Development Commands

```bash
npm run dev      # Development server on localhost:3000
npm run build    # Production build + static export to out/
npm run start    # Preview production build locally
npm run lint     # ESLint code quality checks
```

## Key Architecture Patterns

### Client Component Pattern

`Portfolio.tsx` uses `'use client'` directive because it requires:
- React hooks (useState, useEffect)
- Browser APIs (keyboard events, scroll management)
- Interactive event handlers

### Type Safety

All data structures use TypeScript interfaces:
- `Project`: Project data with challenge/solution/impact fields
- `Experience`: Work experience timeline entries

### State Management

Two pieces of local state:
- `selectedProject: Project | null` - Controls modal visibility and content
- `hoveredCard: number | null` - Tracks which card is being hovered for animations

### Side Effects (useEffect)

1. **Keyboard Accessibility**: ESC key closes modal
2. **Scroll Lock**: Prevents body scroll when modal is open
3. **Cleanup**: Both effects properly clean up event listeners

## Styling System

### Design Tokens

**Color Palette:**
- Primary: `amber-500` (#F59E0B) to `orange-500` (#F97316)
- Background: `black` with `gray-900` cards
- Text: `white` with `gray-300`/`gray-400` for hierarchy

**Project-Specific Gradients:**
- Project 1: `from-orange-500 to-red-600`
- Project 2: `from-blue-500 to-cyan-600`
- Project 3: `from-emerald-500 to-teal-600`

### Brutalist Design Language

Key characteristics:
- **Typography**: Font-black weights (800-900), massive sizes (text-6xl to text-9xl)
- **Rotations**: Elements rotated -6deg to 3deg for visual interest
- **Borders**: 2-4px borders on cards and buttons
- **Asymmetry**: Intentional offsets using `translate-x-*` and margin variations
- **High Contrast**: Black backgrounds with vibrant accent colors

### Responsive Behavior

Uses Tailwind's default breakpoints. Mobile-specific adjustments should use `sm:`, `md:`, `lg:` prefixes. The design is inherently responsive but optimized for desktop viewing.

## Content Management

### Adding/Editing Projects

Edit `src/components/Portfolio.tsx` lines 53-85:

```typescript
const projects: Project[] = [
  {
    id: 1, // Must be unique
    title: "Project Title",
    category: "Design System", // Shows as badge
    year: "2024",
    description: "Brief description for card",
    challenge: "What problem needed solving",
    solution: "How you approached it",
    impact: "Measurable results",
    color: "from-color-500 to-color-600" // Tailwind gradient
  },
]
```

### Adding/Editing Experience

Edit `src/components/Portfolio.tsx` lines 87-91:

```typescript
const experience: Experience[] = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    desc: "Brief description"
  },
]
```

### Updating Contact Links

Located in the Contact section (lines 291-327):
- Email: Line 292 (href) and 298 (display text)
- LinkedIn: Line 303 (href)
- GitHub: Line 318 (href)

## Component Architecture

### Main Sections

1. **Floating Navigation** (lines 74-79): Fixed position nav dots, smooth scroll
2. **Hero Section** (lines 81-149): Large title, gradient effects, CTA buttons
3. **About Section** (lines 151-211): Bio, skills badges, experience timeline
4. **Projects Section** (lines 213-271): Asymmetric project cards with numbers
5. **Contact Section** (lines 273-333): Social links as large interactive cards
6. **Modal** (lines 335-393): Full-screen project case study (conditionally rendered)

### Interactive Elements

**Project Cards:**
- Click to open modal with full case study
- Hover to change border color and reset rotation
- Alternating left/right layout based on index

**Modal System:**
- Backdrop blur and dark overlay
- Sticky header with close button
- Keyboard accessible (ESC to close)
- Body scroll prevention
- Three sections: Challenge (amber), Solution (orange), Impact (gradient)

## Accessibility Features

- Semantic HTML: `<nav>`, `<section>`, `<h1>`-`<h4>`
- ARIA labels on navigation dots and close button
- Keyboard navigation: ESC closes modal
- Focus management: Modal traps focus when open
- Smooth scroll behavior in globals.css
- High contrast ratios for text readability

## Deployment Configurations

### Static Export

`next.config.ts` configured with:
- `output: 'export'` - Generates static HTML/CSS/JS
- `images: { unoptimized: true }` - No Image Optimization API (not needed for static export)

### GitHub Pages

1. Build generates `out/` directory
2. Can deploy `out/` contents to `gh-pages` branch
3. Or use GitHub Actions for automatic builds

### Vercel/Netlify

Will auto-detect Next.js and deploy correctly. No special configuration needed.

## Common Tasks

### Change Color Scheme

Replace all instances of:
- `amber-500` / `amber-400` / `orange-500` / `orange-600`
- Update gradient colors in `bg-gradient-to-*` classes
- Update project-specific gradient colors

### Add New Section

1. Add new `<section id="new-section">` in Portfolio.tsx
2. Add corresponding nav dot in floating navigation
3. Follow existing pattern: container, heading with label, content grid

### Customize Typography

Current font: Inter (loaded in `layout.tsx`)

To change:
```typescript
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
// Apply to <body className={yourFont.className}>
```

### Add Images

1. Place in `/public` directory (e.g., `/public/images/project1.png`)
2. Reference as `/images/project1.png` in src attribute
3. Use Next.js `<Image>` component for optimization (if removing static export)

## Performance Considerations

- Static export means no server-side rendering overhead
- All JavaScript is client-side
- Tailwind CSS purges unused styles in production
- Lucide icons are tree-shakeable (only imported icons are bundled)
- No external API calls or data fetching

## Browser Support

Requires modern browsers supporting:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript (useState, useEffect, arrow functions)
- Tailwind's default browser support (last 2 versions of major browsers)

## Differences from v1/v2

**v1 & v2**: Single HTML file, vanilla CSS/JS, immediate deployment
**v3 (this)**: Component-based React, TypeScript type safety, build process required

Trade-offs:
- ✅ Better maintainability and development experience
- ✅ Type safety catches errors early
- ✅ Component reusability
- ❌ Requires build step
- ❌ More complex setup

## Known Limitations

- No blog/CMS integration (static content only)
- No image optimization (static export)
- No API routes (static site)
- Contact form would require external service (Formspree, etc.)

## Future Enhancement Ideas

- Add MDX for project case studies as separate pages
- Implement dark/light mode toggle
- Add animation library (Framer Motion) for page transitions
- Create separate pages for each project with routing
- Add analytics (Vercel Analytics, Google Analytics)
- Implement contact form with Formspree or similar service
