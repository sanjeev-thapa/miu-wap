// pattern1.js

module.exports.getName = function () {

    console.log('Josh Edward');

};


// app.js

const getName = require('./pattern1');

getName();