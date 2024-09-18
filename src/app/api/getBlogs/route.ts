import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../utils/DBconnect/connectDB";
import BlogPost from "../../../../utils/models/posts";

connect()

export async function GET(req:NextRequest, res:NextResponse){
try {
    const blogPosts = await BlogPost.find()
    return NextResponse.json(blogPosts, { status: 200 });
    console.log(blogPosts)
}
 catch (error) {
    return NextResponse.json(error)
}
}
