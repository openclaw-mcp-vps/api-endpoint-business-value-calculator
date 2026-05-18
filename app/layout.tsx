import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Endpoint Business Value Calculator',
  description: 'Calculate revenue impact of API endpoints. Map usage to business metrics, identify high-value and unused endpoints.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33ae5f6b-ddcf-4ea6-9a51-985c1222ccb0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
