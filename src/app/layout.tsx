import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '~/components/StyledComponentsRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bring the bird back!',
  description: 'Get rid of the 𝕏, bring the bird logo back to Twitter',
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
