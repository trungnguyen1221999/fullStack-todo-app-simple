import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

    console.log("Database connection successful!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // exit with error
  }
};
