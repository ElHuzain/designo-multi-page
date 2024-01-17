import React from 'react'
import { twMerge } from 'tailwind-merge'

const MaxWidthContainer = ({ children, className = '', expands }: { children: React.ReactNode, className?: string, expands?: boolean }) => {
    return (
        <div className={twMerge('max-w-[1111px] w-full mx-auto px-6 sm:px-10 xl:p-0', className, expands && 'px-0')}>
            {children}
        </div>
    )
}

export default MaxWidthContainer