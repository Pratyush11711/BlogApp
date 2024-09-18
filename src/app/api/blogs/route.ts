import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../utils/DBconnect/connectDB";
import BlogPost from '../../../../utils/models/posts';

export async function POST(req: NextRequest) {
  try {
    // Await the connection to the database
    await connect();

    // Parse the request body
    const reqBody = await req.json();
    const { title, description, author, image } = reqBody;

    // Create a new blog post
    const newBlog = new BlogPost({
      title,
      description,
      author,
      image,
    });

    // Save the blog post to the database
    const savedBlog = await newBlog.save();
    console.log(savedBlog);

    // Return a success response with the saved blog post
    return NextResponse.json(savedBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);

    // Return an error response
    return NextResponse.json({ message: "Cannot create blog post" }, { status: 500 });
  }
}
