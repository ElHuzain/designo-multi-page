import React from 'react'
import { twMerge } from 'tailwind-merge'

const MaxWidthContainer = ({ children, className = '', expands, bottomMargin = false }: { children: React.ReactNode, className?: string, expands?: boolean, bottomMargin?: boolean }) => {
    return (
        <div className={twMerge('max-w-[1111px] w-full mx-auto px-6 sm:px-10 xl:p-0',
            className,
            expands && 'px-0',
            bottomMargin && "mb-bottom_margin_mobile lg:mb-bottom_margin"
        )}>
            {children}
        </div>
    )
}

export default MaxWidthContainer