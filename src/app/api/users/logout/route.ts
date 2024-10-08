import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response=NextResponse.json({
            message:"Logout successful"
        })
        response.cookies.set("token","",{
            httpOnly:true,
            expires:new Date(0)
        })
        return response
    } catch (error) {
        console.log(error)
        console.log("cannot logout")
    }
}