"use client";

import AnimationScroll from '@/components/ui/animationScroll'
import DesignCard, { AppDesignCard, GraphicDesignCard, WebDesignCard } from '@/components/ui/designCard'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'

const DesignCards = () => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <AnimationScroll delay={"duration-1000"}>
                <section aria-labelledby='our-designs' className="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 h-[798px] md:h-[649px] lg:h-[640px] gap-y-[24px] gap-x-[30px]">
                    <h2 id='our-designs' className="hidden">Our Designs</h2>

                    <WebDesignCard className="hidden lg:block row-span-2" large={true} />
                    <WebDesignCard className="lg:hidden" />

                    <AppDesignCard />

                    <GraphicDesignCard />

                </section>
            </AnimationScroll>
        </MaxWidthContainer>
    )
}

export default DesignCards
