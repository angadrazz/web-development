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
        console.log(person)



// CALL AND APPLY

var ninja = {
        name: 'Ninja',
        getName: function() {
            var name = this.name;
            return name;
          }
        };
        var funcName = function(snack, hobby) {
        console.log(this.getName() + ' loves ' + snack + ' and ' + hobby);
        };
        funcName.call(ninja,'sushi', 'algorithms'); 
        funcName.apply(ninja,['sushi', 'algorithms']);


// Output

function MyClass1() {}

const obj1 = new MyClass1();
const obj2 = MyClass1();

console.log(obj1);
console.log(obj2);

// Output

class MyClass {
        constructor(x) {
            console.log("constructor is called!");
            this.x=x;
        }
     }
     
     const obj = new MyClass();
     console.log(obj.x);

        