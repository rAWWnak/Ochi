import { motion } from 'framer-motion'
import React from 'react'
 
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".09" className='w-full h-[50vh] py-14 rounded-3xl text-white bg-[#004d43]'>
        <div className=' flex items-center overflow-hidden whitespace-nowrap border-b-2 border-t-2 border-zinc-400 '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease: "linear", duration:8, repeat: Infinity}} className='text-[17vw] -mt-5 leading-none uppercase font-bold pr-10 '> We are Ochi  </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease: "linear", duration:8, repeat: Infinity}} className='text-[17vw] -mt-5 leading-none uppercase font-bold pr-10'> We are Ochi  </motion.h1>
        </div>
    </div>
  )
}
 
export default Marquee