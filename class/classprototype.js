class vehicle {
        constructor(numWheels, price){
                this.numWheels = numWheels;
                this.price = price;
        }
        getprice() {
                return this.price;
        }
                
        
}

var s1 = new vehicle(2, 54000);
var s2 = new vehicle(4,87000);

console.log(s1);
console.log(s2);


class Person1 {
        constructor(name) { this.name = name; }
     }
     console.log(typeof( Person1));


     var Person = class {
        constructor() {}
        sayHello() {
          return 'Hello!';
        }
      };
      var instance = new Person();
      console.log(instance.sayHello()+" "+Person.name);



//       Inheritance in JavaScript
//       Send Feedback
//       What will the following code print in the console?
      class Vehicle{
      constructor ( doors, wheels){
          this.doors = doors;
          this.wheels = wheels;
      }
      }
      class bus extends Vehicle{
          constructor(windows){
              this.windows = windows;
          }
      }
      var b = new bus(10);
      console.log(bus.windows);