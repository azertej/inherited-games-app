'use client'
import React from 'react'
// @ts-ignore

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
// @ts-ignore
import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { useRouter } from 'next/navigation'


const NewsSection = ({ news }: any) => {
  const router = useRouter()
  return (
    <section className='flex flex-col gap-8 items-center justify-center h-auto py-24 shadow-xl ' id='news'>
      <span className='text-white text-4xl font-bold tracking-[6px]'>What New ?</span>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%] '
      >
        {news.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col gap-x-6 relative group shadow-lg text-white px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer rounded-lg'>
              <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${item.NewsmainImage})` }} />
              <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-20' />
              <div className=' relative flex flex-col gap-2'>
                <span className='font-bold text-white text-2xl'>{item.title}</span>
                <span className=''>{item.mainDescription}</span>
              </div>
              <div className=' flex items-center ' onClick={() => router.push(`news/${item._id}`)}>
                <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100' />
                <span className='text-white font-bold absolute bottom-7 ml-10 '>Click For More Details</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default NewsSection