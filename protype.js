function Person(name) {
        this.name = name;
        }
        var p1 = new Person("Joy");
        var p2 = new Person("Julie");
        Person.prototype.getName = function() { return this.name };
        console.log(p1.getName() + " is friend with " + p2.getName());



        function Person(name) {
                this.name = name;
              }
              var p1 = new Person("Joy");
              var p2 = new Person("Julie");
              
              Person.prototype.getName = function() { return this.name };
              
              p1.getName = function() {return 'John'};
              console.log(p1.getName() + " is friend with " + p2.getName());
              p2.getName = function() {return 'Jonson'};