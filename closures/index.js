var i = 10;

function outer () {
        var j = 20;
        console.log(i,j);
        var inner  = function() {
                var k = 30;
                console.log(j,k);
                k++;

        }
        return inner();
}

var inner = outer();
// inner();
// inner();
function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() {
          // displayName() is the inner function, a closure
          console.log(name); // use variable declared in the parent function
        }
        displayName();
      }
      init();



      function Adder(x) {
        return function(y) {
          return x + y;
        };
      }
      var add5 = Adder(5);
      var add10 = Adder(10);
      console.log(add5(2));
      console.log(add10(2));

//       next question


var add = (function ( ) {
        var counter = 0;
        return function ( ) {
             counter += 1; 
             return counter;
      }
      })();    
      console.log(add());
      console.log(add());
      console.log(add());
      

