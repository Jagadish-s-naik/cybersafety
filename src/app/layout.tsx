import type { Metadata } from 'next'
import './globals.css'
import ToolbarClient from '@/components/ToolbarClient'; // Import the new client component

export const metadata: Metadata = {
  title: 'CyberSafety App',
  description: 'Advanced Cyber Attack Alert System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="antialiased scroll-smooth bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "development" && (
          <ToolbarClient /> // Render the new client component
        )}
      </body>
    </html>
  )
}
