var Sequence = (function sequenceIIFE() {
        var current = 0;
        return {
            getCurrentValue: function() {
                return current;
            },  
            getNextValue: function() {
                current = current + 1;
                return current;
            }
       };
    }());
    console.log(Sequence.getNextValue());
    console.log(Sequence.getNextValue());
    console.log(Sequence.getCurrentValue());

    console.log('Next question');

    let People = function(person, age) { 
        this.person = person; 
        this.age = age; 
        this.info = function() { 
            console.log(this);  
           setTimeout(() => {  
            console.log(this.person + " is " + this.age + " years old"); 
           }, 3000); 
        } 
    }  
let person1 = new People('John', 21); 
person1.info();


console.log("Arrow function");

var arguments = [1, 2, 3];
var arr = () => arguments[2];
arr();
function foo(n) {
  var f = () => arguments[0] + n; 
  return f();
}
foo(3);    
console.log("Other Quetion ");