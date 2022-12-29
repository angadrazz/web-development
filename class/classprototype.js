class vehicle () {
        constructor(numWheels, price){
                this.numWheels = numWheels;
                this.price = price;
        }
        getPrice(){
                return this.price;
        }
}

var s1 = new vehicle(2, 54000);
var s2 = new vehicle(4,87000);