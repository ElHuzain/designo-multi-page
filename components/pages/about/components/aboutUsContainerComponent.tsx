"use client";

import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import useGetScreenWidth from '@/hooks/useGetScreenWidth'
import React from 'react'

type AboutUsContainerComponentType = {
  title: string,
  content: string[],
  img: string,
  bg: string,
  ltr: boolean,
  bottomMargin: boolean
}

const AboutUsContainerComponent = ({ title, content, img, bg, ltr, bottomMargin }: AboutUsContainerComponentType) => {

  const { screenWidth } = useGetScreenWidth();

  return (
    <MaxWidthContainer bottomMargin={bottomMargin || screenWidth !== 'mobile'} expands={true}>
      <section className={`flex flex-col sm:rounded-[15px] overflow-hidden ${ltr ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

        <img alt="hero-background" className={`w-full h-[320px] sm: lg:h-[480px] lg:w-fit object-cover`} src={`/assets/about/${screenWidth}/image-${img}.jpg`} />

        <div className={`px-5 py-20 lg:pr-[82px] lg:pl-[95px] w-full flex flex-col justify-center text-center lg:text-left gap-6 ${bg}`}>

          <h2 className={`text-[32px] lg:text-[48px] font-[500] ${bg === 'bg-primary' ? 'text-white' : 'text-primary'}`}>{title}</h2>
          {
            content.map((item, index) => <p key={index} className={`leading-[26px] max-w-[573px] lg:max-w-[] mx-auto ${bg === 'bg-primary' ? 'text-white' : 'text-black'}`}>{item}</p>)
          }

        </div>

      </section>
    </MaxWidthContainer>
  )
}

export default AboutUsContainerComponent
