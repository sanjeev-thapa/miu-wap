// Solution 1 : Arrow Function
console.log("Solution 1: Arrow Function: ");
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(student => {
            console.log(this.title + ": " + student);
        });
    }
};

group1.showList();
console.log("\n");


// Solution 2: 
console.log("Solution 2: Bind");
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};

group2.showList();
console.log("\n");


// Solution 3: Call + Arrow Function
console.log("Solution 3: Call");

let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(student => function(student) {
            console.log(this.title + ": " + student);
        }.call(this, student));
    }
};

group3.showList();
console.log("\n");


// Solution 4: Apply + Arrow Function
console.log("Solution 4: Apply");
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(student => function (student) {
            console.log(this.title + ": " + student);
        }.apply(this, [student]));
    }
};

group4.showList();
console.log("\n");


// Solution 5: Self Pattern 
console.log("Solution 5: Self Pattern");
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        self.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

group5.showList();
console.log("\n");
