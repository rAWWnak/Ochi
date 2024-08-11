import { motion, useAnimate, useAnimation } from 'framer-motion'
import React from 'react'
import Cards from './Cards';

function Projects() {
  const cards = [useAnimation(), useAnimation ()];
  const handleHover = (index)=>{
    cards[index].start({y: "0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y: "100%"})
  }
  return (    
  <div className='w-full py-10 bg-zinc-900'>
    <div className='w-full px-10   '>
        <h1 className='text-5xl text-zinc-200 tracking-tight border-b-2 border-zinc-800 pb-10 ' >Featured Projects</h1>
        <div className='cards w-full flex gap-10 mt-10 p-10'>
          <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[75h]'>
          <h1 className='absolute text-[#CDEa68] font-semibold left-full overflow-hidden flex -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-wide text-7xl'>
          {"FYDE".split("").map((item,index) =>(
            <motion.span initial={{y: '100%'}}
             animate={cards[0]}
             transition={{ease:[0.11, 0, 0.5, 0], delay: index*.05}} 
             className='inline-block' >{item}</motion.span>
          ))}
          </h1>
          <div className='card w-fit h-fit rounded-2xl overflow-hidden' >
            <img className='w-fit h-fit bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
          </div>
          </motion.div>
          <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[75h]'>
          <h1 className='absolute text-[#CDEa68] font-semibold flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-wide text-7xl '>
          {"VISE".split("").map((item,index) =>(
            <motion.span initial={{y: '100%'}}
            animate={cards[1]}
            transition={{ease:[0.11, 0, 0.5, 0], delay: index*.05}} 
            className='inline-block' >{item}</motion.span>
          ))}
          </h1>
          <div className='card w-fit h-fit rounded-2xl overflow-hidden' >
            <img className='w-fit h-fit bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
          </motion.div>
        </div>
    </div>
</div>

  )
}

export default Projects