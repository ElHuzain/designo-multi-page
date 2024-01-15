import MaxWidthContainer from "@/components/ui/maxWidthContainer"
import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const HeaderNavLink = ({ href, children, color }: { href: string, children: ReactNode, color?: string }) => {
    return <Link className={twMerge('tracking-widest uppercase md:text-sm hover:underline', color && 'text-' + color)} href={href}>
        {children}
    </Link>
}

export const HeaderDesktopNavigation = () => {
    return <nav className="hidden md:block">
        <ul className="flex gap-10">
            <li className="tracking-widest"><HeaderNavLink href="/home">Our company</HeaderNavLink></li>
            <li className="tracking-widest"><HeaderNavLink href="/locations">Locations</HeaderNavLink></li>
            <li className="tracking-widest"><HeaderNavLink href="/contact-us">Contact</HeaderNavLink></li>
        </ul>
    </nav>
}

export const HeaderMobileNavigation = ({ expanded, closeButton }: any) => {
    return <nav className="block md:hidden bg-black">
        <MaxWidthContainer>
            <ul className=" space-y-8  py-11 gap-10">
                <li className="tracking-widest"><HeaderNavLink href="/home" color="white">Our company</HeaderNavLink></li>
                <li className="tracking-widest"><HeaderNavLink href="/locations" color="white">Locations</HeaderNavLink></li>
                <li className="tracking-widest"><HeaderNavLink href="/contact-us" color="white">Contact</HeaderNavLink></li>
            </ul>
        </MaxWidthContainer>
    </nav>
}