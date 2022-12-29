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


// function User(name) {
//                 this.isAdmin = false;
//                 return name;
//                 }
//                 var user = User("Jack");
//                 console.log(user);



//                 class Person = {
//                         constructor(name) { this.name = name; }
                        
//                         } 
//                         var person = new Person("James");



class Person {
        constructor(name) {
            this.name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        }
        var person = new Person("James");
        


        
        