"use client";
import React from 'react'
import { twMerge } from 'tailwind-merge';
import AnimationScroll from './animationScroll';

const Feature = ({ title, description, image, backgroundDirection = 'top' }: { title: string, description: string, image: string, backgroundDirection?: string, }) => {

    const getDirection = () => {
        switch (backgroundDirection) {
            case 'left': return 'rotate-[-90deg]';
            case 'bottom': return 'rotate-[-180deg]';
            default: return '';
        }
    }

    return (
        <article className="flex flex-col sm:flex-row lg:flex-col items-center sm:gap-[32px] gap-[48px] lg:gap-[48px]">

            <div className="relative w-[202px] h-[202px]">

                {/* Background decoration */}
                <img alt={`${title}-background`} className={twMerge("absolute top-0 z-[-1] left-0 h-full w-full object-contain", getDirection())} src="/assets/home/desktop/bg-pattern-hero-home.svg" />

                {/* Icon */}
                <img alt='Icon' className="w-full h-full z-20 object-contain" src={image} />

            </div>

            <div className="space-y-[32px] sm:space-y-4 lg:space-y-[32px] text-center w-fit sm:text-left lg:text-center">
                <h3 className="text-xl uppercase tracking-[5px] font-semibold">{title}</h3>
                <p>
                    {description}
                </p>
            </div>

        </article>
    )
}

export const PassionateFeatureCard = () => {
    return <AnimationScroll delay='1000' direction='left'>
        <Feature
            title="passionate"
            description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
            image="/assets/home/desktop/illustration-passionate.svg"

            backgroundDirection="left"
        />
    </AnimationScroll>
}

export const ResourcesfulFeatureCard = () => {
    return <AnimationScroll direction='bottom'><Feature
        title="resourceful"
        description={"Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."}
        image="/assets/home/desktop/illustration-resourceful.svg"

        backgroundDirection="bottom"
    />
    </AnimationScroll>
}

export const FriendlyFeatureCard = () => {
    return <AnimationScroll delay='500' direction='right'><Feature
        title="friendly"
        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        image="/assets/home/desktop/illustration-friendly.svg"
    />
    </AnimationScroll>
}

export default Feature