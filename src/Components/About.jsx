import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' rounded-3xl  w-full bg-[#cdea68] py-32  '>
        <h1 className='text-black text-[4vw] tracking-tight px-14 leading-none font-normal'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='border-t-[2px] border-[#687e21] mt-14'></div>
        <div className=' text-black p-10 flex '>
        <p className='text-black'>What can you expect:</p>
        <div className=' ml-[40vw]'>
        <p className=' h-[8vw] w-[20vw] text-[1.1vw] '>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
        <p className=' h-[8vw] w-[20vw] text-[1.1vw]'>We believe the mix of strategy and <br /> design (with a bit of coffee) is what <br /> makes your message clear, convincing, and captivating.</p>
        </div>
        <p className=' h-[10vw] w-[5vw] left-[4vw] ml-[5vw] mt-[7vw]'>S: Instagram Behance Facebook Linkedin</p>
        </div>
        <div className='border-t-[2px] border-[#687e21] mt-14'></div>
        <div className='w-full flex'>
        <div className='w-1/2 px-10 py-5'>
        <h1 className='text-5xl text-black'>Our approach:</h1>
        <button className='flex uppercase gap-10 items-center px-5 py-5 bg-zinc-900 mt-5 rounded-full' >Read More
        <div  className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-[42vw] h-[60vh] mt-5 ' >
          <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
        
        </div>
        
    </div>
  )
}

export default About