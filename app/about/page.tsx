'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiRidingFill, RiVidiconFill, RiVipCrown2Fill } from 'react-icons/ri'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
// @ts-ignore
import { Fade } from "react-awesome-reveal"


const infoData = [
  { icon: <RiRidingFill />, text: 'Inherited Games' },
  { icon: <RiVidiconFill />, text: 'inheritedgames@gmail.com' },
  { icon: <RiVipCrown2Fill />, text: 'Created On 11 Jan ,2024' },
  { icon: <RiRidingFill />, text: 'Pôle technologique de Sousse' }
]


const Page = () => {
  const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL || 'http://localhost:3000'
  const [infos, setInfos] = useState<any>([])
  const [imageIndex, setImageIndex] = useState(0)



  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const response = await fetch(`${externeURL}/api/aboutPage/get-aboutPage`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setInfos(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchInfos()
  }, [externeURL])

  const nextImage = () => {
    setImageIndex((index) => {
      if (infos?.[0]?.StuffsImages && index === infos[0].StuffsImages.length - 1) return 0
      return index + 1
    })
  }

  const previousImage = () => {
    setImageIndex((index) => {
      if (infos?.[0]?.StuffsImages && index === 0) return infos[0].StuffsImages.length - 1
      return index - 1
    })
  }

  if (!infos || infos.length === 0) {
    return <div className='text-3xl'>Loading...</div>
  }

  return (
    <section className='flex flex-col justify-center items-center lg:h-full h-auto w-full' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}>
      <div className='mt-20 mb-16'>
        {infos.map((info: any, index: any) => (
          <div key={index} className='mx-0 md:mx-auto mt-20 flex flex-col items-center gap-y-20 bg-gray-100 bg-opacity-40 py-14 lg:p-10 rounded-xl'>
            <Fade direction='up' delay={400} cascade damping={0.1} triggerOnce={true} className='mx-auto'>
              <span className='text-5xl text-center font-semibold tracking-[3px] text-white'>ABOUT US</span>
            </Fade>
            <div className='flex flex-col md:flex-row justify-center items-center w-full'>
              <div className='flex flex-col gap-y-10 lg:flex-row justify-between items-center w-screen md:w-[900px]'>
                <Fade direction='left' delay={600} cascade damping={0.1} triggerOnce={true}>
                  <div className='max-w-[600px] flex flex-col gap-y-3'>
                    <span className='text-3xl font-bold'>WHO <span className='text-blue-900'>ARE WE</span></span>
                    <p className='max-w-[300px] md:max-w-[1000px] text-sm md:text-lg font-semibold'>{info.description}</p>
                  </div>
                </Fade>
                <Fade direction='right' delay={600} cascade damping={0.1} triggerOnce={true}>
                  <div className='bg-bottom relative w-[200px] h-[150px]'>
                    <Image src={info.aboutPageImage} fill alt="About Page Image" />
                  </div>
                </Fade>
              </div>
            </div>
            <Fade direction='down' delay={800} cascade damping={0.1} triggerOnce={true}>
              <div className='mt-5 mx-auto md:ml-0 p-2 max-w-[250px] md:max-w-[1000px] flex flex-col lg:flex-row gap-x-10 gap-y-5 border border-solid border-gray-500 rounded-md'>
                {infoData.map((data, idx) => (
                  <div key={idx} className='font-bold flex flex-row md:flex-col items-center md:items-start gap-x-3'>
                    {data.icon}
                    {data.text}
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-y-5 items-center mb-10'>
        <span className='text-4xl font-bold text-white md:p-5 p-2 bg-gradient-to-r from-violet-900 to-blue-500 rounded-lg tracking-[3px]'>Feel Our Vibes</span>
        <div className='relative my-5'>
          {infos[0]?.StuffsImages && (
            <div className=' w-[300px] h-[400px] md:w-[1200px] md:h-[550px] rounded-md border-[2px] border-solid border-white ease-in-out duration-500'
              style={{ backgroundImage: `url(${infos[0].StuffsImages[imageIndex]})`, backgroundSize: '100% 100%' }} />
          )}
          <button className='absolute top-0 bottom-0 left-0' onClick={previousImage}>
            <ArrowBigLeft className='text-white hover:bg-black hover:bg-opacity-20' size={40} />
          </button>
          <button className='absolute top-0 bottom-0 right-0' onClick={nextImage}>
            <ArrowBigRight className='text-white hover:bg-black hover:bg-opacity-20' size={40} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page
