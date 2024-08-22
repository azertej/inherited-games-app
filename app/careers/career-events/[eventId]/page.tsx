'use client'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Page = ({ params }: { params: { eventId: number } }) => {

    const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL || 'http://localhost:3000'
    const [events, setEvents] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch(`${externeURL}/api/Career-events/get-events`)
            const data = await response.json()
            setEvents(data)
        }
        fetchEvents()
    }, [externeURL])

    const { eventId } = params
    const currentEevent : any = events.find((event: any) => {
        return event._id = eventId
    })
    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
        setImageIndex(index => {
            if (index == currentEevent.eventImages.length - 1) return 0
            return index + 1
        })
    }
    const previousImage = () => {
        setImageIndex(index => {
            if (index == 0) return currentEevent?.eventImages.length - 1
            return index - 1
        })
    }
    return (
        <section className='flex justify-center items-center lg:h-full h-auto w-full mt-20 md:mt-0 ' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}>
            <div className='flex flex-col gap-y-5 items-center mt-28 mb-12 '>
                <span className='text-6xl font-bold text-orange-600'>{currentEevent?.title} </span>
                <span className='font-bold text-yellow-400'>{currentEevent?.Date} </span>
                <span className='md:text-xl text-md font-semibold max-w-[300px] md:max-w-[1000px] text-white'>{currentEevent?.EventDescription} </span>
                <div className='relative '>
                    <div className='w-[300px] h-[400px] md:w-[900px] md:h-[500px] rounded-md border-[2px] border-solid border-white ease-in-out duration-500 '
                        style={{ backgroundImage: `url(${currentEevent?.eventImages[imageIndex]})`, backgroundSize: '100% 100%' }} />
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