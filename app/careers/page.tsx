'use client'


import useScrollProgress from '@/hooks/useScrollProgress'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// @ts-ignore
import { Fade } from "react-awesome-reveal"

const Page = () => {
  const externeURL = 'https://inherited-games-bo.vercel.app'
  const completion = useScrollProgress()
  const [events, setEvents] = useState<any>([])
  const router = useRouter()
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = `${externeURL}/api/Career-events/get-events`
        console.log('Fetching URL:', url)
        const response = await fetch(url, {
          redirect: 'follow'
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }

    }
    fetchEvents()
  }, [externeURL])

  return (
    <section className='relative flex flex-col justify-center items-center h-auto lg:h-full bg-opacity-80' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}>
      <div className='absolute flex justify-center h-full w-full'>
        <span style={{ transform: `translateY(${completion - 100}%)` }} className='absolute bg-gray-100 z-10 top-0 bottom-0 w-2 transition-all duration-500'></span>
      </div>
      <span className='mt-[200px] z-30 text-white text-7xl'>Our Story</span>
      <div className='flex flex-col w-[60%]  gap-y-20 mb-10 mt-28 z-20'>
        {events.map((event: any) => (
          <div key={event._id} className='flex flex-col items-center gap-y-10' >
            <Fade direction={event.Slidedirection} delay={200} cascade damping={1e-1} >
              <div onClick={() => router.push(`/careers/career-events/${event._id}`)}
                className=' w-[300px] md:w-[600px] h-auto md:h-80 bg-slate-800 border border-solid border-black rounded-3xl flex flex-col md:flex-row  gap-6 justify-center items-center py-5 md:py-0 cursor-pointer'>
                <div className='flex flex-col gap-y-3 max-w-[250px] '>
                  <span className='text-xl font-bold text-blue-600'>{event.Date} </span>
                  <span className='text-3xl font-bold text-muted-foreground'>{event.title} </span>
                  <span className='text-lg font-bold text-white'>{event.EventMaindescription} </span>
                </div>
                <div className='relative w-52 h-48 md:w-56 md:h-60'>
                  <Image src={event.eventMainImage} alt='eventMainImage' fill />
                </div>
              </div>
            </Fade>
            <Fade direction='top' delay={200} cascade damping={1e-1}>
              <div className='w-32 h-32 rounded-full bg-white flex justify-center items-center'>
                <span className='font-bold text-2xl text-black'>{event.year}</span>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page