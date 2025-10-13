# Nurul Izwan Dahlan - Portfolio Website v3

A modern, responsive portfolio website showcasing UI/UX design work and design systems expertise. Built with Next.js, React, TypeScript, and Tailwind CSS featuring a bold, brutalist design aesthetic.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript for type safety and performance
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Brutalist Aesthetic**: Bold typography, asymmetric layouts, intentional rotations and offsets
- **Interactive Elements**:
  - Floating navigation dots with smooth scrolling
  - Project cards with hover effects and modal case studies
  - Keyboard-accessible modal system (Escape key to close)
  - Body scroll lock when modal is open
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Static Export**: Configured for static site generation, perfect for GitHub Pages deployment

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/baliomega.github.io-v3.git
   cd baliomega.github.io-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This generates a static export in the `out/` directory, ready for deployment.

## 📦 Deployment

### GitHub Pages

1. **Configure repository**: Ensure your repository is named `<username>.github.io`

2. **Build the site**:
   ```bash
   npm run build
   ```

3. **Deploy**: Push the `out/` directory contents to your repository's `gh-pages` branch or configure GitHub Actions for automatic deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/baliomega.github.io-v3)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## 📁 Project Structure

```
baliomega.github.io-v3/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles and Tailwind imports
│   └── components/
│       └── Portfolio.tsx       # Main portfolio component
├── public/                     # Static assets (images, fonts, etc.)
├── .gitignore
├── .eslintrc.json
├── next.config.ts              # Next.js configuration (static export)
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json
├── README.md
└── CLAUDE.md                   # Development guidance for AI assistants
```

## 🎨 Customization

### Update Content

Edit `/src/components/Portfolio.tsx`:

**Projects** (lines 53-85):
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
    color: "from-amber-500 to-orange-500" // Tailwind gradient classes
  },
  // Add more projects...
]
```

**Experience** (lines 87-91):
```typescript
const experience: Experience[] = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "2022 - Present",
    desc: "Brief description"
  },
  // Add more experiences...
]
```

**Contact Information** (lines 291-327):
- Update email address
- Update LinkedIn URL
- Update GitHub URL

### Design Customization

**Colors**: The site uses an amber/orange gradient theme. Update colors in:
- `/src/components/Portfolio.tsx`: Search for `amber-500`, `orange-500` etc.
- `/tailwind.config.ts`: Extend the theme with custom colors

**Typography**: Using Inter font (loaded in `layout.tsx`). Change by importing a different Google Font.

**Spacing & Layout**: Adjust Tailwind utility classes (e.g., `px-8`, `py-4`, `mt-12`)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Create production build and static export |
| `npm run start` | Start production server (for testing) |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Key Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with static export capability
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Icon library

## 🌟 Design Features

### Brutalist Aesthetic
- Bold, black typography with large font sizes (text-6xl to text-9xl)
- Intentional rotations (-6deg to 3deg) on elements
- Asymmetric layouts with offset positioning
- High contrast color scheme (black background, amber/orange accents)
- Border-heavy design (2-4px borders)

### Interactive Components
- **Floating Navigation**: Fixed position dots that change color on hover
- **Project Cards**: Hover effects with rotation and scale transforms
- **Modal System**: Full-screen project case study with:
  - Keyboard accessibility (ESC to close)
  - Click outside to close functionality
  - Body scroll lock
  - Animated entrance

### Responsive Breakpoints
Tailwind's default breakpoints are used:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

**Nurul Izwan Dahlan**
- Portfolio: [baliomega.github.io](https://baliomega.github.io)
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [@baliomega](https://github.com/baliomega)

---

**Note**: This is version 3 of the portfolio. Previous versions (v1 and v2) were built with vanilla HTML/CSS/JavaScript. V3 represents a modern rebuild with React and TypeScript for better maintainability and development experience.
