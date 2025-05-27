// API base URL - Always use relative URLs on deployed sites
const isProduction =
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1";

// API base URL
const API_URL = isProduction
  ? "/api"
  : `http://${window.location.hostname}:5000/api`;

// Socket.io URL - Updated to support connections from different devices
const SOCKET_URL = isProduction
  ? window.location.origin
  : `http://${window.location.hostname}:5000`;

// JWT token secret (for reference only, actual secret is on server)
const JWT_SECRET = "JWT_SECRET_FROM_ENV_VAR"; // Note: This is just a placeholder, real secret is in server .env

export { API_URL, SOCKET_URL, JWT_SECRET };
