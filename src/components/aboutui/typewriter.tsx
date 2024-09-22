"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I",
      className:"text-lg md:text-4xl"
    },
    {
      text: "am",
        className:"text-lg md:text-4xl"
    },
    {
      text: "Pratyush",
      className: "text-blue-500 dark:text-blue-500 text-lg md:text-4xl",
    },
    {
      text: "Gupta",
      className: "text-green-500 dark:text-green-500 text-lg md:text-4xl",
    },
    {
        text: "...",
    className:"text-lg md:text-4xl"
      },
    {
      text: "A",
  className:"text-lg md:text-4xl"
    },

    {
        text: "Web",
    className:"text-lg md:text-4xl"
      },
      {
        text: "Developer",
    className:"text-lg md:text-4xl"
      },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[300px] md:mt-[150px] relative">
      <TypewriterEffectSmooth words={words} />
      </div>

  );
}