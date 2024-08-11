import React from 'react'

const Navbar = () => {
  return (
    
    <div className="fixed w-full p-10 h-10 font-['Neue Montreal'] flex justify-between items-center z-10 " >
    <img className='h-10 w-15' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
    <div className='Links flex gap-10'>
        {["Services","Our Work", "About Us","Insigths", "Contact Us"].map((item, index) => (
           <a key={index} className='text-md font-light capitalize '>{item}</a> 
        ))}</div>  
    
    </div>
  ) 
}

export default Navbar