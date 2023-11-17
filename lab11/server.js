const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    log(req);
    const readable = fs.createReadStream(path.join(__dirname, "image.jpeg"));
    readable.pipe(res);
});

server.listen(3000, "localhost", () => console.log("Server Listen Log: Listening to port 3000"));

function log(req) {
    const date = new Date();
    const formattedDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();

    console.log(`Request Log: [${formattedDate}] ${req.url} ${req.method}`);
}