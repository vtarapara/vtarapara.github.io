import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vivek Tarapara',
  description: 'portfolio website',
    generator: 'vt-dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-mono antialiased">
        {children}
      </body>
    </html>
  )
}
