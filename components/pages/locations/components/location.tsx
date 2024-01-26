"use client";

import AnimationScroll from '@/components/ui/animationScroll';
import { twMerge } from 'tailwind-merge';
import useGetScreenWidth from '@/hooks/useGetScreenWidth'
import React from 'react'

type OfficeType = {
    name: string,
    street: string,
    building: string,
}

type ContactType = {
    number: string,
    email: string
}

type LocationType = {
    name: string,
    office: OfficeType,
    contact: ContactType,
    flipped?: boolean,
    delay?: string,
    direction?: string,
    // map: string,
}

const Location = ({ name, office, contact, flipped, delay, direction = "left" }: LocationType) => {

    const { screenWidth } = useGetScreenWidth();

    return (
        <article className={twMerge("last:mb-0 mb-10 md:mb-[120px] lg:mb-[30px]")}>
            <AnimationScroll className={twMerge("flex flex-col lg:flex-row lg:gap-8 overflow-hidden sm:rounded-[15px]", flipped && "lg:flex-row-reverse")} delay={delay}>
                <img alt='map' className="h-[320px] !lg:h-full lg:w-[350px] lg:mb-0 w-full object-cover md:rounded-[15px] md:mb-6" src={`/assets/locations/desktop/image-map-${name.toLowerCase().split(' ').join('-')}.png`} />

                <div className="relative flex flex-col md:flex-row lg:w-full items-center gap-6 text-center md:rounded-[15px] justify-center md:justify-start bg-lighter_peach">

                    {
                        screenWidth === 'mobile'
                            ? <img alt='background-decoration' className="absolute" src="/assets/shared/desktop/bg-pattern-three-circles.svg" />
                            : <img alt='background-decoration' className="absolute bottom-0" src="/assets/shared/desktop/bg-pattern-two-circles.svg" />

                    }

                    <div className="flex mt-20 md:ml-[75px] md:mt-[88px] md:mr-[70px] lg:ml-[95px] lg:mt-[88px] md:text-start flex-col md:items-start gap-6 w-fit">

                        <h2 className="text-primary text-[32px] font-[500]">{name}</h2>
                        <address className="text-black not-italic md:mb-[88px] ">
                            <strong className="font-[700]">Designo {office.name} Office</strong><br />
                            {office.street}<br />
                            {office.building}
                        </address>
                    </div>

                    <address className="text-black md:text-start md:self-end mb-20 md:mr-[75px] lg:mr-0 md:my-[88px] not-italic">
                        <strong className="font-[700]">Contact</strong><br />
                        P : {contact.number}<br />
                        M : {contact.email}
                    </address>

                </div>
            </AnimationScroll>
        </article>
    )
}

export default Location
