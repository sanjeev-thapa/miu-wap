// Question 1: Singly LinkedList using constructor function
console.log("Question 1: Singly LinkedList using constructor function");

function LinkedList() {
    this.arr = [];
}

LinkedList.prototype.add = function(element) {
    this.arr.push(element);
}

LinkedList.prototype.print = function() {
    console.log("LinkedList{" + this.arr.join(",") + "}");
}

LinkedList.prototype.remove = function(element) {
    this.arr.forEach((value, index, array) => {
        if (value == element)
            array.splice(index, 1);
    });
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); // Expected: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); // Expected: LinkedList{1,3};


// Question 2: Student using constructor function
console.log("\nQuestion 2: Student using constructor function");
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function(newGrade) {
    if (newGrade < 0 || newGrade > 100)
        throw new Error("Grade cannot be less than 0 and more than 100");
    this.grades.push(newGrade);
}

Student.prototype.computeAverage = function() {
    return this.grades.reduce((cumm, value, index, array) => cumm + (value / array.length), 0);
}

const student = new Student("John", "Doe");
student.inputNewGrade(90);
student.inputNewGrade(95);
student.inputNewGrade(85);
console.log(student.computeAverage());