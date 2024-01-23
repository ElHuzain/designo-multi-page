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
    />
  )
}

export default AboutUs