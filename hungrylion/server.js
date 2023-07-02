const port = 3000;
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const filePath = "./public/index.html";
  const readStream = fs.createReadStream(filePath);
  readStream.on("open", () => {
    readStream.pipe(res);
  });
  readStream.on("error", (err) => {
    res.statusCode = 500;
    res.end("Error reading file");
  });
});

server.listen(port, () => {
  console.log("Server is running on port 3000");
});
