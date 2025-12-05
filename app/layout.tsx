import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Smart Hub Technologies | Digital Infrastructure for Modern Property & Land Systems',
  description: 'Building intelligent systems for Property, Land, State, Municipal, and Customary Land Management using AI, Blockchain, and Advanced Software Engineering.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    // Add custom icons to public folder if needed:
    // icon-light-32x32.png, icon-dark-32x32.png, icon.svg, apple-icon.png
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
