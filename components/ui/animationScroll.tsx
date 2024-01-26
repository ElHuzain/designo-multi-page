import React from 'react'
import { InView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';

type AnimationScrollType = {
    children: React.ReactNode;
    delay?: string,
    direction?: string,
    className?: string
}

const AnimationScroll = ({ children, delay, direction, className = "" }: AnimationScrollType) => {

    const prevStyle = twMerge(['inView' && `animate-in slide-in-from-bottom fade-in ${delay}`]);

    const getDirection = () => {
        switch (direction) {
            case 'left': return {
                before: 'translate-x-[-50px]',
                after: 'translate-x-0'
            }
            case 'right': return {
                before: 'translate-x-[50px]',
                after: 'translate-x-0'
            }
            case 'top': return {
                before: 'translate-y-[-50px]',
                after: 'translate-y-0'
            }
            case 'bottom': return {
                before: 'translate-y-[50px]',
                after: 'translate-y-0'
            }
            default: return {
                before: 'translate-y-[50px]',
                after: 'translate-y-0'
            }
        }
    }

    const getDelay = () => `delay-${delay}` || ''
    console.log(getDelay());
    return (
        <InView triggerOnce={true}>
            {({ inView, ref, entry }) => (
                <div className={twMerge([`transition-all ${getDirection().before} ${getDelay()} duration-1000 opacity-0`, inView && `${getDirection().after} opacity-1`, className])} ref={ref}>
                    {children}
                </div>
            )}
        </InView >
    )
}

export default AnimationScroll