import React from 'react'
import { twMerge } from 'tailwind-merge'

const MaxWidthContainer = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={twMerge('max-w-[1111px] w-full mx-auto px-6 md:px-10 xl:p-0', className)}>
            {children}
        </div>
    )
}

export default MaxWidthContainer