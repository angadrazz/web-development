// function bike() {
//         console.log(this.name);
//        }
//        var name = "Ninja";
//        bike();


// "use strict"
// function bike() {
//     console.log(this.name);
// }
// var name = "Ninja";
// bike();


function Abc() {
        "use strict"
        this.a = 25;
        return {a: 35, b: 44};
        }
        var obj = new Abc();
        console.log(obj.a, obj.b);


function User(name) {
                this.isAdmin = false;
                return name;
                }
                var user = User("Jack");
                console.log(user);