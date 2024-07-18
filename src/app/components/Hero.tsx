'use client'
import Image from 'next/image'
import React from 'react'
import { bg, hero } from '../../../public'
import { motion } from "framer-motion"

const Hero = () => {
  const varients={
    hidden: {x:0,y:70,opacity:0.25},
    visible:{x:0,y:10,opacity:1,transition:{delay:0.05}}
  }
  return (
    <div className='hero-section'>
      <div className='hero-container'>
       <div className='object-cover'>
        <Image src={bg} height={100} width={1400} alt='banner'/>
       </div>
       <div className="">
        <motion.div
        initial='hidden'
        animate='visible'
        variants={varients} >
        <Image
        src={hero}
        height={100}
        width={600}
        alt='detailed headphone'
        />
</motion.div>
       </div>
      </div>
     
    </div>
  )
}

export default Hero