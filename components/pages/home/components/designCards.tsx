import DesignCard, { AppDesignCard, GraphicDesignCard, WebDesignCard } from '@/components/ui/designCard'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'

const DesignCards = () => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <section className="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 h-[798px] md:h-[649px] lg:h-[640px] gap-y-[24px] gap-x-[30px]">
                <WebDesignCard className="hidden lg:block row-span-2" large={true} />
                <WebDesignCard className="lg:hidden" />
                <AppDesignCard />
                <GraphicDesignCard />
            </section>
        </MaxWidthContainer>
    )
}

export default DesignCards
