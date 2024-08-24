'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Joystick } from 'lucide-react'
import { Palette } from 'lucide-react'
import { Server } from 'lucide-react'
// @ts-ignore
import { Fade } from "react-awesome-reveal"

const Page = ({ params }: { params: { gameId: number } }) => {

  const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL || 'https://inherited-games-bo.vercel.app/'
  const [games, setGames] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${externeURL}/api/games/get-games`)
      const data = await response.json()
      setGames(data)
    }
    fetchPosts()
  }, [externeURL])

  const { gameId } = params
  const currentGame: any = games.find((game: any) => {
    return game._id == gameId
  }
  )
  const infoTitleStyle = 'h-[50%] bg-yellow-400 text-white text-xl font-bold shadow-2xl flex justify-center items-center gap-x-2 rounded-br-3xl'
  const infoStyle = 'h-[50%] bg-white text-black flex justify-center items-center rounded-tr-3xl'
  return (
    <section className='w-full flex items-center justify-center text-white' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}>
      <div className='h-full w-full '>
        <div className='  w-full pt-36 pb-10 flex flex-col justify-center items-center '>
          <Fade direction='down' delay={200} cascade damping={1e-1} triggerOnce={true} className='text-center' >
            <span className='text-4xl text-gray-200 font-bold'>{currentGame?.title}</span>
            <span className='text-2xl text-orange-400 font-bold  uppercase'>{currentGame?.mainDescription} </span>
          </Fade>
          <div className='flex mt-5'>
            <div className='flex flex-col items-center md:flex-row justify-center gap-10'>
              <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true} className='text-center' >
                <div className="relative flex gap-x-10 p-5 border-[2px] border-solid border-white w-full h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentGame?.mainImage})`, opacity: 0.5, zIndex: 0, }}
                  />
                  <div className="relative z-10 flex flex-col items-center md:flex-row gap-5">
                    <div className="relative w-full md:w-80 h-60 md:h-full ">
                      <Image src={currentGame?.images[0]} alt='image1' fill />
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-y-3">
                      <div className="relative w-48 md:w-60 h-48 border-[4px] border-solid border-white shadow-2xl">
                        <Image src={currentGame?.images[1]}  alt='image2' fill />
                      </div>
                      <div className="relative w-72 md:w-80 h-44 border-[4px] border-solid border-white shadow-2xl">
                        <Image src={currentGame?.images[2]}  alt='image3' fill />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true} className='text-center' >
                <div className='flex flex-col gap-y-3'>
                  <div className='w-52 h-28'>
                    <div className={infoTitleStyle}>
                      <Joystick size={40} />
                      GENRE
                    </div>
                    <div className={infoStyle}>{currentGame?.genre}</div>
                  </div>
                  <div className='w-52 h-28'>
                    <div className={infoTitleStyle}>
                      <Palette size={40} />
                      ART STYLE
                    </div>
                    <div className={infoStyle}>{currentGame?.artStyle}</div>
                  </div>
                  <div className='w-52 h-28'>
                    <div className={infoTitleStyle}>
                      <Server size={40} />
                      PLATFORMS
                    </div>
                    <div className={infoStyle}>{currentGame?.platforms}</div>
                  </div>
                </div>
              </Fade>

            </div>
          </div>
        </div>
        <div className=' md:w-full h-auto py-[30px] '>
          <div className='flex flex-col gap-y-5 px-3 md:px-[100px] '>
            <Fade direction='down' delay={600} cascade damping={1e-1} triggerOnce={true} >
              <div className='flex-col w-full '>
                <span className='text-2xl font-bold text-orange-400'>OVERVIEW</span>
                <p className='text-md '>{currentGame?.description}</p>
              </div>
            </Fade>

            <div className='flex flex-col gap-y-4'>
              <Fade direction='down' delay={200} cascade damping={1e-1} triggerOnce={true} >
                <span className='text-2xl font-bold text-orange-400'>FEATURES</span>
              </Fade>
              <div className='flex flex-col gap-y-2'>
                <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true} >
                  <div className='flex flex-col md:flex-row gap-2'>
                    <span className='text-gray-500 font-bold text-xl'>⬤ Grapghics and Animation:</span>
                    <span className='text-md'>{currentGame?.graphic}</span>
                  </div>
                </Fade>
                <Fade direction='down' delay={600} cascade damping={1e-1} triggerOnce={true} >
                  <div className='flex flex-col md:flex-row gap-2'>
                    <span className='text-gray-500 font-bold text-xl'>⬤ myCAREER Mode:</span>
                    <span className='text-md'>{currentGame?.myCareer}</span>
                  </div>
                </Fade>
                <Fade direction='down' delay={800} cascade damping={1e-1} triggerOnce={true} >
                  <div className='flex flex-col md:flex-row gap-2'>
                    <span className='text-gray-500 font-bold text-xl'>⬤ myTEAM Mode:</span>
                    <span className='text-md'>{currentGame?.myTeamMode}</span>
                  </div>
                </Fade>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page