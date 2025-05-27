// Vercel serverless function to handle all API routes
import app from "../../server/index.js";

export default function handler(req, res) {
  // Forward the request to our Express app
  return app(req, res);
}

export const config = {
  api: {
    bodyParser: false, // Let Express handle body parsing
  },
};
