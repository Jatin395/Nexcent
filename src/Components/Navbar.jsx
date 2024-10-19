import React, { useRef, useState, useEffect } from 'react';
import icon from '../assets/Icon.png';
import {motion} from'framer-motion'


function Navbar() {
    const mob_v = useRef(null);

    const TopVarient = {
        hidden : {opacity : 0, y : -120},
        visible : {opacity : 1, y : 0,
          transition : {
            duration : 0.8,
            ease : 'easeInOut'
          },
        }
      }
      const ConVarient = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    function showmenu() {
        if (mob_v.current) {
            mob_v.current.classList.toggle('hidden');
        }
    }
    
    function hidemenu() {
        if (mob_v.current) {
            mob_v.current.classList.add('hidden');
        }
    }

    return (
        <>
            <div className="sticky bg-white top-0 shadow-sm z-10 flex justify-around items-center p-4">

                <motion.div className="flex gap-2" initial='hidden' animate='visible' viewport={{once:true}} variants={TopVarient}>
                    <img src={icon}></img>
                    <h2 className='text-2xl font-bold cursor-pointer'>Nexcent</h2>
                </motion.div>

                <div className="md:hidden">
                    <button onClick={showmenu} className='text-xl'><i class="ri-menu-line"></i></button>
                </div>
                {/* window view */}
                <motion.div className="hidden md:flex gap-12"> 

                    <motion.ul className='flex gap-6 text-lg' initial='hidden' animate='visible' viewport={{once:true}} variants={ConVarient}>
                        <motion.li variants={TopVarient}><a href='#home' className='hover:text-green-400'>Home</a></motion.li>
                        <motion.li variants={TopVarient}><a href='#service' className='hover:text-green-400'>Services</a></motion.li>
                        <motion.li variants={TopVarient}><a href='#feautre' className='hover:text-green-400'>Feature</a></motion.li>
                        <motion.li variants={TopVarient}><a href='#pro' className='hover:text-green-400'>Product</a></motion.li>
                        <motion.li variants={TopVarient}><a href='#test' className='hover:text-green-400'>Testimoials</a></motion.li>                        
                    </motion.ul>

                </motion.div>

                <motion.div className="hidden md:flex gap-8"  initial='hidden' animate='visible' viewport={{once:true}} variants={ConVarient}>
                    <motion.button variants={TopVarient} className=' text-xl hover:border border-green-400 p-1 w-28 hover:bg-green-200 rounded-md'>Login</motion.button>
                    <motion.button variants={TopVarient} className='bg-green-400 rounded-md p-2 text-white w-32 hover:text-green-400 hover:bg-white md:border border-gray-400'>Sign up</motion.button>
                </motion.div>

                {/* moblie view */}
                <div className="hidden fixed inset-0 z-10 bg-slate-300 md:hidden p-4" id='mob_v' ref={mob_v}>

                    <div className="flex justify-around">

                        <div className="flex gap-2">
                            <img src={icon}></img>
                            <h2 className='text-xl font-semibold'>Nexcent</h2>
                        </div>

                        <div className="md:hidden">
                            <button onClick={showmenu}><i class="ri-close-large-line"></i></button>
                        </div>
                    </div>

                    <ul className='mt-8 flex flex-col text-xl justify-around items-center gap-4'>
                    <li><a href='#home' className='hover:text-green-400' onClick={hidemenu}>Home</a></li>
                        <li><a href='#service' className='hover:text-green-400' onClick={hidemenu}>Services</a></li>
                        <li><a href='#feautre' className='hover:text-green-400' onClick={hidemenu}>Feature</a></li>
                        <li><a href='#pro' className='hover:text-green-400' onClick={hidemenu}>Product</a></li>
                        <li><a href='#test' className='hover:text-green-400' onClick={hidemenu}>Testimoials</a></li>                         
                        <button className='hover:text-green-400' onClick={hidemenu}>Login</button>
                        <button className='bg-green-400 rounded-md p-2 text-white w-32 hover:text-green-400 hover:bg-white md:border border-gray-400'>Sign up</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
