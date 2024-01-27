"use client";

import React, { useEffect, useState } from 'react'
import MaxWidthContainer from '../ui/maxWidthContainer'

import { HeaderDesktopNavigation, HeaderMobileNavigation } from './components/headerNavigation'
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMobileNavigation = () => setExpanded(!expanded);

    useEffect(() => {
        const onScrollListener = () => setExpanded(false);
        window.addEventListener('scroll', onScrollListener);
        return () => window.removeEventListener('scroll', onScrollListener);
    }, [])

    return (
        <header>

            {/* Header */}
            <MaxWidthContainer className="flex items-center z-10 justify-between h-[96px] md:h-[155px]">

                {/* Icon */}
                <Link href='/home'>
                    <Image alt='designo-logo' height='27' width='197' className="h-[27px]" src='/assets/shared/desktop/logo-dark.png' />
                </Link>

                {/* Desktop navigation */}
                <HeaderDesktopNavigation />

                {/* Hamburger / close menu */}
                <button className="md:hidden z-10" onClick={toggleMobileNavigation}>
                    <Image alt='nav hamburger' width='24' height='20' src={`/assets/shared/mobile/icon-${expanded ? 'close' : 'hamburger'}.svg`} />
                </button>

            </MaxWidthContainer>

            {/* The overlay of mobile navigation */}
            <div className={twMerge('min-h-screen h-full w-full absolute z-20 pointer-events-none transition-opacity duration-300 opacity-0 bg-[#00000067]', expanded && 'pointer-events-auto opacity-100')}>
                <HeaderMobileNavigation toggleMobileNavigation={toggleMobileNavigation} />
            </div>
        </header>
    )
}

export default Header