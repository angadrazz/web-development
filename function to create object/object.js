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
