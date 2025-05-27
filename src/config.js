// API base URL
const API_URL =
  process.env.NODE_ENV === "production"
    ? "/api"
    : `http://${window.location.hostname}:5000/api`;

// Socket.io URL - Updated to support connections from different devices
const SOCKET_URL =
  process.env.NODE_ENV === "production"
    ? window.location.origin
    : `http://${window.location.hostname}:5000`;

// JWT token secret (for reference only, actual secret is on server)
const JWT_SECRET = "JWT_SECRET_FROM_ENV_VAR"; // Note: This is just a placeholder, real secret is in server .env

export { API_URL, SOCKET_URL, JWT_SECRET };
