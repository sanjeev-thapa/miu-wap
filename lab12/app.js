const express = require("express");
const path = require("path");
const productRouter = require("./routes/product-router");
const userRouter = require("./routes/user-router");

const app = express();

app.use(express.urlencoded());
app.use("/css", express.static(path.join(__dirname, "public", "css")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));
app.use("/products", productRouter);
app.use("/users", userRouter);

app.use((req, res, next) => res.status(404).sendFile(path.join(__dirname, "views", "not-found.html")));
app.use((err, req, res, next) => res.status(500).sendFile(path.join(__dirname, "views", "error.html")));

app.listen(3000, () => console.log("Listening to port 3000"));