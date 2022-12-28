function Person(name) {
this.name = name;
}
var p1 = new Person("Joy");
var p2 = new Person("Julie");
Person.prototype.getName = function() { return this.name };
console.log(p1.getName() + " is friend with " + p2.getName());

function vahicle(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;

}

vahicle.prototype.getprice = function(){
        return this.price;
};

var vahicle1 = new vahicle(25, 58700);
var vahicle2 = new Vehicle(35, 525665);