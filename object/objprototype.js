function vehicle (numwheels, price){
        this.numwheels = numwheels;
        this.price = price;
        console.log(vehicle);
}

vehicle.prototype.getPrice = function(){
        return this.price;


}

var vehicle1 = new vehicle(4, 54000);
var vehicle2 = new vehicle(6, 65400);

console.log(vehicle1);
console.log(vehicle2);

// The Prototype Chain - ii
// Look at the following code and determine the output and the most appropriate reason.

function A(){
        this.name =  "A";
   }
   
   Object.prototype.color = "red";
   var d = new A();
   
   console.log(d.color);
   console.log("question enxt");

   function A(){
        this.name = "A";
        this.color = "blue";
    }
    function B(){
        this.name = "B";
    }
    function C(){
        this.name =  "C";
    }
    
    let obj1 = new A() ;
    let obj2 = new B() ;
    let obj3 = new Object();
    let obj4 = new C();
    
    A.prototype.color = "red" ;
    B.prototype.color = "red" ;
    Object.prototype.color = "pink" ;
    
    console.log(obj1.color, obj2.color, obj4.color, obj3.color);


// blue red pink pink
// Solution Description
// Explanation: 

// The obj1 has a property color of blue, so it doesn’t check for the value up the prototype chain. 

// The obj2 doesn’t have a property color, so it looks up in the prototype chain in its prototype, and a red value gets assigned to it. 

// The obj3 made using Object() directly inherits the color value pink from its prototype as it has no color property. 

// The obj4 has no property color, so it looks up in the prototype chain in the function prototype, which also doesn’t have a property color. So it looks further up in the chain in the Object function, then in Object.prototype and assigns pink color.


const object11 = new Object();
object11.property1 = 42;
console.log(Object()); //Object{}

const object1 = new Object();
object1.property1 = 42;
console.log(object1);