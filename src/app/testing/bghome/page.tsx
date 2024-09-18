"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import TextGenerateEffectDemo from "../page";
import Link from "next/link";

export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full h-[100vh]">
      <div className=" text-[#B0B4BA] bg-[#18191B]">
  
  <div>
   
 <div className=" p-4  ">
<div className="flex flex-col justify-evenly h-[50vh]">
<h1 className=''><TextGenerateEffectDemo/></h1>
<div className="z-50 ">
  <h1 className="text-2xl mt-6 md:text-4xl">Create your own Blog Now! <Link className=" text-lg md:text-2xl text-blue-600" href="/createBlog">Click here...</Link></h1>
  <h1 className="text-2xl mt-6 md:text-4xl">See existing Blogs <Link className=" text-lg md:text-2xl text-blue-600" href="/blog">Click here...</Link></h1>
  <p className="text-lg mt-4 md:text-2xl">This is a project app created only for testing.Feel free to give any advice for the improvement of the app.</p>
  </div>
</div>
 </div>
   </div>

   </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
