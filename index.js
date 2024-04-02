// book/index.js

const user = require('user');

function createBook(bookTitle, author, genre) {
    console.log(`Book "${bookTitle}" by ${author} (${genre}) has been created.`);
}

function getBookDetails(bookTitle) {
    console.log(`Fetching details for book "${bookTitle}":`);
    // Dummy implementation, fetching book details from a database or API
    console.log("Some sample details...");
}

module.exports = {
    createBook,
    getBookDetails
};