import "./globals.css"

export const metadata = {
  title: "Vivek Tarapara - Software Engineer",
  description: "Duke graduate specializing in scalable systems, ML applications, and distributed computing",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vivek Tarapara - Software Engineer</title>
        <meta
          name="description"
          content="Duke graduate specializing in scalable systems, ML applications, and distributed computing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white font-mono antialiased">{children}</body>
    </html>
  )
}
