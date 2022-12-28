function Vehicle(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
        this.getPrice = function(){
                return this.price;
        }
}

var Vehicle1 = new Vehicle(2, 5000);
var Vehicle2 = new Vehicle(6, 8000);
var Vehicle3 = new Vehicle(6, 8000);

var Vehicle4 = new Vehicle(6, 8000);

var Vehicle5 = new Vehicle(6, 8000);

var Vehicle6 = new Vehicle(6, 8000);

var Vehicle7 = new Vehicle(6, 8000);

var Vehicle8 = new Vehicle(658, 8000);
setTimeout((Vehicle8) => {
        
}, 2000);


console.log(Vehicle1);
console.log(Vehicle2,Vehicle3,Vehicle4,Vehicle5,Vehicle6,Vehicle7,Vehicle8);


const myObject = {
        city: "Madrid",
        greet() {
          console.log(`Greetings from ${this.city}`);
        }
      };
      
      myObject.greet(); // Greetings from Madrid
      
      function func3(){
        this.c = "I am func3";
        this.print = function(){
           console.log(this);
        }
    }

    function func2(b) {
        this.b = b;
        return b;
     }

     function func1(){
        var a = "I am func1";
        console.log(a);
     }

     function Person(name){
        this.name = name;
        this.print = function(){
            console.log(this);
        }
    }
    var a = new Person("A");
    var b = new Person("B");
    
