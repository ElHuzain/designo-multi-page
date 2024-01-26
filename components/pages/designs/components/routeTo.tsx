"use client";
import AnimationScroll from '@/components/ui/animationScroll';
import { AppDesignCard, GraphicDesignCard, WebDesignCard } from '@/components/ui/designCard';
import MaxWidthContainer from '@/components/ui/maxWidthContainer';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const RouteTo = ({ data }: { data: string[] }) => {

    const GetDesignCard = (card: string, index: number) => {

        switch (card) {
            case '/web': return <WebDesignCard key={index} />;
            case '/graphic': return <GraphicDesignCard key={index} />;
            case '/app': return <AppDesignCard key={index} />;
            default: return <WebDesignCard key={index} />;
        }
    }

    return (
        <MaxWidthContainer bottomMargin={true}>
            <section className="flex flex-col gap-6 lg:gap-[30px] lg:flex-row h-[524px] md:h-[424px] lg:h-[308px]">
                {
                    data.map((item: string, index: number) => <AnimationScroll key={index} direction={index % 2 === 0 ? 'left' : 'right'} className={twMerge("w-full h-full rounded-[15px] overflow-hidden")}><>{GetDesignCard(item, index)}</></AnimationScroll>)
                }
            </section>
        </MaxWidthContainer>
    )
}

export default RouteTo