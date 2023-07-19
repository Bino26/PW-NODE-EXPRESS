const http = require("http");

const server = http.createServer((req, res) => {
  res.end(
    "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills! </h1>"
  );
});

const port = 3000; // Set the port number
const hostname = "127.0.0.1";

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
