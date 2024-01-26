import React from 'react'
import MainBanner from './components/mainBanner'
import DesignCards from './components/designCards'
import Features from './components/features'
import DecorativeBackground from '@/components/ui/decorativeBackground'

const HomePage = () => {
  return (
    <main className="relative overflow-hidden">
      <MainBanner />
      <DecorativeBackground />
      <DesignCards />
      <Features />
      <DecorativeBackground className="rotate-180 right-0" />
    </main>
  )
}

export default HomePage