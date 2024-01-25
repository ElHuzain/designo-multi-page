import { AppDesignCard, GraphicDesignCard, WebDesignCard } from '@/components/ui/designCard';
import MaxWidthContainer from '@/components/ui/maxWidthContainer';
import React from 'react'

const RouteTo = ({ data }: { data: string[] }) => {

    const GetDesignCard = (card: string, index: number) => {

        console.log(card);

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
                    data.map((item: string, index: number) => GetDesignCard(item, index))
                }
            </section>
        </MaxWidthContainer>
    )
}

export default RouteTo