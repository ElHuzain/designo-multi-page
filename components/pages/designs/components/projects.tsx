import React from 'react'
import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import Project from './project'

const Projects = ({ data }: { data: ProjectType[] }) => {
    return (
        <MaxWidthContainer bottomMargin={true}>
            <section className="flex flex-col lg:grid grid-cols-3 gap-x-[30px] gap-y-[32px]">
                {
                    data.map((item, index) => <Project key={index} data={item} />)
                }
            </section>
        </MaxWidthContainer>
    )
}

export default Projects
