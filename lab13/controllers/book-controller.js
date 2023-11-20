const Book = require("../models/book");

exports.getAll = (req, res) => res.json(Book.getAll());

exports.create = (req, res) => {
    const {title, ISBN, publishedDate, author} = req.body;
    const book = new Book(null, title, ISBN, publishedDate, author);
    res.json(book.save());
};

exports.getById = (req, res) => res.json(Book.getById(req.params.id));

exports.update = (req, res) => {
    const {title, ISBN, publishedDate, author} = req.body;
    const book = new Book(null, title, ISBN, publishedDate, author);
    res.json(book.update(req.params.id))
};

exports.delete = (req, res) => res.json(Book.delete(req.params.id));