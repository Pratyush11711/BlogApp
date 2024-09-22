import React from 'react';
import { WavyBackground } from "../../../components/ui/wavy-background";
import TypewriterEffectSmoothDemo from '../../../components/aboutui/typewriter';

const About = () => {
  return (
    <div className='h-[100vh] overflow-y-auto'> {/* Allow scrolling if content overflows */}
      <WavyBackground className='max-w-4xl mx-auto pb-40'>
        <div className='mt-20'>
          {/* Make heading responsive with dynamic font sizes */}
          <TypewriterEffectSmoothDemo className="text-3xl md:text-5xl lg:text-7xl mt-5" />
        </div>
        <div className='text-white text-base md:text-lg flex flex-col justify-between items-start gap-y-7 p-6'>
          <div className='text-white text-base md:text-lg'>
            I am currently doing B.Tech and working on web development as a side hustle, available for hiring.
          </div>
          <div className='text-base md:text-lg'>
            I can create full-stack websites and provide pixel-perfect designs to clients.
          </div>
          <div className='text-base md:text-lg'>
            My skills include HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Node.js, and Express.js.
          </div>
          <div className='text-base md:text-lg'>
            I also use various CSS frameworks like Bootstrap, Material-UI, ShadcnUI, AceternityUI, and more for better user experience.
          </div>
          <div className='text-base md:text-lg'>
            You can mail me at - <span className='text-blue-500'>pratyush.epi.spn117@gmail.com</span>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}

export default About;
