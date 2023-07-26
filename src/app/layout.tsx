import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '~/components/StyledComponentsRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bring the bird back!',
  description: 'A chrome extension to get the bird logo back on Twitter',
  twitter: {
    card: 'summary_large_image',
    creator: '@gwendall',
    images: [`/logo.png`],
  },
  openGraph: {
    locale: 'en-US',
    type: 'website',
    images: [`/logo.png`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StyledComponentsRegistry>
  )
}
