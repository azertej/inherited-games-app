'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionLinksProps{
    children: ReactNode,
    href: string,
    className?: string
}

export const TransitionLinks = ({ children, className, href, ...props }: TransitionLinksProps) => {

    const router = useRouter()

    function sleep(ms: number): Promise<void> {
        return new Promise ((resolve)=> setTimeout(resolve,ms))
    }

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        const body = document.querySelector('body')
        body?.classList.add('page-transition')
        await sleep(300)
        router.push(href)
        await sleep(200)
        body?.classList.remove('page-transition')
    }
    return (
        <Link href={href} {...props} className={className} onClick={handleTransition}>
            {children}
        </Link>
    )
}
