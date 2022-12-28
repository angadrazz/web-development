// var student = {
//         name: "Angad Mandal",
//         rollNo: 25,
//         Add: "Delhi",
//         Marks: 253,

// }
// console.log(student);

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
