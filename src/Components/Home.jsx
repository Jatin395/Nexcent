import React from 'react';
import img from '../assets/home.png'
import {motion} from 'framer-motion'

function Home() {

  const LeftVarient = {
    hidden : {opacity : 0, x : 120},
    visible : {opacity : 1, x : 0,
      transition : {
        duration : 0.8,
        ease : 'easeInOut'
      }
    }
  }
  const RightVarient = {
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
    <div className="flex justify-evenly mt-12 flex-col gap-4 items-center md:flex-row p-4" id='home'>

        <motion.div className="p-4" initial='hidden' animate='visible' variants={LeftVarient}>
            <h1 className='text-center md:text-left text-3xl md:text-6xl'>Lessons and insights <br/><span className='text-green-500'>From  8 years</span></h1>
            <p className='mt-4 text-center md:text-left'>Where to grow your business as a photographer.site or media ?</p>

            <div className="flex items-center justify-center md:justify-start">
            <button className='mt-4 text-center bg-green-500 text-white rounded-sm w-40 p-2'>Register</button>
            </div>
        </motion.div>

        <motion.div className="p-4" initial='hidden' animate='visible' variants={RightVarient}>
            <img src={img} className=''></img>
        </motion.div>
        
    </div>
    </>
  )
}

export default Home
