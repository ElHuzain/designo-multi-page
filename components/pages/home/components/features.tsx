import { FriendlyFeatureCard, PassionateFeatureCard, ResourcesfulFeatureCard } from '@/components/ui/feature'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'

const Features = () => {
    return (
        <MaxWidthContainer>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-[80px] md:gap-8 lg:gap-7">
                <PassionateFeatureCard />
                <ResourcesfulFeatureCard />
                <FriendlyFeatureCard />
            </section>
        </MaxWidthContainer>
    )
}

export default Features