import React from 'react'
import AboutUs from './components/aboutUs'
import WorldClassTalent from './components/worldClassTalent'
import TheRealDeal from './components/theRealDeal'
import Locations from '@/components/ui/locations'
import DecorativeBackground from '@/components/ui/decorativeBackground'

const About = () => {
  return (
    <main className="overflow-hidden relative">
      <AboutUs />
      <DecorativeBackground className="translate-y-[-380px]" />
      <WorldClassTalent />
      <Locations />
      <DecorativeBackground className="translate-y-[-310px] right-[-30%] rotate-180" />
      <TheRealDeal />
    </main>
  )
}

export default About
