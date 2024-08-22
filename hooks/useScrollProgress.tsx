import React, { useEffect, useState } from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const scrollUpdate = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            if (scrollHeight) {
                const scrollPercentage = (currentScroll / scrollHeight) * 100
                setCompletion(parseFloat(scrollPercentage.toFixed(2)))
            }
        };

        window.addEventListener('scroll', scrollUpdate)
        return () => window.removeEventListener('scroll', scrollUpdate)
    }, []);

    return completion
};

export default useScrollProgress