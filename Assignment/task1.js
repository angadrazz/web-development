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
        