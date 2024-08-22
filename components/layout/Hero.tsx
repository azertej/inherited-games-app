'use client'

import Image from 'next/image'
import React from 'react'
import Badge from '../Badge'
import { RiBookmark3Fill, RiServiceFill } from 'react-icons/ri'
import { GrAchievement } from "react-icons/gr"
import { Fade } from 'react-awesome-reveal'

const Hero = ({ infos }: any) => {
    return (
        <section className='relative w-full h-full md:h-screen z-20 flex items-center justify-center text-white lx:mt-0' id='hero' >
            <video className="absolute top-0 left-0 w-full h-full object-cover opacity-60" autoPlay loop muted playsInline  >
                <source src="/backroundvid.mp4" type="video/mp4" />
            </video>
            {infos.map((info: any, index: any) => (
                <div key={index} className='relative w-[80%] lg:w-auto z-20 flex flex-col gap-4 py-12 lg:py-0 mt-[200px]'>
                    <div className='flex flex-col lg:flex-row justify-between gap-10'>
                        <div className='flex flex-col gap-4 max-w-[750px] lg:text-left text-center mx-auto lg:mx-0'>
                            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >
                                <span className='text-sm uppercase font-semibold text-white tracking-[4px]'>{info.title} </span>
                            </Fade>
                            <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true} >
                                <span className='text-5xl font-bold'>{info.shortDescription} </span>
                            </Fade>
                            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true} >
                                <p className='max-w-[700px] mx-auto lg:max-0'>{info.description} </p>
                            </Fade>
                        </div>
                        <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true} >
                            <div className='hidden lg:flex bg-bottom relative w-[300px] h-[250px]'>
                                <Image src={info.heroImage} fill alt='Hero Section Image' />
                            </div>
                        </Fade>

                    </div>
                    {/* second part */}
                    <div className='py-4 sm:py-8 mt-1 lg:mt-6'>
                        <div className='mx-auto max-w-7xl'>
                            <dl className='grid grid-cols-1 lg:grid-cols-3 text-center gap-y-5 xl:gap-y-0'>
                                <Fade direction='up' delay={1200} cascade damping={1e-1} triggerOnce={true} >
                                    <div className='flex flex-col gap-y-3 mx-auto items-center' >
                                        <dt className='leading-7 text-muted-foreground'>Years of Experience</dt>
                                        <dd className='order-first text-3xl font-semibold'>
                                            <Badge icon={<RiBookmark3Fill />} endCountNum={info.experience} endCountText='+' badgeText='' />
                                        </dd>
                                    </div>
                                    <div className='flex flex-col gap-y-3 mx-auto items-center' >
                                        <dt className='leading-7 text-muted-foreground'>Competitions</dt>
                                        <dd className='order-first text-3xl font-semibold'>
                                            <Badge icon={<GrAchievement />} endCountNum={info.competition} endCountText='+' badgeText='' />
                                        </dd>
                                    </div>
                                    <div className='flex flex-col gap-y-3 mx-auto items-center' >
                                        <dt className='leading-7 text-muted-foreground'>Projects</dt>
                                        <dd className='order-first text-3xl font-semibold'>
                                            <Badge icon={<RiServiceFill />} endCountNum={info.projects} endCountText='+' badgeText='' />
                                        </dd>
                                    </div>
                                </Fade>

                            </dl>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Hero