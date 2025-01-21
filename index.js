require('dotenv').config();

const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware
server.use(middlewares);
server.use(cors());
server.db = router.db;

// Authentication and routes
server.use(auth);
server.use(router);

// Define the port
const PORT = process.env.PORT || 5005;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
