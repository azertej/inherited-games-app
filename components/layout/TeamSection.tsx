'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
// @ts-ignore
import { Fade } from "react-awesome-reveal"

const TeamSection = ({teams}: any) => {

  const [imagesIndexes, setImageIndexes] = useState([0, 1, 2, 3, 4])

  const handleIndex = () => {
    setImageIndexes((prevIndex) => {
      const updatedIndex = prevIndex.map((index) => (index + 1) % 5)
      return updatedIndex
    })
  }
  const positions = [
    'center',
    'left',
    'left1',
    'right',
    'right1'
  ]

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 2 },
    left: { x: '-90%', scale: 0.5, zIndex: 1 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 2 },
  }

  const imageColor = (position: any) => {
    if (position !== 'center') return 'filter grayscale'
  }

  return (
    <section className='flex flex-col gap-6 justify-center items-center h-screen mt-16 lg:mt-0  '  >
      <Fade direction='down' delay={200} cascade damping={1e-1} className='text-center' >
        <span className='text-3xl lg:text-5xl font-bold text-white  '>Get to know our team</span>
      </Fade>
      <div className='relative w-full h-3/4 flex justify-center items-center'>
        {teams.map((teammate: any, index: any) => (
          <motion.img
            key={teammate.Teammate}
            src={teammate.personImage}
            alt={teammate.index}
            className= {`absolute rounded-[12px] h-[300px] md:h-full max-w-[150px] md:max-w-[350px] ${imageColor(positions[imagesIndexes[index]])} `}
            initial = 'center'
            animate = { positions[imagesIndexes[index]]}
            variants = { imageVariants }
            transition = {{ duration: 0.5 }}
          />
        ))}
      </div>
      <Button className='mt-[-40px] md:mt-2 text-xl' onClick={handleIndex}>Swap</Button>
    </section>
  )
}

export default TeamSection