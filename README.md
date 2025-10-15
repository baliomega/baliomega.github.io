# Nurul Izwan Dahlan - Portfolio Website

A modern, accessible portfolio website showcasing design systems expertise, built with Next.js, React, TypeScript, and Tailwind CSS featuring a Stripe-inspired design aesthetic.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript for type safety and performance
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Stripe-Inspired Design**: Clean, professional aesthetic with gradient backgrounds and glassmorphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices with mobile-first approach
- **WCAG 2.2 AA Compliant**: Achieves 95%+ accessibility compliance with:
  - Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`)
  - ARIA attributes for screen readers
  - Focus trap in modals with keyboard navigation
  - Skip navigation link for keyboard users
  - Enhanced focus visible styles
  - Proper color contrast ratios
  - 44×44px minimum touch target sizes
- **Google Analytics**: Integrated GA4 tracking for visitor analytics
- **SEO Optimized**: Comprehensive SEO implementation with:
  - Open Graph tags for social media sharing
  - Twitter Card metadata
  - Structured data (JSON-LD) with schema.org Person markup
  - robots.txt and sitemap.xml
  - Canonical URLs and meta descriptions
  - Google Search Console integration
- **Interactive Elements**:
  - Project cards with keyboard support (Enter/Space to activate)
  - Modal case studies with full accessibility
  - Smooth scroll behavior
  - Body scroll lock when modal is open
- **Automated Deployment**: GitHub Actions workflow for continuous deployment to GitHub Pages
- **Static Export**: Optimized for static site generation with Next.js `output: 'export'`

## 📋 Prerequisites

- Node.js 20 or later
- npm package manager
- GitHub account for deployment

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/baliomega/baliomega.github.io.git
   cd baliomega.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

This generates a static export in the `out/` directory, ready for deployment.

## 📦 Deployment

### GitHub Pages (Automated)

The repository is configured with GitHub Actions for automatic deployment:

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **GitHub Actions will automatically**:
   - Install dependencies
   - Build the Next.js site
   - Export static files to `out/` directory
   - Deploy to GitHub Pages

3. **Enable GitHub Pages** (first time only):
   - Go to repository Settings → Pages
   - Under "Build and deployment", select **"GitHub Actions"**
   - Your site will be live at `https://baliomega.github.io`

The workflow file is located at `.github/workflows/deploy.yml`.

## 📁 Project Structure

```
baliomega.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata & Google Analytics
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles, focus styles, sr-only utility
│   └── components/
│       └── Portfolio-Stripe.tsx # Main portfolio component with accessibility
├── public/
│   ├── favicon.ico             # Legacy browser favicon
│   ├── favicon.svg             # Modern browser favicon (vector)
│   ├── favicon.png             # Favicon source file
│   ├── apple-touch-icon.png    # iOS home screen icon
│   ├── og-image.png            # Open Graph image (1200x630px)
│   ├── og-image-square.png     # Square OG image (1200x1200px)
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # XML sitemap for SEO
├── .nojekyll                   # Disable Jekyll processing for GitHub Pages
├── next.config.ts              # Next.js config with static export
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```

## 🎨 Customization

### Update Content

Edit `/src/components/Portfolio-Stripe.tsx`:

**Projects** (lines 107-141):
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Project Category",
    year: "2024",
    description: "Brief description",
    challenge: "The challenge you faced",
    solution: "How you solved it",
    impact: "The results and impact",
    color: "from-stripe-blue-500 to-stripe-purple-500"
  },
  // Add more projects...
]
```

**Experience** (lines 143-149):
```typescript
const experience: Experience[] = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "Aug 2023 - Present",
    desc: "Brief description"
  },
  // Add more experiences...
]
```

**Tools & Expertise** (lines 151-158):
```typescript
const tools = [
  {
    name: "Tool Name",
    category: "Category",
    icon: IconName, // from lucide-react
    items: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
  },
  // Add more tools...
]
```

### Google Analytics

Update GA4 Measurement ID in `/src/app/layout.tsx` (line 102):
```typescript
gtag('config', 'G-YOUR-MEASUREMENT-ID');
```

### SEO Configuration

**Google Search Console Verification:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://baliomega.github.io`
3. Get verification code
4. Update `/src/app/layout.tsx` (line 53):
```typescript
verification: {
  google: 'your-verification-code',
},
```

**Open Graph Image:**

