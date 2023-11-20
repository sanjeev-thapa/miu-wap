let books = [
    {
        id: 1,
        title: "JavaScript: The Good Parts",
        ISBN: "978-0596517748",
        publishedDate: "May 1, 2008",
        author: "Douglas Crockford"
    },
    {
        id: 2,
        title: "The Art Of The Program",
        ISBN: "979-8218250447",
        publishedDate: "July 23, 2023",
        author: "Matt Brittingham"
    }
];
let counter = 2;

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    save() {
        this.id = ++counter;
        books.push(this);
        return this;
    }

    static getById(id) {
        const index = books.findIndex(book => book.id == id);

        if (index < 0)
            throw new Error(`Book with ID ${id} not found`);

        return books.find(book => book.id == id);
    }

    update(id) {
        const index = books.findIndex(book => book.id == id);

        if (index < 0)
            throw new Error(`Book with ID ${id} not found`);

        this.id = id;
        books[index] = this;
        return this;
    }

    static delete(id) {
        const index = books.findIndex(book => book.id == id);

        console.log(index);

        if (index < 0)
            throw new Error(`Book with ID ${id} not found`);

        books = books.filter(book => book.id != id);
    }

}