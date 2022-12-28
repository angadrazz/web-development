function student(id, name, club){
        this.id = id;
        this.name = name;
        this.club = club;
        this.printDetails = function(){
                console.log(this.id, this.name, this.club);
        }
}

student.prototype.printDetails = function () {

}

var x1 = new student(1, "Raj", "Cricket");
var x2 = new student(2, "Rohan", "Dance");
var x3 = new student(3, "Rita", "Basketball");
var x4 = new student(4, "Reema", "Music");

var studentArray = [];
studentArray[0] = x1;
studentArray[1] = x2;
studentArray[2] = x3;
studentArray[3] = x4;

for(let i=0; i<4; i++){
        studentArray[i].printDetails();
}