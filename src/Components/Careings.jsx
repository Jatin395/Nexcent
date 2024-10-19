import React from 'react'
import { motion } from 'framer-motion'

function Careings() {

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
            <motion.div className="flex flex-col gap-10 justify-center items-center mt-20" id='test' initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={ConVarient}>

                <motion.div className="" variants={TopVarient}>
                    <h1 className='text-center text-3xl'>Caring is the new marketing<br /></h1>
                    <p className='mt-8 mb-8 text-center w-[400px] md:w-[600px] lg:w-[1000px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore officiis maiores unde odio natus illo repellat impedit recusandae laborum, ex eveniet mollitia corrupti neque amet, consequatur repudiandae, voluptatem sed sint rem doloremque at laboriosam optio? Veniam quasi maiores quaerat sequi!</p>
                </motion.div>

                <motion.div className="flex justify-center gap-16 mt-12 items-center flex-wrap" initial='hidden' whileInView={'visible'} viewport={{once : true}} variants={ConVarient}>

                    <motion.div variants={TopVarient} className="flex justify-center items-center flex-col w-72 md:w-80 p-2 h-72 shadow-lg rounded-md bg-gray-100 hover:scale-105">
                        <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                        <button className='text-green-500 text-xl hover:text-lg'>Read More <i class="ri-arrow-right-line"></i></button>
                    </motion.div>

                    <motion.div variants={TopVarient} className="flex relative justify-center items-center flex-col w-72 md:w-80 p-2 h-72 shadow-lg rounded-md bg-gray-100 group hover:scale-105">
                        <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                        <button className='text-green-500 text-xl hover:text-lg'>Read More <i class="ri-arrow-right-line"></i></button>
                    </motion.div>

                    <motion.div variants={TopVarient} className="flex justify-center items-center flex-col w-72 md:w-80 p-2 h-72 shadow-lg rounded-md bg-gray-100 hover:scale-105">
                        <p className='text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                        <button className='text-green-500 text-xl hover:text-lg'>Read More <i class="ri-arrow-right-line"></i></button>
                    </motion.div>
                </motion.div>

            </motion.div>
        </>
    )
}

export default Careings
