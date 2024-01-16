"use client";

import React, { useState } from 'react'
import MaxWidthContainer from '../ui/maxWidthContainer'

import { HeaderDesktopNavigation, HeaderMobileNavigation } from './components/headerNavigation'
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';


const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMobileNavigation = () => setExpanded(!expanded);

    return (
        <header>

            {/* Header */}
            <MaxWidthContainer className="flex items-center z-10 justify-between h-[96px] md:h-[155px]">

                {/* Icon */}
                <a>
                    <Image alt='Logo' className="h-[27px]" src='./assets/shared/desktop/logo-dark.png' />
                </a>

                {/* Desktop navigation */}
                <HeaderDesktopNavigation />

                {/* Hamburger / close menu */}
                <button className="md:hidden" onClick={toggleMobileNavigation}>
                    <Image alt='nav hamburger' src={`./assets/shared/mobile/icon-${expanded ? 'close' : 'hamburger'}.svg`} />
                </button>

            </MaxWidthContainer>

            {/* The overlay of mobile navigation */}
            <div className={twMerge('h-screen w-screen absolute z-1 hidden bg-transparent', expanded && 'block bg-[#00000067]')}>
                <HeaderMobileNavigation />
            </div>
        </header>
    )
}

export default Header