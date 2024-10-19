import React from 'react'
import logos from '../assets/Logos.png';
import {motion} from 'framer-motion'

function Clients() {
  const TopVarient = {
    hidden : {opacity : 0, y : 120},
    visible : {opacity : 1, y : 0,
      transition : {
        duration : 0.8,
        ease : 'easeInOut'
      },
    }
  }

  return (
    <>
    <div className="flex justify-center items-center flex-col mt-36 p-8">
        <motion.h2 className='text-3xl mb-8 font-semibold' initial='hidden' whileInView={'visible'} variants={TopVarient} viewport={{once:true}}>Our Clients</motion.h2>
        <motion.p initial='hidden' whileInView={'visible'} variants={TopVarient} className='text-md text-center w-full md:text-lg mb-12'  viewport={{once:true}}>We have been working with some Fouture 500+ clients</motion.p>
        <motion.img src={logos} initial='hidden' whileInView={'visible'} variants={TopVarient} className='mb-32 w-full'  viewport={{once:true}}></motion.img>
    </div>
    </>
  )
}

export default Clients
