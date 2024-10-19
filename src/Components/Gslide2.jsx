import React from 'react'
import img1 from '../assets/image9.png';
import img2 from '../assets/Frame10.png';
import {motion} from 'framer-motion'

function Gslide2() {

    const LeftVarient = {
        hidden : {opacity : 0, x : -120},
        visible : {opacity : 1, x : 0,
          transition : {
            duration : 0.8,
            ease : 'easeInOut'
          }
        }
      }

      const RightVarient = {
        hidden : {opacity : 0, x : 120},
        visible : {opacity : 1, x : 0,
          transition : {
            duration : 0.8,
            ease : 'easeInOut'
          }
        }
      }
    return (
        <>
            <motion.div className="flex justify-evenly mt-12 flex-col gap-4 items-center md:flex-row p-4 bg-gray-100" id='side'>

                <motion.div className="p-4" initial='hidden' whileInView={'visible'} variants={LeftVarient} viewport={{once : true}}>
                    <img src={img1}></img>
                </motion.div>

                <motion.div className="p-4 w-1/2" initial='hidden' whileInView={'visible'} variants={RightVarient} viewport={{once : true}}>
                 <p className='text-center md:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, praesentium est? Odio, quod repellendus magnam sapiente illo nisi quis ipsum quibusdam ut, ipsa animi dignissimos. Hic veniam laudantium maxime maiores vel, fugiat mollitia officiis et sunt libero, molestiae reprehenderit illum odio ratione dolorem eligendi tempora labore blanditiis totam repellendus sit ut sequi repudiandae reiciendis! Reprehenderit tenetur dolorum, culpa veniam ex beatae id earum placeat! Totam reprehenderit, maiores tenetur sit quaerat explicabo laboriosam iste amet. Ex velit facilis, vero earum itaque dolor et placeat delectus fugit nostrum ab dolores, ut praesentium aliquam dignissimos repellat culpa assumenda minus ea, fugiat laborum. Minima?</p>
                 <p><span className='text-green-500 text-lg font-bold'>Lorem, ipsum.</span></p>
                 <p>Lorem ipsum dolor sit.</p>
                 <img src={img2} className='mt-8'></img>
                </motion.div>


            </motion.div>
        </>
    )
}

export default Gslide2
