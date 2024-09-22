import mongoose from "mongoose";

export async function connect() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    // Check if the connection is already established
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is already connected");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI,);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1); // Exit the process if MongoDB fails to connect
    });
  } catch (error) {
    console.error("Something went wrong while connecting to MongoDB:");
    console.error(error);
    process.exit(1); // Exit the process with an error code
  }
}
