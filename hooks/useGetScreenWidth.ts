"use client";
import { useEffect, useState } from 'react'

const useGetScreenWidth = () => {

    const calcWidth = (width: number) => width > 1024 ? 'desktop' : width >= 768 ? 'tablet' : 'mobile'

    const [screenWidth, setScreenWidth] = useState('desktop');

    useEffect(() => {

        setScreenWidth(calcWidth(window.innerWidth));

        const handleResize = () => {
            setScreenWidth(calcWidth(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { screenWidth };
}

export default useGetScreenWidth