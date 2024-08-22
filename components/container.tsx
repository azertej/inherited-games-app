import { cn } from '@/lib/utils'
import React from 'react'

interface containerProps {
    children: React.ReactNode,
    className?: string
}
const Container = ({ children, className }: containerProps) => {
    return (
        <div className={cn('mx-auto w-full max-w-[1920px] ', className)}>
            {children}
        </div>
    )
}

export default Container