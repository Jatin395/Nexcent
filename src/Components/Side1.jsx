import React from 'react';
import img from '../assets/Frame1.png';
import {motion} from 'framer-motion'

function Side1() {
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
            <div className="flex justify-evenly mt-12 flex-col gap-4 items-center md:flex-row p-4" id='feautre'>

                <motion.div className="p-4" initial='hidden' whileInView={'visible'} variants={LeftVarient} viewport={{once:true}}>
                    <img src={img} className=''></img>
                </motion.div>

                <motion.div className="p-4 w-1/2" initial='hidden' whileInView={'visible'} variants={RightVarient} viewport={{once:true}}>
                    <h1 className='text-3xl mb-6 text-center md:text-left'>The unseen of spending three <br />years at Pixelgrade </h1>
                    <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam. Repellendus nobis veniam, molestiae magnam libero fuga, sequi dignissimos modi non dolorum ipsum. Eum aliquam recusandae unde sequi enim. Debitis placeat ut aliquid adipisci. Sit vero maiores qui, veritatis quibusdam dolorum iure illo fugit provident facere rem a. Ea, in.</p>

                    <div className="flex items-center justify-center md:justify-start">
                        <button className='mt-6 text-center bg-green-500 text-white rounded-sm w-40 p-2  hover:text-green-400 hover:bg-white hover:border border-gray-400 h-12'>Learn More</button>
                    </div>
                </motion.div>


            </div>
        </>
    )
}

export default Side1
