import React from 'react'
import { WavyBackground } from "../../../components/ui/wavy-background";
import TypewriterEffectSmoothDemo from '../../../components/aboutui/typewriter'
const About = () => {
  return (
    <WavyBackground className='max-w-4xl mx-auto pb-40'>
      <div className='mt-20'>
      <TypewriterEffectSmoothDemo/>
      </div>
      <div className='text-white text-2xl flex flex-col justify-between items-start gap-y-7 mt-9 p-6'>
      <div className='text-white text-lg'>I am currently doing B.Tech doing web development as a side hustle and available for hiring.</div>
      <div className='text-lg'>
        I can make fullstack websites and provide pixel perfect design to the clients.
      </div>
      <div className='text-lg'>My skills include HTML, CSS, Tailwind CSS, Javascript, Reactjs, Nextjs, Nodejs, Expressjs.</div>
      <div className='text-lg'>I also use various CSS Frameworks like- Bootstrap, MaterialUi, ShadcnUi, AceterniytUi and more for better user expierence. </div>
      <div className='text-lg'>You can mail me on - <span className='text-blue-500'> pratyush.epi.spn117@gmail.com </span></div>
      </div>
  


      
      </WavyBackground>
    
  )
}

export default About

