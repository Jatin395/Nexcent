import React from 'react'
import {motion} from 'framer-motion'

function Demo() {
    const TopVarient = {
        hidden: { opacity: 0, y: 120 },
        visible: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut'
            },
        }
    }
    const ConVarient = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }
    return (
        <>
            <motion.div className="flex flex-col justify-center items-center mt-12 h-96 bg-gray-100" initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={ConVarient}>
                <motion.h1 variants={TopVarient} className='text-5xl md:text-6xl text-center'>Pellentesque suscript <br /> fringilla libero eu.</motion.h1>

                <motion.div className="flex items-center justify-center md:justify-start" variants={TopVarient}>
                    <motion.button className='mt-10 text-center bg-green-500 text-white rounded-md w-40 h-12 hover:text-green-400 hover:bg-white hover:border border-gray-400'>Get a Demo</motion.button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Demo
