import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'
import AboutUsContainerComponent from './aboutUsContainerComponent'

const AboutUs = () => {

  return (
    <AboutUsContainerComponent
      title="About Us"
      content={['Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.']}
      img={"about-hero"}
      bg={"bg-primary"}
      ltr={false}
      bottomMargin={false}

      slideDirection="right"

      bgDecoration={{
        mobile: <img alt='background-decoration' className="absolute h-full top-[-40%] scale-[1.6] right-[16%] z-0" src="/assets/about/mobile/bg-pattern-hero-about-mobile-fit.svg" />,
        tablet: <img alt='background-decoration' className="absolute scale-2 top-[-120%] left-0 z-0" src="/assets/about/desktop/bg-pattern-hero-about-desktop.svg" />,
        desktop: <img alt='background-decoration' className="absolute scale-2 bottom-0 right-0 z-0  " src="/assets/about/desktop/bg-pattern-hero-about-desktop.svg" />,
      }}

    />
  )
}

export default AboutUs