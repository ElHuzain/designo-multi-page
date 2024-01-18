import React from 'react'
import { twMerge } from 'tailwind-merge';

const Feature = ({ title, description, image, backgroundDirection = 'top' }: { title: string, description: string, image: string, backgroundDirection?: string, }) => {

    const getDirection = () => {
        switch (backgroundDirection) {
            case 'left': return 'rotate-[-90deg]';
            case 'bottom': return 'rotate-[-180deg]';
            default: return '';
        }
    }

    return (
        <article className="flex flex-col sm:flex-row md:flex-col items-center gap-[48px]">

            <div className="relative w-[202px] h-[202px]">
                <img className={twMerge("absolute top-0 z-10 left-0 h-full w-full object-contain", getDirection())} src="/assets/home/desktop/bg-pattern-hero-home.svg" />
                <img className="w-full h-full z-20 object-contain" src={image} />
            </div>

            <div className="space-y-[32px] sm:space-y-4 md:space-y-[48px] text-center w-fit sm:text-left md:text-center">
                <h2 className="text-xl uppercase tracking-[5px]">{title}</h2>
                <p>
                    {description}
                </p>
            </div>

        </article>
    )
}

export const PassionateFeatureCard = () => {
    return <Feature
        title="passionate"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        image="/assets/home/desktop/illustration-passionate.svg"

        backgroundDirection="left"
    />
}

export const ResourcesfulFeatureCard = () => {
    return <Feature
        title="resourceful"
        description={"Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."}
        image="/assets/home/desktop/illustration-resourceful.svg"

        backgroundDirection="bottom"
    />
}

export const FriendlyFeatureCard = () => {
    return <Feature
        title="friendly"
        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        image="/assets/home/desktop/illustration-friendly.svg"
    />
}

export default Feature