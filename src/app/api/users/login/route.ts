import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../../utils/DBconnect/connectDB";
import User from "../../../../../utils/models/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to the database
connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, password } = reqBody;

    // Check if the username or password is missing from the request
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required." },
        { status: 400 }
      );
    }

    // Find user by username in the database
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist." },
        { status: 404 }
      );
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 }
      );
    }

    // If username and password match, generate a JWT token
    const tokenData = {
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY!, {
      expiresIn: "1h",
    });
console.log(token)
    // Create response and set the JWT token in an HTTP-only cookie
    const response = NextResponse.json(
      { message: "Logged in successfully." },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true, // Prevent client-side access to the token
      maxAge: 3600, // Set the expiry time for 1 hour
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
