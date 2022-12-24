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
inner();
inner();
function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() {
          // displayName() is the inner function, a closure
          console.log(name); // use variable declared in the parent function
        }
        displayName();
      }
      init();
      

