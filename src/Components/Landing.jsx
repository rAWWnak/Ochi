import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 pt-1 ' >
    <div className='textstructure mt-32 px-20 '>
        {["We Create","Eye Opening", "Presentations"].map((items, index) => {
            return <div className='masker'>
              <div className='w-fit flex items-center'>
                {index === 1 && ( 
                  <motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration: 1}} className='rounded-md border-black w-[7vw] h-[4.5vw] -bottom-[.4vw] relative border bg-[#cdea68]'></motion.div>)}
                <h1 className='uppercase font-light leading-[5.5vw] tracking-tight text-8xl' >{items}</h1>
              </div>        
        </div>
        })}
    </div>
    <div className='border-t-2 border-zinc-800 mt-40 flex items-center justify-between py-5 px-20'>
      {["For public and private companies",
        "From the first pitch to IPO"].map((item,index)=>(
        <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase flex items-center gap-3 ' >Start the Project
          <div className='w-8 h-8 border-[2px] border-zinc-500 rounded-full flex items-center justify-center'>
          <FaArrowUp />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Landing