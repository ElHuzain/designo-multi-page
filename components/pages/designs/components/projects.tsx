"use client";
import React from 'react'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import Project from './project'
import AnimationScroll from '@/components/ui/animationScroll'

const Projects = ({ data }: { data: ProjectType[] }) => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <AnimationScroll>
                <section className="flex flex-col lg:grid grid-cols-3 gap-x-[30px] gap-y-[32px]">
                    {
                        data.map((item, index) => <Project key={index} data={item} />)
                    }
                </section>
            </AnimationScroll>
        </MaxWidthContainer>
    )
}

export default Projects
