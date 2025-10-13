import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nurul Izwan Dahlan | Design Systems Specialist - Figma Variables & Design Tokens Expert',
  description: 'Bridging design to code with expertise in Figma Variables, design tokens, and automated design-to-development workflows. Building scalable design systems that developers love.',
  keywords: ['Figma Variables', 'Design Tokens', 'Design Systems', 'Design to Code', 'Component Libraries', 'Style Dictionary', 'UI/UX Designer', 'Design-Dev Handoff'],
  authors: [{ name: 'Nurul Izwan Dahlan' }],
  openGraph: {
    title: 'Nurul Izwan Dahlan | Design-to-Code Specialist',
    description: 'Expert in Figma Variables, Design Tokens & closing the design-development gap',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
