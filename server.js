const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/post", (req, res) => {
  res.jsonp(req.query);
})

server.use(router);
server.listen(8888, () => {
  console.log("JSON Server is Running");
})