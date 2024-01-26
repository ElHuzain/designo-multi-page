"use client";

import AnimationScroll from '@/components/ui/animationScroll';
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import useGetScreenWidth from '@/hooks/useGetScreenWidth'
import React, { ReactNode } from 'react'

type AboutUsContainerComponentType = {
  title: string,
  content: string[],
  img: string,
  bg: string,
  ltr: boolean,
  bottomMargin: boolean,
  slideDirection?: string,
  bgDecoration: {
    mobile: ReactNode,
    tablet: ReactNode,
    desktop: ReactNode
  }
}

const AboutUsContainerComponent = ({ title, content, img, bg, ltr, bottomMargin, bgDecoration, slideDirection }: AboutUsContainerComponentType) => {

  const { screenWidth } = useGetScreenWidth();

  return (
    <MaxWidthContainer bottomMargin={bottomMargin || screenWidth !== 'mobile'} expands={true}>
      <AnimationScroll direction={slideDirection} delay={"duration-1000"}>
        <section className={`flex flex-col sm:rounded-[15px] overflow-hidden ${ltr ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

          <img alt="hero-background" className={`w-full h-[320px] md:h-[480px] lg:h-[480px] lg:w-[476px] object-cover`} src={`/assets/about/${screenWidth}/image-${img}.jpg`} />

          <div className={`overflow-hidden relative px-5 py-20 lg:pr-[82px] lg:pl-[95px] w-full flex flex-col justify-center text-center lg:text-left gap-6 ${bg}`}>

            {
              screenWidth === 'mobile'
                ? bgDecoration.mobile
                : screenWidth === 'tablet'
                  ? bgDecoration.tablet
                  : bgDecoration.desktop
            }

            <h2 className={`text-[32px] z-10 lg:text-[48px] font-[500] ${bg === 'bg-primary' ? 'text-white' : 'text-primary'}`}>{title}</h2>
            {
              content.map((item, index) => <p key={index} className={`leading-[26px] z-10 max-w-[573px] lg:max-w-[] mx-auto ${bg === 'bg-primary' ? 'text-white' : 'text-black'}`}>{item}</p>)
            }

          </div>

        </section>
      </AnimationScroll>
    </MaxWidthContainer>
  )
}

export default AboutUsContainerComponent
