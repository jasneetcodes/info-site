const http = require("http");
const fs = require("fs");
const url = require("url");

const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      res.end(fs.readFileSync("index.html"));
      break;
    case "/about":
      res.end(fs.readFileSync("about.html"));
      break;
    case "/contact-me":
      res.end(fs.readFileSync("contact-me.html"));
      break;
    default:
      res.end(fs.readFileSync("404.html"));
      break;
  }
});

server.listen(port, () => {
  console.log("Server running");
});
