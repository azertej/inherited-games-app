'use client'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Page = ({ params }: { params: { newsId: number } }) => {

    const externeURL = process.env.NEXT_PUBLIC_REMOTE_API_URL
    const [news, setNews] = useState([])
    useEffect(() => {
        const getNews = async () => {
            try {
                const url = `${externeURL}/api/news/get-news`
                console.log('Fetching URL:', url)
                const response = await fetch(url, {
                  redirect: 'follow'
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setNews(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        getNews()
    }, [externeURL])

    const { newsId } = params
    const currentNews: any = news.find((news: any) => {
        return news._id == newsId
    })

    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
        setImageIndex(index => {
            if (index == currentNews.NewsImages.length - 1) return 0
            return index + 1
        })
    }
    const previousImage = () => {
        setImageIndex(index => {
            if (index == 0) return currentNews?.NewsImages.length - 1
            return index - 1
        })
    }
    return (
        <section className='flex justify-center items-center lg:h-full h-auto w-full ' style={{ backgroundImage: `url('/backround.jpg')`, backgroundSize: '100% 100%' }}>
            <div className='flex flex-col gap-y-10 items-center mt-36 md:mt-36 mb-8'>
                <span className='md:text-6xl text-4xl font-bold text-orange-600'>{currentNews?.title} </span>
                <span className='md:text-xl text-md font-semibold max-w-[300px] md:max-w-[1000px] text-white'>{currentNews?.description} </span>
                <div className='relative '>
                    <div className='w-[300px] h-[400px] md:w-[900px] md:h-[500px] rounded-md border-[2px] border-solid border-white translate ease-in-out duration-500'
                        style={{ backgroundImage: `url(${currentNews?.NewsImages[imageIndex]})`, backgroundSize: '100% 100%' }} />
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