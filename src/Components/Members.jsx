import React from 'react';
import mem1 from '../assets/Member.png';
import mem2 from '../assets/Member2.png';
import mem3 from '../assets/Member3.png';
import { motion } from 'framer-motion'

function Members() {

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
        <motion.div className="flex flex-col justify-center items-center mt-12" id='service' initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={ConVarient}>

            <motion.h1 className='text-center text-3xl' variants={TopVarient}>Manage your entire community<br /> in a single system </motion.h1>
            <motion.p className='mt-8  text-lg mb-12' variants={TopVarient}>Who is Nextent suitable for ?</motion.p>

            <motion.div className="flex justify-center gap-16 items-center flex-wrap" initial='hidden' whileInView={'visible'} variants={ConVarient} viewport={{once : true}}>

                <motion.div className="flex justify-center items-center gap-4 flex-col h-72 w-80 shadow-lg rounded-xl p-4" variants={TopVarient}>
                    <img src={mem1}></img>
                    <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </motion.div>

                <motion.div className="flex justify-center items-center flex-col h-72 w-80 shadow-lg rounded-xl p-4" variants={TopVarient}>
                    <img src={mem2}></img>
                    <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </motion.div>

                <motion.div className="flex justify-center items-center flex-col h-72 w-80 shadow-lg rounded-xl p-4" variants={TopVarient}>
                    <img src={mem3}></img>
                    <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Members
