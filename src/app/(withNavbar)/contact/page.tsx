

'use client'

import React from "react";
import { Vortex } from "../../../components/ui/vortex";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link";
export default function VortexDemo() {
  const [state, handleSubmit] = useForm("xldrkzwp");
  if (state.succeeded) {
    return <div className="h-[100vh] w-full flex items-center justify-center text-blue-500 text-4xl bg-black"><Link className=" p-4" href="/">Message Sent!...Click to back to home page</Link></div>;
}
  return (
    <div className="max-w-full mx-auto rounded-md  h-[100vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        
        <h2 className="relative z-10 text-6xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-[120px] md:mt-[250px]">
          Contact Us
        </h2>
        <form action=""  onSubmit={handleSubmit} className="w-1/2 p-4 flex flex-col gap-y-4">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className='text-white'>Email Address</Label>
          <Input id="email" placeholder="Enter your email" type="email" name="email"/>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="name" className='text-white'>Name</Label>
          <Input id="name" placeholder="Enter your name" className='text-white' type="name" name="name" />
          <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
        </LabelInputContainer>
                  <label className="form-control w-full">
           <div className="label text-white ">
           <Label htmlFor="message" className='text-white'>Message</Label>
           </div>
           <textarea
             className="textarea textarea-bordered h-24 w-full rounded-md p-2 mt-2"
             placeholder="Enter your message" id="message" name="message"
           ></textarea>
                 <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
         </label>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button type="submit" disabled={state.submitting} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] ">
            Send Message
          </button>
      
        </div>
        </form>
  
      </Vortex>
    </div>
  );
}


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};