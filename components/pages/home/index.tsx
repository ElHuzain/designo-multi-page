import React from 'react'
import MainBanner from './components/mainBanner'
import DesignCards from './components/designCards'
import Features from './components/features'

const HomePage = () => {
  return (
    <main>
      <MainBanner />
      <DesignCards />
      <Features />
    </main>
  )
}

export default HomePage