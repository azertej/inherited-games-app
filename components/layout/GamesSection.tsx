'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
// @ts-ignore
import { Fade } from "react-awesome-reveal"
import { useRouter } from 'next/navigation'
import { TransitionLinks } from '@/lib/TransitionLinks'

const GamesSection = ({games}:any) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])
  const router = useRouter()

  return (
    <motion.div
      className='h-auto bg-opacity-80 bg-contain '
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: `url('/secondBackground.webp')`, backgroundSize: '100% 100%' }}
    >
      <div className='h-[600vh] relative ' ref={ref} >
        <Fade direction='down' delay={600} cascade damping={1e-1} triggerOnce={true} >
          <div className='w-auto h-auto flex items-center justify-center text-6xl md:text-7xl mt-10 text-center text-white '>
            Our Games
          </div>
        </Fade>
        <div className='sticky top-0 h-screen w-full flex items-center gap-4 overflow-x-hidden '>
          <motion.div style={{ x }} className='flex'>
            <div className={`w-screen h-screen flex md:flex-row flex-col gap-10 justify-center items-center `} >
              <div className='flex flex-col items-center gap-y-8'>
                <span className='text-5xl font-bold text-white drop-shadow-lg '>Just Scroll</span>
                <span className='text-4xl md:text-5xl font-bold text-white drop-shadow-lg '>And discover with us</span>
              </div>
              <div className='relative w-40 h-40 md:w-60 md:h-60'>
                <Image src='/gameIntro.png' alt='gameIntro' fill />
              </div>
            </div>
            {games.map((game:any) => (
              <div key={game.title} className={`w-screen h-screen flex justify-center items-center  `}  >
                <div className='flex flex-col items-center lg:items-start gap-5 p-4  '>
                  <span className='text-4xl text-white font-bold '>{game.title}</span>
                  <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] border border-white rounded-md'>
                      <Image src={game.mainImage} alt='mainImage' fill />
                    </div>
                    <span className='text-white text-xl font-semibold w-72 lg:w-[500px]'>{game.description}</span>
                  </div>
                  <TransitionLinks href={`/games/${game._id}`} className='w-[50%] lg:ml-[550px]'>
                    <div className='w-full bg-gray-800 text-white font-bold text-center p-4 rounded-lg'> More Details</div>
                  </TransitionLinks>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-full h-auto flex flex-col justify-center items-center text-center ' >
        <Fade direction='down' delay={400} cascade damping={1e-1}  >
          <div>
            <h1 className='text-3xl mt-0 md:mt-5 lg:text-5xl lg:w-full w-[400px] text-white text-center font-bold drop-shadow-lg '>Want work with US ?</h1>
          </div>
        </Fade>
        <div className='relative'>
          <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300' className='w-80 h-80 md:w-[400px] md:h-[400px]'>
            <defs>
              <path
                id='circlePath'
                d='M 150 , 150 m -60,0 a 60,60 0 0,1,120,0 a 60,60 0 0,1 -120,0'
              />
            </defs>
            <text fill='#000' className='bg-white'>
              <textPath xlinkHref='#circlePath' className='text-xl'>Game Developers and UI designers</textPath>
            </text>
          </motion.svg>
          <TransitionLinks href='/contact' className='w-28 h-28 absolute top-0 left-0 bottom-0 right-0 m-auto rounded-full bg-gray-900 flex justify-center items-center text-white font-semibold  '>
            <div className='hover:scale-110 duration-200 ease-in'>
              Contact
            </div>
          </TransitionLinks>
        </div>
      </div>
    </motion.div >
  )
}

export default GamesSection