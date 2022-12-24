var i = 10;

function outer () {
        var j = 20;
        console.log(i,j);
        function inner () {
                var k = 30;
                console.log(j,j,k);

        }
        inner();
}

outer();

