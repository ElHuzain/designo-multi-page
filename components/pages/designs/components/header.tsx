"use client";

import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import useGetScreenWidth from '@/hooks/useGetScreenWidth'
import React from 'react'

const Header = ({ data }: { data: ProejctHeader }) => {

    const { screenWidth } = useGetScreenWidth();

    const lowerCaseTitle = data.title.toLowerCase();

    return (
        <MaxWidthContainer bottomMargin={true} expands={true}>

            <section className="relative overflow-hidden h-[320px] fade-in animate-in duration-500 w-full sm:rounded-[15px] bg-primary flex flex-col gap-6 justify-center items-center text-center text-white">

                {
                    screenWidth === 'mobile'
                        ? <img alt="background-decoration" className="absolute top-0 h-[92%] right-0 rotate-[-90deg]" src="/assets/shared/desktop/bg-pattern-small-circle.svg" />
                        : screenWidth === 'tablet'
                            ? <img alt="background-decoration" className="absolute scale-2 z-[0] top-[50%] translate-y-[-50%] right-0" src="/assets/web-design/desktop/bg-pattern-intro-web.svg" />
                            : <img alt="background-decoration" className="absolute left-0 scale-2 z-[0] top-[50%] translate-y-[-50%]" src={`/assets/${lowerCaseTitle}-design/desktop/bg-pattern-intro-${lowerCaseTitle}.svg`} />
                }

                <h1 className="z-10 text-[32px] md:text-[40px] font-[500]">{data.title} Design</h1>
                <p className="z-10 max-w-[327px] md:max-w-[385px] font-[300] w-full">{data.description}</p>

            </section>
        </MaxWidthContainer>
    )
}

export default Header
