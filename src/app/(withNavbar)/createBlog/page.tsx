"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface dataProps {
  title: string;
  description: string;
  author: string;
  image: string | null;
}

export default function Blog() {
  const handleRemoveImage = () => {
    setData({ ...data, image: null });
    setImagePreview(null);
  };

  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [data, setData] = useState<dataProps>({
    title: "",
    description: "",
    author: "",
    image: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create the blog post");
      }
      const result = await response.json();
      router.push("/blog");
      console.log("Blog created successfully:", result);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, image: reader.result as string });
        setImagePreview(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[calc(100vh+200px)] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased pt-20"> 
      {/* Added pt-20 to push content below the navbar */}
      <div className="max-w-2xl mx-auto p-4">
        <h1 className=" relative z-10 text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Create Your Own Blog
        </h1>
        <form className="flex flex-col text-lg" action="">
          <div className="flex flex-col items-center mt-6">
            <label htmlFor="" className="justify-center text-white">
              Title
            </label>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
              placeholder="Enter the Title"
              className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-white p-2 "
            />
          </div>
          <div className="flex flex-col items-center mt-6">
            <label htmlFor="" className="justify-center text-white ">
              Author
            </label>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, author: e.target.value });
              }}
              placeholder="Enter the Author Name"
              className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-white p-2 "
            />
          </div>
          <div className="flex flex-col items-center mt-6">
            <label htmlFor="image" className="justify-center text-white t">
              Upload Image
            </label>
            <input
              type="file"
              required
              onChange={handleImageChange}
              placeholder="Image"
              id="image"
              className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-white p-2 "
            />
            {imagePreview && (
              <Image
                src={imagePreview}
                height={50}
                width={50}
                alt="Blogimage"
                className="mt-4"
              />
            )}
            <AiOutlineCloseCircle
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 text-red-600 cursor-pointer"
              size={24}
            />
          </div>
          <div className="flex flex-col items-center mt-6">
            <label htmlFor="" className="justify-center text-white ">
              Description
            </label>
            <textarea
              placeholder="Enter the Description"
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-white p-2 "
            ></textarea>
          </div>
          <button className="p-[3px] relative mt-6 cursor-pointer z-50" onClick={handleSubmit}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              CreateBlog
            </div>
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
