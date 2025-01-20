const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(cors());
server.db = router.db;

server.use(auth);
server.use(router);
server.listen(5005, () => {
  console.log("JSON Server is running on port 5005");
});
