'use client'

import { useState, useEffect } from 'react'
import { Mail, Linkedin, Github, X, ArrowRight, Check, Palette, Code2, Layout, Zap, AlertCircle, Lightbulb, TrendingUp, Settings, Boxes, Eye, Sparkles, Puzzle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useCounterAnimation } from '@/hooks/useCounterAnimation'

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

  // Focus trap for modal
  useEffect(() => {
    if (!selectedProject) return

    const modal = document.querySelector('[role="dialog"]')
    if (!modal) return

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Store previously focused element
    const previouslyFocused = document.activeElement as HTMLElement

    // Focus first element
    setTimeout(() => firstElement?.focus(), 0)

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleTab as EventListener)

    return () => {
      modal.removeEventListener('keydown', handleTab as EventListener)
      // Restore focus when modal closes
      previouslyFocused?.focus()
    }
  }, [selectedProject])

  // Hide background content from screen readers
  useEffect(() => {
    const mainContent = document.getElementById('portfolio-content')

    if (selectedProject) {
      mainContent?.setAttribute('aria-hidden', 'true')
    } else {
      mainContent?.removeAttribute('aria-hidden')
    }
  }, [selectedProject])

  // Scroll animations
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const statsAnimation = useScrollAnimation({ threshold: 0.3 })
  const projectsAnimation = useScrollAnimation({ threshold: 0.1 })
  const aboutAnimation = useScrollAnimation({ threshold: 0.2 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const experienceAnimation = useScrollAnimation({ threshold: 0.1 })
  const contactAnimation = useScrollAnimation({ threshold: 0.2 })

  // Animated counters for stats
  const tokensCount = useCounterAnimation({ end: 1000, isVisible: statsAnimation.isVisible })
  const syncCount = useCounterAnimation({ end: 85, isVisible: statsAnimation.isVisible })
  const parityCount = useCounterAnimation({ end: 100, isVisible: statsAnimation.isVisible })
  const componentsCount = useCounterAnimation({ end: 50, isVisible: statsAnimation.isVisible })

  const projects: Project[] = [
    {
      id: 1,
      title: "Design Tokens Automation System",
      category: "Design Tokens & Automation",
      year: "2024",
      description: "Enterprise-scale design tokens architecture using Figma Variables with automated code generation pipeline.",
      challenge: "Manually syncing design decisions across Figma and multiple codebases led to inconsistencies and 40+ hours/month of maintenance. Teams struggled with implementing dark mode and accessibility modes (high contrast mode, color blind mode) without a systematic approach.",
      solution: "Built automated token pipeline using Figma Variables, Style Dictionary, and CI/CD integration. Created 1000+ semantic tokens with accessibility mode variants, generating platform-specific code (CSS, SCSS, JS, iOS, Android) from single source of truth.",
      impact: "Reduced design-to-code sync time by 85%, enabled instant theme switching between light/dark modes and accessibility variants, eliminated visual inconsistencies, and empowered developers to implement designs without designer handoff.",
      color: "from-stripe-blue-500 to-stripe-purple-500"
    },
    {
      id: 2,
      title: "Component Library with Token Integration",
      category: "Component Library",
      year: "2025",
      description: "Production-ready component library with 50+ components built on design tokens foundation.",
      challenge: "Creating a unified design language for 50+ enterprise screens while maintaining flexibility for different product needs and ensuring perfect Figma-to-code parity.",
      solution: "Developed modular component library fully integrated with design tokens system. Every component consumes semantic tokens, ensuring automatic updates when tokens change. Implemented variant system in Figma that mirrors component props in code.",
      impact: "Reduced component development time by 60%, achieved 100% Figma-code consistency, reduced design QA time by 70%, and enabled 3 product teams to ship features 2x faster.",
      color: "from-stripe-purple-500 to-stripe-teal-500"
    },
    {
      id: 3,
      title: "Multi-Platform Design System Scaling",
      category: "Enterprise Platform",
      year: "2025",
      description: "Cross-platform design system architecture serving web, iOS, Android, and React Native applications.",
      challenge: "Maintaining design consistency across 4 platforms with different technical constraints while keeping Figma libraries and codebases synchronized. Platform-specific implementations created divergence.",
      solution: "Created platform-agnostic token architecture with platform-specific transforms. Built automated documentation site with live component previews. Established shared Figma component library with platform variants linked to respective codebases.",
      impact: "Unified 4 platform teams under single design system, reduced platform inconsistencies by 90%, decreased time-to-market for new features by 45%, and enabled simultaneous multi-platform releases.",
      color: "from-stripe-teal-500 to-stripe-blue-600"
    }
  ]

  const experience: Experience[] = [
    { role: "Design System Designer", company: "PETRONAS Digital", period: "Aug 2023 - Present", desc: "Develop & maintain Emerald HUE design systems, bridging design to code with AI integration" },
    { role: "Senior Design Consultant", company: "Seetru Studio", period: "Mar - Aug 2023", desc: "Enhanced PETRONAS upstream dashboard, developed Bursa Gold Dinar website" },
    { role: "Senior UI/UX Designer", company: "Orius Digital", period: "Jan - Mar 2023", desc: "Designed Maybank sustainability credit card onboarding with carbon tracking" },
    { role: "Freelance UI/UX Designer", company: "99designs", period: "Jul 2022 - Aug 2023", desc: "Redesigned Wise's SWIFT checker, multiple contest wins" },
    { role: "Web Developer", company: "Axiata Digital & Analytics", period: "Dec 2019 - Jun 2022", desc: "Designed & developed Axiata Annual Report, Boost e-Wallet campaigns" }
  ]

  const tools = [
    { name: "Figma Variables", category: "Design Foundation", icon: Palette, items: ["Color, typography, spacing tokens", "Accessibility modes (high contrast & color blind)", "Semantic token hierarchies", "Variable scoping & aliasing"] },
    { name: "Design Tokens", category: "Automation", icon: Settings, items: ["Style Dictionary pipelines", "JSON/YAML token schemas", "Platform transforms (CSS, iOS, Android)", "Automated documentation"] },
    { name: "Component Libraries", category: "Development", icon: Boxes, items: ["React, Vue, Web Components", "Storybook documentation", "Figma-to-code sync workflows", "TypeScript prop interfaces"] },
    { name: "Digital Accessibility", category: "Inclusive Design", icon: Eye, items: ["WCAG 2.1 AA/AAA compliance", "ARIA patterns & semantic HTML", "Keyboard navigation & focus management", "Color contrast & screen reader testing"] },
    { name: "AI-Powered Workflow", category: "AI Integration", icon: Sparkles, items: ["Claude Code for automation", "Figma Dev Mode MCP Server", "Gemini for art & image generation", "ChatGPT & Claude for research and content creation"] },
    { name: "Figma Plugins & API", category: "Figma Ecosystem", icon: Puzzle, items: ["Figma REST & Plugin API", "Custom plugin development", "Automated design exports", "Token sync automation"] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
      >
        Skip to main content
      </a>

      <div id="portfolio-content">
        {/* Hero Section */}
        <header>
          <section id="hero" className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-32" aria-label="Introduction">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-500 via-blue-500 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-teal-500 via-blue-500 to-transparent rounded-full blur-3xl opacity-50"></div>

        <div ref={heroAnimation.ref} className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all ${
              heroAnimation.isVisible ? 'animate-fadeIn' : 'animate-on-scroll'
            }`}>
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 to-blue-100/80"></div>
              <div className="absolute inset-0 border border-purple-300/50 rounded-full"></div>
              <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] rounded-full"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-sm -z-10 rounded-full"></div>
              <Check className="relative w-4 h-4 text-purple-600 z-10" />
              <span className="relative text-purple-700 z-10">Available for projects</span>
            </div>

            <h1 className={`text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight ${
              heroAnimation.isVisible ? 'animate-fadeInUp delay-200' : 'animate-on-scroll'
            }`}>
              Bridging design and code with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                design tokens
              </span>
            </h1>

            <p className={`text-lg lg:text-xl text-slate-600 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed ${
              heroAnimation.isVisible ? 'animate-fadeInUp delay-500' : 'animate-on-scroll'
            }`}>
              Expert in Figma Variables, design tokens, and building scalable design systems that developers love to use.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      button_name: 'view_work',
                      button_location: 'hero',
                      link_url: '#projects'
                    });
                  }
                }}
                className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105 ${
                  heroAnimation.isVisible ? 'animate-scaleIn delay-800' : 'animate-on-scroll'
                }`}
              >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-purple-600/90"></div>
                <div className="absolute inset-0 border border-white/30 rounded-2xl"></div>
                <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] rounded-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-sm -z-10 rounded-2xl"></div>
                <span className="relative text-white z-10">View work</span>
                <ArrowRight className="relative w-5 h-5 text-white z-10" />
              </a>
              <a
                href="#contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      button_name: 'get_in_touch',
                      button_location: 'hero',
                      link_url: '#contact'
                    });
                  }
                }}
                className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg shadow-slate-500/20 hover:shadow-xl hover:shadow-slate-500/30 transition-all hover:scale-105 ${
                  heroAnimation.isVisible ? 'animate-scaleIn delay-800' : 'animate-on-scroll'
                }`}
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-slate-100/30"></div>
                <div className="absolute inset-0 border border-white/50 rounded-2xl"></div>
                <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] rounded-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-400/20 to-blue-400/20 blur-sm -z-10 rounded-2xl"></div>
                <span className="relative text-slate-900 z-10">Get in touch</span>
              </a>
            </div>

            {/* Stats */}
            <div ref={statsAnimation.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 lg:mt-20 max-w-4xl mx-auto">
              <div className={`text-center ${statsAnimation.isVisible ? 'animate-fadeInUp' : 'animate-on-scroll'}`}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {tokensCount}+
                </div>
                <div className="text-slate-600 font-medium">Design Tokens</div>
              </div>
              <div className={`text-center ${statsAnimation.isVisible ? 'animate-fadeInUp delay-100' : 'animate-on-scroll'}`}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {syncCount}%
                </div>
                <div className="text-slate-600 font-medium">Faster Sync</div>
              </div>
              <div className={`text-center ${statsAnimation.isVisible ? 'animate-fadeInUp delay-200' : 'animate-on-scroll'}`}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {parityCount}%
                </div>
                <div className="text-slate-600 font-medium">Figma-Code Parity</div>
              </div>
              <div className={`text-center ${statsAnimation.isVisible ? 'animate-fadeInUp delay-300' : 'animate-on-scroll'}`}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {componentsCount}+
                </div>
                <div className="text-slate-600 font-medium">Components Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </header>

      {/* Projects Section */}
      <main id="main-content">
      <section ref={projectsAnimation.ref} id="projects" className="py-12 lg:py-24 bg-gradient-to-b from-white to-slate-50" aria-labelledby="projects-heading">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`text-center mb-8 lg:mb-16 ${projectsAnimation.isVisible ? 'animate-fadeIn' : 'animate-on-scroll'}`}>
            <h2 id="projects-heading" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 lg:mb-4">Featured Work</h2>
            <p className="text-lg lg:text-xl text-slate-600">Real-world design systems that scale</p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedProject(project)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                  projectsAnimation.isVisible ? `animate-fadeInUp delay-${idx * 100 + 100}` : 'animate-on-scroll'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-2 lg:gap-8">
                  <div className="p-8 lg:p-10">
                    <div className="mb-6">
                      <div className="inline-block text-sm font-semibold text-blue-600 mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <span className="text-slate-500 font-medium text-sm">{project.year}</span>
                    </div>

                    <p className="text-lg text-slate-600 mb-6">{project.description}</p>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>View case study</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10"></div>
                    <div className="relative z-10 text-center p-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Layout className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-sm text-slate-600 font-medium">Project Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutAnimation.ref} id="about" className="py-12 lg:py-24 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className={`${aboutAnimation.isVisible ? 'animate-slideInLeft' : 'animate-on-scroll'}`}>
              <h2 id="about-heading" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Transforming design into production-ready code
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Highly skilled UI/UX Designer and Front-End Developer with a proven track record of crafting exceptional user experiences across web and mobile platforms. Currently serving as Design System Designer at PETRONAS Digital, I maintain the Emerald HUE design systems while bridging the gap between design and code.
                </p>
                <p>
                  I specialize in <strong className="text-slate-900">Figma Variables</strong> and <strong className="text-slate-900">design tokens</strong>, building automated pipelines that transform design decisions into platform-specific code. My systems eliminate manual handoffs and reduce inconsistencies by 90%.
                </p>
                <p>
                  With expertise spanning from design systems to front-end development, I integrate creative design principles with technical expertise to deliver visually appealing and intuitive interfaces. I actively explore and integrate AI tools to streamline design processes and enhance team efficiency.
                </p>
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-4 ${aboutAnimation.isVisible ? 'animate-slideInRight' : 'animate-on-scroll'}`}>
              <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 ${aboutAnimation.isVisible ? 'animate-scaleIn delay-100' : ''}`}>
                <Palette className="w-12 h-12 text-blue-600 mb-3" />
                <div className="text-sm font-semibold text-blue-600 mb-2">Design Foundation</div>
                <div className="font-bold text-slate-900 text-lg">Figma Variables</div>
              </div>
              <div className={`bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 ${aboutAnimation.isVisible ? 'animate-scaleIn delay-200' : ''}`}>
                <Code2 className="w-12 h-12 text-purple-600 mb-3" />
                <div className="text-sm font-semibold text-purple-600 mb-2">Code Translation</div>
                <div className="font-bold text-slate-900 text-lg">Design Tokens</div>
              </div>
              <div className={`bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 ${aboutAnimation.isVisible ? 'animate-scaleIn delay-300' : ''}`}>
                <Layout className="w-12 h-12 text-teal-600 mb-3" />
                <div className="text-sm font-semibold text-teal-600 mb-2">Component Systems</div>
                <div className="font-bold text-slate-900 text-lg">React Libraries</div>
              </div>
              <div className={`bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 ${aboutAnimation.isVisible ? 'animate-scaleIn delay-400' : ''}`}>
                <Zap className="w-12 h-12 text-orange-600 mb-3" />
                <div className="text-sm font-semibold text-orange-600 mb-2">Automation</div>
                <div className="font-bold text-slate-900 text-lg">Style Dictionary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Expertise Section */}
      <section ref={toolsAnimation.ref} id="tools" className="py-12 lg:py-24 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="tools-heading">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`text-center mb-8 lg:mb-16 ${toolsAnimation.isVisible ? 'animate-fadeIn' : 'animate-on-scroll'}`}>
            <h2 id="tools-heading" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 lg:mb-4">Tools & Expertise</h2>
            <p className="text-lg lg:text-xl text-slate-600">Full-stack design systems capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon
              return (
              <div
                key={idx}
                className={`bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all ${
                  toolsAnimation.isVisible ? `animate-fadeInUp delay-${idx * 100}` : 'animate-on-scroll'
                }`}
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-sm font-semibold text-blue-600 mb-2">{tool.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tool.name}</h3>
                <ul className="space-y-2">
                  {tool.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <Check className="w-5 h-5 text-stripe-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-200"></div>

      {/* Experience Section */}
      <section ref={experienceAnimation.ref} id="experience" className="pt-12 pb-0 lg:pt-24 bg-white" aria-labelledby="experience-heading">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className={`text-center mb-6 lg:mb-8 ${experienceAnimation.isVisible ? 'animate-fadeIn' : 'animate-on-scroll'}`}>
            <h2 id="experience-heading" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 lg:mb-4">Experience</h2>
            <p className="text-lg lg:text-xl text-slate-600">Building design systems at scale</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line - left on mobile, centered on desktop */}
            <div className="absolute left-0 lg:left-1/2 lg:-ml-px top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200"></div>

            <div className="space-y-6 pb-12 lg:-space-y-12 lg:pt-12 lg:pb-24 pl-8 lg:pl-0">
              {experience.map((exp, idx) => (
                <div key={idx} className={`relative ${idx % 2 === 0 ? 'lg:pr-[50%] lg:pl-0' : 'lg:pl-[50%] lg:pr-0'}`}>
                  {/* Horizontal connecting line */}
                  <div className={`absolute top-[36px] -left-[32px] w-8 h-px bg-slate-200 z-0 lg:left-auto lg:w-8 ${idx % 2 === 0 ? 'lg:right-[50%]' : 'lg:left-[50%]'}`}></div>

                  {/* Timeline dot - left on mobile, centered on desktop */}
                  <div className={`absolute top-8 -left-[36px] w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white shadow-md z-10 lg:left-auto ${idx % 2 === 0 ? 'lg:right-[calc(50%-5px)]' : 'lg:left-[calc(50%-5px)]'}`}></div>

                  <div className={`bg-gradient-to-r from-white to-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all ${idx % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} ${
                    experienceAnimation.isVisible ? (idx % 2 === 0 ? `animate-slideInLeft delay-${idx * 100}` : `animate-slideInRight delay-${idx * 100}`) : 'animate-on-scroll'
                  }`}>
                    <div className="mb-4">
                      <div className="text-blue-600 font-semibold text-sm mb-2">{exp.company}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                      <div className="text-slate-600 text-sm">{exp.period}</div>
                    </div>
                    <p className="text-slate-600">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Contact Section */}
      <footer>
      <section ref={contactAnimation.ref} id="contact" className="py-12 lg:py-24 bg-gradient-to-br from-blue-200 via-purple-200 to-teal-200" aria-labelledby="contact-heading">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`${contactAnimation.isVisible ? 'animate-fadeIn' : 'animate-on-scroll'}`}>
              <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Let&apos;s build something great together
              </h2>
              <p className="text-xl text-slate-600 mb-12">
                Looking for a design systems specialist who can bridge design and code? I&apos;m available for projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a
                href="mailto:baliomega@gmail.com"
                className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg shadow-slate-500/20 hover:shadow-xl hover:shadow-slate-500/30 transition-all hover:scale-105 ${
                  contactAnimation.isVisible ? 'animate-scaleIn delay-100' : 'animate-on-scroll'
                }`}
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-slate-100/30"></div>
                <div className="absolute inset-0 border border-white/50 rounded-2xl"></div>
                <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] rounded-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-400/20 to-blue-400/20 blur-sm -z-10 rounded-2xl"></div>
                <Mail className="relative w-5 h-5 text-slate-900 z-10" />
                <span className="relative text-slate-900 z-10">Email me</span>
              </a>
              <a
                href="https://linkedin.com/in/baliomega"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg shadow-slate-500/20 hover:shadow-xl hover:shadow-slate-500/30 transition-all hover:scale-105 ${
                  contactAnimation.isVisible ? 'animate-scaleIn delay-200' : 'animate-on-scroll'
                }`}
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-slate-100/30"></div>
                <div className="absolute inset-0 border border-white/50 rounded-2xl"></div>
                <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] rounded-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-400/20 to-blue-400/20 blur-sm -z-10 rounded-2xl"></div>
                <Linkedin className="relative w-5 h-5 text-slate-900 z-10" />
                <span className="relative text-slate-900 z-10">LinkedIn</span>
              </a>
              <a
                href="https://github.com/baliomega"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg shadow-slate-500/20 hover:shadow-xl hover:shadow-slate-500/30 transition-all hover:scale-105 ${
                  contactAnimation.isVisible ? 'animate-scaleIn delay-300' : 'animate-on-scroll'
                }`}
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-slate-100/30"></div>
                <div className="absolute inset-0 border border-white/50 rounded-2xl"></div>
                <div className="absolute inset-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] rounded-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-400/20 to-blue-400/20 blur-sm -z-10 rounded-2xl"></div>
                <Github className="relative w-5 h-5 text-slate-900 z-10" />
                <span className="relative text-slate-900 z-10">GitHub</span>
              </a>
            </div>

            <div className={`text-sm text-slate-500 ${contactAnimation.isVisible ? 'animate-fadeIn delay-400' : 'animate-on-scroll'}`}>
              © 2025 Nurul Izwan Dahlan. Design Systems Specialist.
            </div>
          </div>
        </div>
      </section>
      </footer>
      </div>

      {/* Modal remains similar but with updated styling */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-start">
              <div>
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {selectedProject.category}
                </div>
                <h3 id="modal-title" className="text-3xl font-bold text-slate-900">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 hover:bg-slate-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close project details"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-900">Challenge</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                  <h4 className="text-xl font-bold text-purple-900">Solution</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <h4 className="text-xl font-bold text-teal-900">Impact</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">{selectedProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
