const port = 3000;
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

server.listen(port, (err) => {
  if (err) {
    console.log("Something has gone wrong");
  } else {
    console.log("Listening on " + port);
  }
});
