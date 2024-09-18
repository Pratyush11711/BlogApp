import Image from "next/image";
import { connect } from "../../../../../utils/DBconnect/connectDB";
import BlogPost from "../../../../../utils/models/posts";
import {BackgroundBeamsWithCollision} from "../../../../components/ui/background-beams-with-collision"

connect()
interface BlogPostData {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}
interface Params{
  params:{id:string}
}
export default async function BlogPostPage({params}:Params){
  const blogPost:BlogPostData |null =await BlogPost.findById(params.id)
  if(!blogPost){
    return null
  }

  return(
    <div className="h-[100vh]">
    <BackgroundBeamsWithCollision >
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center z-50">
        <div className="md:w-full w-[350px] md:max-w-[800px] p-4">
        {blogPost.image && (
        <Image src={blogPost.image} alt="img" className="my-4" width={800} height={700} />
      )}
        </div>
    <div className="  text-neutral-300 flex flex-col items-start gap-y-5">
     <div> <h1 className="text-4xl md:text-7xl font-bold">{blogPost.title}</h1>
      <p className="text-neutral-300 mt-3">By {blogPost.author}</p></div>
      <p className="text-xl md:text-2xl text-neutral-300">{blogPost.description}</p>
    </div>
    </div>
    </BackgroundBeamsWithCollision>
    </div>
  )
}
