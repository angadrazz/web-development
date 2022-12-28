function vahicle(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;

}

vahicle.prototype.getprice = function(){
        return this.price;
};

var vahicle1 = new vahicle(25, 58700);
var vahicle2 = new Vehicle(35, 525665);