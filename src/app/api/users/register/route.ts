import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../../utils/DBconnect/connectDB";
import User from "../../../../../utils/models/users";
import bcrypt from "bcryptjs";

// Connect to the database
connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    // Check if username, email, or password is missing
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Username, email, and password are required." },
        { status: 400 }
      );
    }

    // Check if the user already exists with the provided email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists." },
        { status: 409 } // Conflict
      );
    }

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user in the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user
    await newUser.save();

    return NextResponse.json(
      { message: "User successfully created." },
      { status: 201 } // Created
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An error occurred. Please try again later." },
      { status: 500 } // Internal Server Error
    );
  }
}
