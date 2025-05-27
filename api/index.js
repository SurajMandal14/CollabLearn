// This file serves as an adapter for running the Express app in a Vercel serverless function
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
import serverApp from "../../server/index.js";

// Load environment variables
dotenv.config();

// Create a wrapper function that returns the Express app
export default function handler(req, res) {
  // The server/index.js file exports the Express app
  serverApp(req, res);
}

// Set serverless function timeout (max 10 seconds on Vercel)
export const config = {
  api: {
    bodyParser: false, // We're using Express's bodyParser
  },
};
