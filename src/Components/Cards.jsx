import { motion } from 'framer-motion'
import React from 'react'
function Cards() {
  const changeColor =() => {
    
  }
  return (
    <div className='w-full h-screen bg-zinc-800 flex gap-5 items-center px-24'>
        <div className='cardcontainer w-1/2 h-[50vh] '>
            <div className='card rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute left-9 bottom-7 border-2 border-[#cdea68] rounded-2xl px-3 py-1 text-[#cdea68]'>&copy;2019-2020</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 flex gap-5 h-[50vh] '>
            <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            
            <button class="hover:bg-[##CDEa68]"  className=' absolute left-9 bottom-7 border-2 border-[#fff] rounded-2xl px-3 py-1 text-[#fff]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className=' absolute left-9 bottom-7 border-2 border-[#fff] rounded-2xl px-2 py-1 text-[#fff]'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards