import { Button } from '@/components/ui/button'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import Image from 'next/image'
import React from 'react'

const MainBanner = () => {
    return (
        <MaxWidthContainer expands={true} bottomMargin={true}>
            <section className="bg-primary lg:h-[640px] lg:flex gap-10 justify-between items-center lg:px-[95px] px-0 h-[843px] relative sm:rounded-[15px] overflow-hidden">
                <div className="h-[640px] md:right-[-150px] lg:right-0 aspect-square absolute z-1 bottom-0">
                    <img alt='background-decoration' src="/assets/home/desktop/bg-pattern-hero-home.svg" className="w-full h-full" />
                </div>
                <div className="space-y-6 lg:h-fit md:h-[386px] h-[392px] px-6 sm:px-0 lg:space-y-10 flex flex-col">
                    <h1 className="text-white mt-auto z-10 text-[32px] leading-[36px] text-center lg:text-left md:text-5xl">Award-winning custom<br /> designs and digital<br /> branding solutions</h1>
                    <p className="text-white z-10 max-w-[417px] lg:text-left lg:mx-0 mx-auto text-[15px] md:text-md text-center">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <Button variant='secondary' className="self-center lg:self-start z-10">Learn more</Button>
                </div>
                {/* <div className="absolute bottom-100% h-full w-full"> */}
                <div className="h-[568px] z-20 md:h-[457px]">
                    <img alt='banner-phone' src='/assets/home/desktop/image-hero-phone2.png' className="object-cover mt-[80px] shadow-2xl md:h-[568px] h-full w-[281px] mx-auto z-10" />
                </div>
                {/* <Image src='/assets/home/desktop/image-hero-phone.png' height={0} width={0} objectFit='cover' layout='fill' alt='phone' /> */}
                {/* </div> */}
            </section>
        </MaxWidthContainer>
    )
}

export default MainBanner
