import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://baliomega.github.io'),
  title: 'Nurul Izwan Dahlan | Design Systems Specialist - Figma Variables & Design Tokens Expert',
  description: 'Bridging design to code with expertise in Figma Variables, design tokens, and automated design-to-development workflows. Building scalable design systems that developers love.',
  keywords: ['Figma Variables', 'Design Tokens', 'Design Systems', 'Design to Code', 'Component Libraries', 'Style Dictionary', 'UI/UX Designer', 'Design-Dev Handoff', 'WCAG Accessibility', 'React Components', 'Petronas Digital'],
  authors: [{ name: 'Nurul Izwan Dahlan' }],
  creator: 'Nurul Izwan Dahlan',
  publisher: 'Nurul Izwan Dahlan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baliomega.github.io',
    siteName: 'Nurul Izwan Dahlan - Portfolio',
    title: 'Nurul Izwan Dahlan | Design-to-Code Specialist',
    description: 'Expert in Figma Variables, Design Tokens & closing the design-development gap. Building scalable design systems at PETRONAS Digital.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nurul Izwan Dahlan - Design Systems Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurul Izwan Dahlan | Design Systems Specialist',
    description: 'Expert in Figma Variables, Design Tokens & Design-to-Code workflows',
    images: ['/og-image.jpg'],
    creator: '@baliomega',
  },
  alternates: {
    canonical: 'https://baliomega.github.io',
  },
  verification: {
    google: 'google-site-verification-code', // Add your verification code from Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nurul Izwan Dahlan',
    url: 'https://baliomega.github.io',
    image: 'https://baliomega.github.io/og-image.jpg',
    jobTitle: 'Design System Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'PETRONAS Digital',
    },
    sameAs: [
      'https://linkedin.com/in/baliomega',
      'https://github.com/baliomega',
    ],
    email: 'nurul.izwan.dahlan@gmail.com',
    knowsAbout: [
      'Figma Variables',
      'Design Tokens',
      'Design Systems',
      'UI/UX Design',
      'Front-End Development',
      'React',
      'TypeScript',
      'WCAG Accessibility',
    ],
    description: 'Design Systems Specialist with expertise in Figma Variables, design tokens, and automated design-to-development workflows.',
  }

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8QJ33W18S6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8QJ33W18S6');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
