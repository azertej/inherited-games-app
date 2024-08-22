'use client'
import React from 'react'
import CountUp from 'react-countup'

interface badgeProps {
    icon: any,
    endCountNum: number,
    endCountText: string,
    badgeText: string
}
const Badge = ({  icon, endCountNum, endCountText, badgeText }: badgeProps) => {
    return (
        <div className='flex justify-center gap-x-3 items-center bg-slate-600 w-[200px] py-2 rounded-full shadow-2xl dark:backdrop-blur-[44px] '>
            <div className='text-2xl'>{icon}</div>
            <div>
                <div className='leading-none text-3xl'>
                    <CountUp end={endCountNum} duration={10} />
                    {endCountText}
                </div>
                <div>{badgeText}</div>
            </div>
        </div>
    )
}

export default Badge