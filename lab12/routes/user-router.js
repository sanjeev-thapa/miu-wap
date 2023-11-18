const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "users.html"));
});

router.post('/', (req, res) => {
    const {firstname, lastname, age} = req.body;
    res.end(`User{${firstname}, ${lastname}, ${age}} saved`);
});

module.exports = router;