"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Pratyush",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Gupta",
      className: "text-green-500 dark:text-green-500",
    },
    {
        text: "...",
  
      },
    {
      text: "A",

    },

    {
        text: "Web",
  
      },
      {
        text: "Developer",
  
      },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
      </div>

  );
}