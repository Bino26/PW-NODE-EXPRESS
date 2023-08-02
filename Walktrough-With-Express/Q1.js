const http = require("http");
const PORT = 3000;
const menProducts = [
  { id: 1, name: "shirt", price: 500 },
  { id: 2, name: "T-Shirt", price: 300 },
];

const womenProducts = [
  { id: 11, name: "Jeans", price: 950 },
  { id: 12, name: "Dupatta", price: 300 },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "Application/json");
  if (req.url === "/") {
    res.write(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === "/men") {
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === "/women") {
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ Error: "Page Not found" }));
  }
});

server.listen(PORT, () => {
  console.log("Server is running");
});
