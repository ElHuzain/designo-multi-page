"use client";
import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import MaxWidthContainer from './maxWidthContainer'
import AnimationScroll from './animationScroll'

type LocationType = {
    title: string,
    href: string,
    rotation: string,
}

const Location = ({ title, href, rotation }: LocationType) => {
    return <article className="flex flex-col justify-center items-center">
        <div className="w-[202px] h-[202px] relative flex flex-col justify-between items-center">
            <img className="w-full h-full z-10" src={`/assets/shared/desktop/illustration-${title.split(' ').join('-')}.svg`} />
            <img className={`absolute z-0 h-full w-full ${rotation}`} src="/assets/shared/desktop/bg-pattern-small-circle.svg" />
        </div>
        <h3 className="text-xl tracking-[5px] font-[500] mt-12 mb-8 uppercase">{title}</h3>
        <Button asChild><Link href={href}>See Location</Link></Button>
    </article>
}

const Locations = () => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <section className="flex flex-col gap-12 md:flex-row md:gap-4 justify-between">
                <h2 className="hidden">Locations</h2>
                
                <AnimationScroll delay="100ms" direction='top'>
                    <Location title={"canada"} href={'/locations'} rotation={'rotate-90'} />
                </AnimationScroll>

                <AnimationScroll direction='bottom'>
                    <Location title={"australia"} href={'/locations'} rotation={''} />
                </AnimationScroll>

                <AnimationScroll direction='right'>
                    <Location title={"united kingdom"} href={'/locations'} rotation={'rotate-[-90deg]'} />
                </AnimationScroll>
            
            </section>
        </MaxWidthContainer>
    )
}

export default Locations
