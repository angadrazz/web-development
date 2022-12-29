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