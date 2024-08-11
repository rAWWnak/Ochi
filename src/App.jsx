import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Projects from './Components/Projects'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='min-h-screen w-full text-white bg-slate-900'>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Projects/>
    <Cards/>
    <Footer/>
    </div>
    </>
    )
}

export default App