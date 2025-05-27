import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import User from "./models/User.js";
import Group from "./models/Group.js";
import Message from "./models/Message.js";
import Content from "./models/Content.js";
import Quiz from "./models/Quiz.js";
import QuizResult from "./models/QuizResult.js";
import Notification from "./models/Notification.js";

// Load environment variables
dotenv.config();

// Setup the express app
const setupApp = () => {
  const app = express();

  // CORS configuration
  app.use(
    cors({
      origin: function (origin, callback) {
        // Allow any origin in development
        // In production, allow only specific origins
        const allowedOrigins = [
          "https://collab-learn-rouge.vercel.app",
          "http://localhost:3000",
          "http://localhost:5000",
          undefined, // Allow requests with no origin (like mobile apps or curl requests)
        ];

        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          console.log(`Origin ${origin} not allowed by CORS`);
          callback(null, true); // Still allow all origins for now to debug
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );

  // Rest of your app setup...
  // [Original app code would go here]

  return app;
};

// MongoDB connection setup
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "collablearn", // Specify a unique database name to avoid conflicts
      ssl: true,
      tls: true,
      tlsAllowInvalidCertificates: false,
    });
    console.log("Connected to MongoDB Atlas - Database: collablearn");
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err);
    // Don't throw here, as this would crash the server
  }
};

// Initialize the app when this file is imported
connectToMongoDB();
const app = setupApp();

// Export the Express app for use in both local development and Vercel
export default app;
