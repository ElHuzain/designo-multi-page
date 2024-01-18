import React from 'react'
import { twMerge } from 'tailwind-merge';

const DesignCard = ({ Context, ImgDesktop, ImgMobile, ImgTablet, className }: any) => {
    return (
        <article className={twMerge("rounded-[15px] h-full w-full relative overflow-hidden", className)}>
            <img src={ImgMobile} className="absolute md:hidden w-full h-full top-0 left-0 object-cover z-[-1] rounded-[15px]" />
            <img src={ImgTablet} className="absolute md:block lg:hidden hidden w-full h-full top-0 left-0 z-[-1] object-cover rounded-[15px]" />
            <img src={ImgDesktop} className="absolute hidden lg:block  w-full h-full top-0 left-0 object-cover z-[-1] rounded-[15px]" />
            <div className="z-30 h-full w-full flex flex-col text-center gap-6 justify-center transition-colors cursor-pointer hover:bg-[#e7826bb9] bg-[#00000063] items-center">
                <h2 className="z-20 uppercase text-white text-[28px] md:text-[40px] tracking-[2px]">{Context}</h2>
                <div className="flex items-center gap-5">
                    <a className="text-white tracking-[5px]">VIEW PROJECTS</a>
                    <img src="assets/shared/desktop/icon-right-arrow.svg" alt="right-arrow" />
                </div>
            </div>
        </article>
    )
}

export const WebDesignCard = ({ large, className }: { large?: boolean, className?: string }) => {
    return <DesignCard
        ImgDesktop={`/assets/home/desktop/image-web-design-${large ? 'large' : 'small'}.jpg`}
        ImgMobile="/assets/home/mobile/image-web-design.jpg"
        ImgTablet="/assets/home/tablet/image-web-design.jpg"

        Context="Web Design"

        className={className}
    />
}

export const AppDesignCard = ({ className }: { className?: string }) => {
    return <DesignCard
        ImgDesktop="/assets/home/desktop/image-app-design.jpg"
        ImgMobile="/assets/home/mobile/image-app-design.jpg"
        ImgTablet="/assets/home/tablet/image-app-design.jpg"

        Context="App Design"
        className={className}
    />
}

export const GraphicDesignCard = ({ className }: { className?: string }) => {
    return <DesignCard
        ImgDesktop="/assets/home/desktop/image-graphic-design.jpg"
        ImgMobile="/assets/home/mobile/image-graphic-design.jpg"
        ImgTablet="/assets/home/tablet/image-graphic-design.jpg"

        Context="Graphic Design"
        className={className}
    />
}

export default DesignCard
