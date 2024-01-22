import { FriendlyFeatureCard, PassionateFeatureCard, ResourcesfulFeatureCard } from '@/components/ui/feature'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'

const Features = () => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <section aria-labelledby='why-us' className="grid grid-cols-1 lg:grid-cols-3 gap-[80px] md:gap-8 lg:gap-7">
                <h2 id='why-us' className="hidden">Why Designo?</h2>
                <PassionateFeatureCard />
                <ResourcesfulFeatureCard />
                <FriendlyFeatureCard />
            </section>
        </MaxWidthContainer>
    )
}

export default Features