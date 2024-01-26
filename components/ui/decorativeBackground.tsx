import React from 'react'
import { twMerge } from 'tailwind-merge'

const DecorativeBackground = ({ className = "" }: { className?: string }) => {
    return (
        <img className={twMerge("absolute hidden lg:block z-[-1] translate-y-[-445px]", className)} aria-hidden alt='background-decoration' src='/assets/shared/desktop/bg-pattern-leaf.svg' />
    )
}

export default DecorativeBackground