const express = require("express");
const bookRouter = require("./routes/book-router");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

app.use((req, res, next) => res.json({errorMessage: "Not Found"}));
app.use((err, req, res, next) => res.json({errorMessage: err.message}));

app.listen(3000, () => console.log("Listening on port 3000"))