"use client";
import AnimationScroll from '@/components/ui/animationScroll'
import { FriendlyFeatureCard, PassionateFeatureCard, ResourcesfulFeatureCard } from '@/components/ui/feature'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'

const Features = () => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <AnimationScroll delay={"duration-1000"}>
                <section aria-labelledby='why-us' className="grid grid-cols-1 lg:grid-cols-3 gap-[80px] md:gap-8 lg:gap-7">
                    <h2 id='why-us' className="hidden">Why Designo?</h2>
                    <PassionateFeatureCard />
                    <ResourcesfulFeatureCard />
                    <FriendlyFeatureCard />
                </section>
            </AnimationScroll>
        </MaxWidthContainer>
    )
}

export default Features