var x = 10;
var y = 20;
console.log(x + y); //30



function User(name) {
        this.name = name;
        this.isAdmin = false;
        return;
        }
        var user = User("Julie");
        console.log(user);

        function User(name) {
                this.isAdmin = false;
              }
              var user = new User("James");
              console.log(user);

              
              var obj = {};
              function A() { return obj; }
              function B() { return obj; }
              console.log( new A() == new B() );