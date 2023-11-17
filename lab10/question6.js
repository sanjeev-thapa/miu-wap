// pattern1.js

exports.getFirstname = function () {

    console.log('Josh');

};

exports = {

    getLastname: function(){

        console.log('Edward');

    }

}

module.exports = function (){

    console.log('Josh Edward');

}


// app.js

const getName = require('./pattern2');

getName();