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


class Person {
        constructor(name) { this.name = name; }
     }
     console.log(typeof( Person));