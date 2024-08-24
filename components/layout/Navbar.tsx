'use client'

import React, { useState } from 'react'
import Container from '../container'
import NavbarItems from './NavbarItems'
import { Facebook, AlignJustify, Instagram, Linkedin, X } from 'lucide-react'
import { FaDiscord } from "react-icons/fa6"
import NavbarImage from './NavbarImage'
import { Button } from '../ui/button'
// @ts-ignore
import { Fade } from "react-awesome-reveal"

const Navbar = () => {

    const mediaIconsStyle = 'hover:border-[2px] border-solid border-white hover:p-1 cursor-pointer'
    const [open, isOpen] = useState<Boolean>(false)
    return (
        <div className='fixed w-full top-0 z-50 bg-black bg-opacity-30'>
            <Container className='px-8 lg:px-28'>
                <div className='flex justify-between items-center '>
                    <NavbarImage />
                    <div className='block md:hidden  '>
                        <Button onClick={() => isOpen((prev) => !prev)} className='relative z-50'>
                            {open ? <X size={40} /> : <AlignJustify size={40} />}
                        </Button>
                        {open && (
                            <div className='absolute top-0 left-0 w-screen h-screen bg-slate-800 text-white flex flex-col items-center justify-center gap-y-3 '>
                                <Fade direction='right' delay={200} cascade damping={1e-1} triggerOnce={true} >
                                    <NavbarItems open={open} setOpen={isOpen} />
                                </Fade>

                            </div>
                        )}
                    </div>
                    <div className='hidden md:block  '>
                        <NavbarItems open={open} setOpen={isOpen} />
                    </div>
                    <div className='hidden md:block  '>
                        <div className='flex gap-x-4 items-center text-white'>
                            <Facebook onClick={() => window.open('https://www.facebook.com/InheritedGamesStudio','_blank')} className={mediaIconsStyle} size='30' />
                            <Instagram onClick={() => window.open('https://www.instagram.com/inheritedgames','_blank')} size='30' className={mediaIconsStyle} />
                            <Linkedin onClick={() => window.open('https://www.linkedin.com/company/inherited-games-studio/','_blank')} className={mediaIconsStyle} size='30' />
                            <FaDiscord onClick={() => window.open('https://discord.com/channels/1260510156211490868/1260515490674249779','_blank')} size='30' className={mediaIconsStyle} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar