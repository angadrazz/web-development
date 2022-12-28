// var student = {
//         name: "Angad Mandal",
//         rollNo: 25,
//         Add: "Delhi",
//         Marks: 253,

// }
// console.log(student);


//What is JavaScript

function createStudent(name, rollNo, marks){
        var student = {};
        student.name = name;
        student.rollNo = rollNo;
        student.marks = marks;
        return student;
}

var student1 = createStudent("angad", 58, 32);
var student2 = createStudent("manish", 54, 36);
var student3 = createStudent("manish", 54, 36);
var student4 = createStudent("manish", 54, 36);
var student5 = createStudent("manish", 54, 36);
var student6 = createStudent("manish", 54, 36);
var student7 = createStudent("manish", 54, 36);
var student8 = createStudent("manish", 54, 36);

console.log(student1,student3,student4,student5,student6,student7,student8);
console.log(student2);



What is JavaScript :-
JavaScript is a programming language initially designed to interact with
 elements of web pages. 

In web browsers, JavaScript consists of three main parts:

1.ECMAScript provides the core functionality.
2.The Document Object Model (DOM) provides interfaces for interacting
 with elements on web pages
3.The Browser Object Model (BOM) provides the browser API for interacting with the web browser.
Example:- 
         var x = 10;
         var y = 20;
     console.log(x + y); //30
