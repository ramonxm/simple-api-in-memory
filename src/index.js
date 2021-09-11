const http = require("http");

const UserController = require("./controllers/UserController");

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint ${request.url}`);

  if (request.url === "/users" && request.method === "GET") {
    UserController.listUsers(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

server.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
