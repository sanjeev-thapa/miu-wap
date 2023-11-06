// 1. Create a function using function declaration
function sum(elements) {
    return elements
                .filter(element => element > 20)
                .reduce((accum, element) => accum + element);
}

const sumResult = sum([99, 2, 11, 22, 101, 3]);
console.log(`Question 1: Sum Result: ${sumResult}`);


// 2. Create a function using function expression
const getNewArray = function(strArray) {
    return strArray
                .filter(element => element.length > 5)
                .filter(element => element.includes("a"));
}

const getNewArrayResult = getNewArray(["hello", "world", "happy", "application"]);
console.log(`Question 2: New Array: [${getNewArrayResult}]`);


// 3. Implement an arrow function
const concat = (...elements) => elements.flatMap(element => element);

const concatResult = concat('hi', [1,2,3], ['Hello', 'World']);
console.log(`Question 3: Concat: [${concatResult}]`);