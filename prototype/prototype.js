function Person(name) {
        this.name = name;
        }
        var p1 = new Person("Joy");
        var p2 = new Person("Julie");
        Person.prototype.getName = function() { return this.name };
        console.log(p1.getName() + " is friend with " + p2.getName());