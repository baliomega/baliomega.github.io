'use client'

import { useState, useEffect } from 'react'
import { Mail, Linkedin, Github, X, ArrowRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  challenge: string
  solution: string
  impact: string
  color: string
}

interface Experience {
  role: string
  company: string
  period: string
  desc: string
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedProject])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects: Project[] = [
    {
      id: 1,
      title: "Design Token Pipeline & Figma Variables System",
      category: "Design Systems Infrastructure",
      year: "2024",
      description: "Enterprise-scale design token architecture using Figma Variables with automated code generation pipeline.",
      challenge: "Manually syncing design decisions across Figma and multiple codebases led to inconsistencies and 40+ hours/month of maintenance. Teams struggled with theming and dark mode implementation.",
      solution: "Built automated token pipeline using Figma Variables, Style Dictionary, and CI/CD integration. Created 500+ semantic tokens with multi-brand theming support, generating platform-specific code (CSS, SCSS, JS, iOS, Android) from single source of truth.",
      impact: "Reduced design-to-code sync time by 85%, enabled instant theme switching, eliminated visual inconsistencies across 8 products, and empowered developers to implement designs without designer handoff.",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      title: "Component Library with Token Integration",
      category: "Design System",
      year: "2024",
      description: "Production-ready component library with 120+ components built on design token foundation.",
      challenge: "Creating a unified design language for 50+ enterprise screens while maintaining flexibility for different product needs and ensuring perfect Figma-to-code parity.",
      solution: "Developed modular component library fully integrated with design token system. Every component consumes semantic tokens, ensuring automatic updates when tokens change. Implemented variant system in Figma that mirrors component props in code.",
      impact: "Reduced component development time by 60%, achieved 100% Figma-code consistency, reduced design QA time by 70%, and enabled 3 product teams to ship features 2x faster.",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Multi-Platform Design System Scaling",
      category: "Enterprise Platform",
      year: "2023",
      description: "Cross-platform design system architecture serving web, iOS, Android, and React Native applications.",
      challenge: "Maintaining design consistency across 4 platforms with different technical constraints while keeping Figma libraries and codebases synchronized. Platform-specific implementations created divergence.",
      solution: "Created platform-agnostic token architecture with platform-specific transforms. Built automated documentation site with live component previews. Established shared Figma component library with platform variants linked to respective codebases.",
      impact: "Unified 4 platform teams under single design system, reduced platform inconsistencies by 90%, decreased time-to-market for new features by 45%, and enabled simultaneous multi-platform releases.",
      color: "from-blue-500 to-cyan-600"
    }
  ]

  const experience: Experience[] = [
    { role: "Design System Designer", company: "Petronas Digital", period: "Aug 2023 - Present", desc: "Develop & maintain Emerald HUE design systems, bridging design to code with AI integration" },
    { role: "Senior Design Consultant", company: "Seetru Studio", period: "Mar - Aug 2023", desc: "Enhanced PETRONAS upstream dashboard, developed Bursa Gold Dinar website" },
    { role: "Senior UI/UX Designer", company: "Orius Digital", period: "Jan - Mar 2023", desc: "Designed Maybank sustainability credit card onboarding with carbon tracking" },
    { role: "Freelance UI/UX Designer", company: "99designs", period: "Jul 2022 - Aug 2023", desc: "Redesigned Wise's SWIFT checker, multiple contest wins" },
    { role: "Web Developer", company: "Axiata Digital & Analytics", period: "Dec 2019 - Jun 2022", desc: "Designed & developed Axiata Annual Report, Boost e-Wallet campaigns" }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Floating Navigation Dots */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4" aria-label="Page navigation">
        <a href="#hero" className="w-3 h-3 rounded-full bg-amber-500 hover:scale-150 transition-transform" aria-label="Navigate to hero section" />
        <a href="#about" className="w-3 h-3 rounded-full bg-gray-600 hover:bg-amber-500 hover:scale-150 transition-all" aria-label="Navigate to about section" />
        <a href="#tools" className="w-3 h-3 rounded-full bg-gray-600 hover:bg-amber-500 hover:scale-150 transition-all" aria-label="Navigate to tools section" />
        <a href="#projects" className="w-3 h-3 rounded-full bg-gray-600 hover:bg-amber-500 hover:scale-150 transition-all" aria-label="Navigate to projects section" />
        <a href="#contact" className="w-3 h-3 rounded-full bg-gray-600 hover:bg-amber-500 hover:scale-150 transition-all" aria-label="Navigate to contact section" />
      </nav>

      {/* Hero Section - Diagonal Split */}
      <section id="hero" className="min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/10 via-transparent to-orange-600/10"></div>
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Diagonal Stripe */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-full h-[200%] bg-gradient-to-br from-amber-500/5 to-transparent rotate-12 transform"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 pt-32 pb-20">
          {/* Name Tag - Rotated */}
          <div className="absolute top-24 right-12 transform rotate-3">
            <div className="bg-amber-500 text-black px-6 py-3 font-bold text-sm tracking-wider">
              AVAILABLE FOR PROJECTS
            </div>
          </div>

          {/* Main Title - Off-Grid */}
          <div className="mt-20 ml-12">
            <div className="inline-block -rotate-2 mb-8">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-4 py-1 text-sm font-bold tracking-widest">
                DESIGN SYSTEMS SPECIALIST
              </div>
            </div>

            <h1 className="text-8xl font-black leading-none mb-6">
              <span className="block text-white">BRIDGING</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 transform translate-x-12">
                DESIGN
              </span>
              <span className="block text-white/40 text-6xl transform translate-x-24">
                TO CODE
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl ml-24 mb-8">
              Expert in Figma Variables, Design Tokens, and building scalable design systems that developers love to use.
            </p>

            <div className="flex gap-6 mt-12 ml-24">
              <a href="#projects" className="group relative">
                <div className="absolute inset-0 bg-amber-500 blur group-hover:blur-xl transition-all"></div>
                <div className="relative bg-amber-500 text-black px-8 py-4 font-bold flex items-center gap-2 hover:transform hover:scale-105 transition-transform">
                  VIEW WORK <ArrowRight size={20} />
                </div>
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-all transform hover:-rotate-2">
                CONTACT
              </a>
            </div>
          </div>

          {/* Stats Cards - Vertically Centered */}
          <div className="absolute top-1/2 -translate-y-24 right-32 flex flex-col gap-8 hidden xl:flex">
            <div className="bg-gray-900 border-4 border-amber-500 p-8 w-72 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="text-7xl font-black text-amber-500">500+</div>
              <div className="text-gray-300 font-bold text-lg mt-2">DESIGN TOKENS</div>
            </div>

            <div className="bg-gray-900 border-4 border-orange-500 p-8 w-72 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="text-7xl font-black text-orange-500">85%</div>
              <div className="text-gray-300 font-bold text-lg mt-2">FASTER SYNC</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Broken Grid */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-8 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 relative">
              {/* Code Illustration Background - Behind Tags */}
              <div className="absolute bottom-0 left-0 w-full h-80 pointer-events-none overflow-hidden z-0">
                <pre className="text-amber-500 opacity-30 text-base lg:text-lg font-mono leading-relaxed">
{`const tokens = {
  colors: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      500: '#f59e0b',
      900: '#78350f'
    },
    semantic: {
      background: 'var(--color-primary-900)',
      text: 'var(--color-primary-50)',
      accent: 'var(--color-primary-500)'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui',
      mono: 'Fira Code, monospace'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem'
    }
  }
};

// Figma Variables Export
export const figmaVariables = {
  mode: 'light',
  collection: 'emerald-hue',
  tokens: transformTokens(tokens)
};`}
                </pre>
              </div>
              <div className="transform -rotate-1">
                <h2 className="text-5xl lg:text-6xl font-black mb-4">
                  <span className="text-amber-500">CRAFTING</span>
                  <br />
                  <span className="text-white">SCALABLE</span>
                  <br />
                  <span className="text-white/40">EXPERIENCES</span>
                </h2>
              </div>

              <div className="bg-gray-900 border-l-4 border-amber-500 p-6 lg:p-8 transform rotate-1 lg:ml-12">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-4">
                  I bridge the gap between design and code with expertise in <strong className="text-amber-400">Figma Variables</strong> and <strong className="text-amber-400">design tokens</strong>.
                  My systems translate seamlessly from design tools to production code, ensuring pixel-perfect consistency.
                </p>
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                  Specializing in design systems for enterprise applications where consistency, scalability, and developer experience are critical.
                </p>
              </div>

              {/* Technical Skills - Scattered */}
              <div className="flex flex-wrap gap-3 lg:gap-4 lg:ml-8 relative z-10">
                <span className="bg-amber-500/20 border-2 border-amber-500 text-amber-400 px-4 lg:px-6 py-2 font-bold text-sm transform -rotate-2">
                  FIGMA VARIABLES
                </span>
                <span className="bg-orange-500/20 border-2 border-orange-500 text-orange-400 px-4 lg:px-6 py-2 font-bold text-sm transform rotate-1">
                  DESIGN TOKENS
                </span>
                <span className="bg-red-500/20 border-2 border-red-500 text-red-400 px-4 lg:px-6 py-2 font-bold text-sm transform -rotate-1">
                  DESIGN SYSTEMS
                </span>
                <span className="bg-yellow-500/20 border-2 border-yellow-500 text-yellow-400 px-4 lg:px-6 py-2 font-bold text-sm transform rotate-2">
                  COMPONENT LIBRARIES
                </span>
                <span className="bg-purple-500/20 border-2 border-purple-500 text-purple-400 px-4 lg:px-6 py-2 font-bold text-sm transform -rotate-2">
                  FIGMA → CODE
                </span>
                <span className="bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 px-4 lg:px-6 py-2 font-bold text-sm transform rotate-1">
                  DESIGN-DEV HANDOFF
                </span>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div className="lg:col-span-5 space-y-4 lg:space-y-5">
              <div className="text-sm font-bold tracking-widest text-amber-500 mb-6">EXPERIENCE</div>

              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-5 lg:p-6 border-l-2 border-gray-700 hover:border-amber-500 transition-all transform hover:translate-x-2"
                  style={{ transform: `rotate(${idx % 2 === 0 ? '-0.5' : '0.5'}deg)` }}
                >
                  <div className="text-amber-500 text-xs font-bold tracking-wider">{exp.period}</div>
                  <div className="text-white font-bold text-base lg:text-lg mt-1">{exp.role}</div>
                  <div className="text-gray-400 text-sm">{exp.company}</div>
                  <div className="text-gray-500 text-xs lg:text-sm mt-2 line-clamp-2">{exp.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Expertise Section */}
      <section id="tools" className="py-32 bg-gradient-to-b from-black to-gray-900/50 relative">
        <div className="container mx-auto px-8">
          <div className="mb-16 text-center">
            <div className="text-sm font-bold tracking-widest text-amber-500 mb-4">TECHNICAL TOOLKIT</div>
            <h2 className="text-6xl font-black text-white mb-4">
              BRIDGING DESIGN & CODE
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert-level proficiency in tools and workflows that close the design-to-development gap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Figma Variables */}
            <div className="bg-gray-900 border-2 border-amber-500 p-8 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-amber-500 text-sm font-bold mb-2">DESIGN FOUNDATION</div>
              <h3 className="text-2xl font-black text-white mb-4">Figma Variables</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Color, typography, spacing modes</li>
                <li>• Multi-brand theming systems</li>
                <li>• Semantic token hierarchies</li>
                <li>• Variable scoping & aliasing</li>
              </ul>
            </div>

            {/* Design Tokens */}
            <div className="bg-gray-900 border-2 border-orange-500 p-8 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="text-orange-500 text-sm font-bold mb-2">AUTOMATION</div>
              <h3 className="text-2xl font-black text-white mb-4">Design Tokens</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Style Dictionary pipelines</li>
                <li>• JSON/YAML token schemas</li>
                <li>• Platform transforms (CSS, iOS, Android)</li>
                <li>• Automated documentation</li>
              </ul>
            </div>

            {/* Component Systems */}
            <div className="bg-gray-900 border-2 border-red-500 p-8 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-red-500 text-sm font-bold mb-2">DEVELOPMENT</div>
              <h3 className="text-2xl font-black text-white mb-4">Component Libraries</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React, Vue, Web Components</li>
                <li>• Storybook documentation</li>
                <li>• Figma-to-code sync workflows</li>
                <li>• TypeScript prop interfaces</li>
              </ul>
            </div>

            {/* Version Control */}
            <div className="bg-gray-900 border-2 border-yellow-500 p-8 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="text-yellow-500 text-sm font-bold mb-2">COLLABORATION</div>
              <h3 className="text-2xl font-black text-white mb-4">Version Control</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git workflows for design systems</li>
                <li>• CI/CD token deployment</li>
                <li>• Semantic versioning</li>
                <li>• Changelog automation</li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-gray-900 border-2 border-purple-500 p-8 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-purple-500 text-sm font-bold mb-2">KNOWLEDGE SHARING</div>
              <h3 className="text-2xl font-black text-white mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Design system sites (Docusaurus)</li>
                <li>• API documentation generation</li>
                <li>• Interactive examples</li>
                <li>• Migration guides</li>
              </ul>
            </div>

            {/* Testing */}
            <div className="bg-gray-900 border-2 border-cyan-500 p-8 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="text-cyan-500 text-sm font-bold mb-2">QUALITY ASSURANCE</div>
              <h3 className="text-2xl font-black text-white mb-4">Design QA</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Visual regression testing</li>
                <li>• Accessibility audits (WCAG)</li>
                <li>• Cross-browser validation</li>
                <li>• Token compliance checks</li>
              </ul>
            </div>

            {/* AI-Powered Workflow */}
            <div className="bg-gray-900 border-2 border-emerald-500 p-8 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-emerald-500 text-sm font-bold mb-2">AI-POWERED WORKFLOW</div>
              <h3 className="text-2xl font-black text-white mb-4">Advanced AI Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Figma Dev MCP Server integration</li>
                <li>• Claude Code for automation</li>
                <li>• AI-assisted design systems</li>
                <li>• Prompt engineering for design ops</li>
              </ul>
            </div>

            {/* Figma Plugins & APIs */}
            <div className="bg-gray-900 border-2 border-pink-500 p-8 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="text-pink-500 text-sm font-bold mb-2">FIGMA ECOSYSTEM</div>
              <h3 className="text-2xl font-black text-white mb-4">Plugins & API</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Figma REST & Plugin API</li>
                <li>• Custom plugin development</li>
                <li>• Automated design exports</li>
                <li>• Token sync automation</li>
              </ul>
            </div>

            {/* AI Assistants */}
            <div className="bg-gray-900 border-2 border-indigo-500 p-8 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="text-indigo-500 text-sm font-bold mb-2">AI PRODUCTIVITY</div>
              <h3 className="text-2xl font-black text-white mb-4">AI Coding Assistants</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Claude (Anthropic) for complex tasks</li>
                <li>• Gemini for code generation</li>
                <li>• Cursor for inline editing</li>
                <li>• GitHub Copilot integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Asymmetric Cards */}
      <section id="projects" className="py-32 bg-gray-900 relative">
        <div className="container mx-auto px-8">
          <div className="mb-20 ml-16 transform -rotate-1">
            <div className="text-sm font-bold tracking-widest text-amber-500 mb-4">FEATURED WORK</div>
            <h2 className="text-7xl font-black text-white">
              PROJECTS
            </h2>
          </div>

          {/* Asymmetric Project Grid */}
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`flex gap-8 items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{
                  marginLeft: idx % 2 === 0 ? '0' : '120px',
                  marginRight: idx % 2 === 0 ? '120px' : '0'
                }}
              >
                {/* Project Number */}
                <div className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br ${project.color} opacity-20`}>
                  0{idx + 1}
                </div>

                {/* Project Card */}
                <div
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex-1 bg-gray-900 border-2 border-gray-800 p-8 cursor-pointer transition-all transform hover:scale-105 ${
                    hoveredCard === project.id ? 'border-amber-500 rotate-0' : ''
                  }`}
                  style={{ 
                    transform: hoveredCard === project.id ? 'rotate(0deg) scale(1.05)' : `rotate(${idx % 2 === 0 ? '1' : '-1'}deg)` 
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className={`text-sm font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-bold text-white mt-2">{project.title}</h3>
                    </div>
                    <div className="text-gray-600 font-bold text-xl">{project.year}</div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  <div className="flex items-center gap-2 text-amber-500 font-bold group">
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Diagonal Layout */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="transform rotate-2 max-w-4xl mx-auto">
            <div className="bg-gray-900 border-4 border-amber-500 p-16">
              <h2 className="text-6xl font-black text-white mb-8">
                LET&apos;S BUILD<br />
                <span className="text-amber-500">SOMETHING</span><br />
                TOGETHER
              </h2>

              <p className="text-xl text-gray-300 mb-12">
                Open for freelance projects, consulting, or full-time opportunities in design systems and enterprise UX.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:designer@example.com"
                  className="flex items-center gap-6 bg-black/50 p-6 border-2 border-gray-800 hover:border-amber-500 transition-all transform hover:-rotate-1 group"
                >
                  <Mail className="text-amber-500" size={32} />
                  <div className="flex-1">
                    <div className="text-white font-bold text-xl group-hover:text-amber-500">EMAIL</div>
                    <div className="text-gray-400">designer@example.com</div>
                  </div>
                  <ArrowRight className="text-gray-600 group-hover:text-amber-500" size={24} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 bg-black/50 p-6 border-2 border-gray-800 hover:border-amber-500 transition-all transform hover:rotate-1 group"
                >
                  <Linkedin className="text-amber-500" size={32} />
                  <div className="flex-1">
                    <div className="text-white font-bold text-xl group-hover:text-amber-500">LINKEDIN</div>
                    <div className="text-gray-400">Professional network</div>
                  </div>
                  <ArrowRight className="text-gray-600 group-hover:text-amber-500" size={24} />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 bg-black/50 p-6 border-2 border-gray-800 hover:border-amber-500 transition-all transform hover:-rotate-1 group"
                >
                  <Github className="text-amber-500" size={32} />
                  <div className="flex-1">
                    <div className="text-white font-bold text-xl group-hover:text-amber-500">GITHUB</div>
                    <div className="text-gray-400">Design resources & code</div>
                  </div>
                  <ArrowRight className="text-gray-600 group-hover:text-amber-500" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-8">
          <div className="bg-gray-900 border-4 border-amber-500 max-w-5xl w-full max-h-[90vh] overflow-y-auto transform rotate-1">
            <div className="sticky top-0 bg-gray-900 border-b-2 border-amber-500 p-8 flex justify-between items-center z-10">
              <div>
                <div className={`text-sm font-bold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent mb-2`}>
                  {selectedProject.category} · {selectedProject.year}
                </div>
                <h3 className="text-4xl font-black text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 bg-black border-2 border-amber-500 hover:bg-amber-500 hover:text-black transition-all transform hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="bg-black/50 border-l-4 border-amber-500 p-8">
                <h4 className="text-2xl font-bold text-amber-500 mb-4">CHALLENGE</h4>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.challenge}</p>
              </div>
              
              <div className="bg-black/50 border-l-4 border-orange-500 p-8 transform -rotate-1">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">SOLUTION</h4>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.solution}</p>
              </div>
              
              <div className={`bg-gradient-to-br ${selectedProject.color} p-8 transform rotate-1`}>
                <h4 className="text-2xl font-bold text-black mb-4">IMPACT</h4>
                <p className="text-black text-lg leading-relaxed font-semibold">{selectedProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="fixed bottom-8 left-8 transform -rotate-6 pointer-events-none">
        <div className="bg-amber-500 text-black px-6 py-3 font-black text-sm tracking-wider">
          DESIGN SYSTEMS EXPERT
        </div>
      </div>
    </div>
  );
}