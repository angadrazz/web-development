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

