import React from 'react'
import { motion } from 'framer-motion'

function Gslide1() {

    const LeftVarient = {
        hidden: { opacity: 0, x: -120 },
        visible: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut'
            }
        }
    }

    const RightVarient = {
        hidden: { opacity: 0, x: 120 },
        visible: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut'
            }
        }
    }
    return (
        <>
            <div className="flex justify-evenly mt-12 md:h-[500px] flex-col gap-4 items-center md:flex-row p-4 bg-gray-100">

                <motion.div className="p-4" initial='hidden' whileInView={'visible'} variants={LeftVarient} viewport={{once:true}}>
                    <h1 className='text-4xl mb-4 text-center md:text-left'>Helping a local  <br /> <span className='text-green-500'>Business reinvent itself </span></h1>
                    <p className='text-center'>We reached here with our hard work and dedication</p>
                </motion.div>

                <motion.div className="p-4 text-start -ml-12 md:ml-1 w-1/2" initial='hidden' whileInView={'visible'} variants={RightVarient} viewport={{once:true}}>

                    <div className="flex justify-evenly items-center gap-12">

                        <div className="">
                            <h2 className='mb-4 text-xl font-bold'><i class="ri-group-line"></i> 2,00,000 <br /> <span>Members</span></h2>
                            <h2 className='text-xl font-bold'><i class="ri-message-2-fill"></i> 12,000 <br /> Clubs</h2>
                        </div>

                        <div className="">
                            <h2 className='mb-4 text-xl font-bold'><i class="ri-calendar-event-fill"></i> 2,00,000 <br /> Event Bookings</h2>
                            <h2 className='text-xl font-bold'><i class="ri-secure-payment-fill"></i> 12,000 <br /> Payments</h2>
                        </div>
                    </div>

                </motion.div>


            </div>
        </>
    )
}

export default Gslide1
