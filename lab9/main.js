// Question 1: LinkedList
console.log("Question 1: LinkedList")

class Node {
    #value;
    #next;
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    #head = null;
    #tail = null;

    add(value) {
        if (this.#head == null) {
            this.#head = this.#tail = new Node(value, null);
            return;
        }

        this.#tail.next = new Node(value);
        this.#tail = this.#tail.next;
    }

    remove(value) {
        let current = this.#head;

        if (this.#head != null && this.#head.value == value) {
            this.#head = this.#head.next;
        }

        while (current.next != null) {
            if (current.next.value == value) {
                current.next = current.next.next;
                return true;
            }

            current = current.next;
        }

        return false;
    }

    print() {
        let current = this.#head;
        let output = "LinkedList{";

        while (current != null) {
            output += current.value;

            if (current.next != null)
                output += ",";

            current = current.next;
        }

        output += "}";

        console.log(output);
    }
}

const linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}


// Question 2: Student, Question and Quiz
console.log("\n Question 2: Student, Question and Quiz")

class Question {

    #qid;
    #answer;

    constructor(qid, answer) {
        this.#qid = qid;
        this.#answer = answer;
    }

    checkAnswer(answer) {
        return this.#answer == answer;
    }

    get qid() {
        return this.#qid;
    }

    get answer() {
        return this.#answer;
    }
}

class Student {

    #studentId;
    #answers = [];

    constructor(studentId) {
        this.#studentId = studentId;
    }

    addAnswer(question) {
        if (!(question instanceof Question))
            throw new Error("Must be an object of Question");

        this.#answers.push(question);
    }

    get studentId() {
        return this.#studentId;
    }

    get answers() {
        return this.#answers;
    }

}

class Quiz {

    #questions = new Map();
    #students = [];

    constructor(questions, students) {
        questions.forEach(question => this.#questions.set(question.qid, question.answer));
        this.#students = students;
    }

    scoreStudentBySid(sid) {
        const student = this.#students.filter(stu => stu.studentId === sid)[0];
        let total = 0;
        return student.answers.reduce((cummulative, question) => {
            const answer = this.#questions.get(question.qid);
            if (question.checkAnswer(answer)) cummulative++;
            return cummulative;
        }, 0);
    }

    getAverageScore() {
        return this.#students.reduce((cummulative, stu, i, arr) => 
                                        cummulative + (this.scoreStudentBySid(stu.studentId) / arr.length), 0);
    }

}


const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5