// HARDCODED CONFIGURATION - SOLVING MIXED CONTENT ERROR
// Direct configuration to fix deployment issues - May 27, 2025

// API base URL - use absolute path to fix mixed content errors
const API_URL = "/api"; // Always use relative path

// Socket.io URL - Always use the current origin
const SOCKET_URL = window.location.origin;

// JWT token secret (for reference only, actual secret is on server)
const JWT_SECRET = "JWT_SECRET_FROM_ENV_VAR"; // Note: This is just a placeholder, real secret is in server .env

export { API_URL, SOCKET_URL, JWT_SECRET };
