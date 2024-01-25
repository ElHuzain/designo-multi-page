import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Designo Multi Page',
  description: 'Front End Mentor GURU Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black flex flex-col min-h-dvh h-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}