Social sharing images are included:
- ✅ `/public/og-image.png` - 1200×630px (Facebook, LinkedIn, Twitter)
- ✅ `/public/og-image-square.png` - 1200×1200px (alternative format)

**Favicon Files:**

Multiple favicon formats for broad compatibility:
- ✅ `/public/favicon.svg` - Vector format (modern browsers)
- ✅ `/public/favicon.ico` - Legacy format (older browsers)
- ✅ `/public/apple-touch-icon.png` - iOS home screen icon

**Test SEO & Social Sharing:**
- **Google Rich Results**: https://search.google.com/test/rich-results
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/

### Design Customization

**Colors**: The site uses a blue-purple-teal gradient theme:
- Primary: `blue-600`, `purple-600`, `teal-600`
- Backgrounds: `slate-50`, `slate-100`
- Text: `slate-900`, `slate-600`

**Typography**: Using Inter font (loaded in `layout.tsx`). Change by importing a different Google Font.

**Accessibility**: Focus styles are defined in `/src/app/globals.css` (lines 17-33)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Create production build and static export |
| `npm run start` | Start production server (for testing) |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Key Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with static export
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

## ♿ Accessibility Features

### WCAG 2.2 AA Compliance (~95%)

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, `<section>` landmarks
- **ARIA Attributes**:
  - `role="dialog"` and `aria-modal="true"` for modals
  - `aria-labelledby` linking sections to headings
  - `aria-label` for interactive elements
  - `aria-hidden` to hide background content when modal is open
- **Keyboard Navigation**:
  - Skip navigation link (press Tab on page load)
  - Project cards accessible via Enter/Space keys
  - Focus trap in modal dialogs
  - ESC key closes modals
  - Focus restoration when modal closes
- **Focus Management**:
  - Enhanced focus visible styles with blue ring
  - 2px ring with 2px offset for clear visibility
  - Focus not obscured by other elements (WCAG 2.4.11)
- **Touch Targets**: Minimum 44×44px for all interactive elements (WCAG 2.5.8)
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Screen Reader Support**: Descriptive labels and semantic structure

### Testing Recommendations

- **Keyboard**: Tab through entire page without mouse
- **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
- **Automated Testing**: Use axe DevTools browser extension
- **Color Contrast**: WebAIM Contrast Checker

## 🌟 Design Features

### Stripe-Inspired Aesthetic
- Clean, professional design with subtle gradients
- Glassmorphism effects with backdrop blur
- Gradient background orbs with blur effects
- Responsive gradient text with `bg-clip-text`
- Subtle shadows and hover effects
- Timeline design with alternating layout

### Interactive Components
- **Skip Navigation**: Hidden until keyboard focused
- **Project Cards**: Keyboard and mouse accessible with focus states
- **Modal System**:
  - Full WCAG 2.2 compliance
  - Focus trap implementation
  - Backdrop click to close
  - Body scroll lock
  - Icons for Challenge, Solution, Impact sections

### Responsive Design
Mobile-first approach with breakpoints:
- Mobile: < 768px (reduced padding, smaller gradients, left-aligned timeline)
- Tablet: 768px - 1024px
- Desktop: > 1024px (full layout, centered timeline, larger spacing)

## 🔍 SEO Features

### Meta Tags & Social Sharing
- ✅ Optimized title, description, and keywords
- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp, Slack)
- ✅ Twitter Card metadata with large image preview
- ✅ Open Graph images (1200×630px and 1200×1200px)
- ✅ Favicon support (SVG, ICO, PNG, Apple Touch Icon)
- ✅ Canonical URLs
- ✅ Robots meta directives

### Structured Data
- ✅ JSON-LD schema.org Person markup
- ✅ Job title and organization
- ✅ Social media profiles
- ✅ Skills and expertise

### SEO Files
- ✅ `/robots.txt` - Crawler directives
- ✅ `/sitemap.xml` - XML sitemap
- ✅ Google Search Console integration

### Performance
- ✅ Static site generation (SSG)
- ✅ Optimized images
- ✅ Semantic HTML structure
- ✅ Fast page load times

## 📧 Contact

**Nurul Izwan Dahlan**
- Portfolio: [baliomega.github.io](https://baliomega.github.io)
- Email: nurul.izwan.dahlan@gmail.com
- LinkedIn: [linkedin.com/in/baliomega](https://linkedin.com/in/baliomega)
- GitHub: [@baliomega](https://github.com/baliomega)

## 📝 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
