import React from 'react'

const Project = ({ data }: { data: ProjectType }) => {
    return (
        <article className="last:mb-0 mb-10 md:mb-1 lg:mb-0 rounded-[15px] w-full flex flex-col md:flex-row lg:flex-col overflow-hidden group cursor-pointer">

            <img alt='project' className="h-[320px] md:h-[310px] w-full md:w-auto object-cover" src={`/assets/${data.imgSrc}`} />

            <header className="group p-8 flex flex-col w-full justify-center gap-4 bg-lighter_peach text-center group-hover:bg-primary transition-colors">
                <h2 className="text-primary font-[500] tracking-[5px] text-xl uppercase group-hover:text-white transition-colors">{data.title}</h2>
                <p className="max-w-[286px] w-full mx-auto group-hover:text-white transition-colors">{data.description}</p>
            </header>

        </article>
    )
}

export default Project