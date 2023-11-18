const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "products.html"));
});

router.post("/", (req, res) => {
    const {title, description, price} = req.body;
    res.end(`Product{${title}, ${description}, ${price}} saved`);
});

module.exports = router;