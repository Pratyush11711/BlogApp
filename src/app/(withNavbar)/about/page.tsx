import React from 'react';
import { WavyBackground } from "../../../components/ui/wavy-background";
import TypewriterEffectSmoothDemo from '../../../components/aboutui/typewriter';

const About = () => {
  return (
    <div 
      className='h-[100vh] overflow-x-hidden pb-40 flex flex-col justify-center items-center bg-black'
      style={{
        backgroundImage: "url('blue-clouds-space-nebula-cosmic-art.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      
      }}
    >
      <div>
      {/* Content on top of background */}
      <div className=''>
        <TypewriterEffectSmoothDemo />
      </div>
      <div className='text-white text-2xl flex flex-col justify-between items-start gap-y-7 p-6 font-bold' >
        <div className='text-white text-lg'>
          I am currently doing B.Tech doing web development as a side hustle and available for hiring.
        </div>
        <div className='text-lg'>
          I can make fullstack websites and provide pixel-perfect designs to clients.
        </div>
        <div className='text-lg'>
          My skills include HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Node.js, and Express.js.
        </div>
        <div className='text-lg'>
          I also use various CSS frameworks like Bootstrap, Material-UI, ShadcnUI, AceternityUI, and more for better user experience.
        </div>
        <div className='text-lg'>
          You can mail me at - <span className='text-green-500'>pratyush.epi.spn117@gmail.com</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
