var joe = {
        name: "Joe"
    }; 
    
    function print(){
        console.log(this);
    }

    print.call(joe);
    print.apply(joe);
    print.bind(joe)();

    var juliet = {
        name: "Juliet",
        hello: function(){
            console.log("Hi, I am " + this.name);
        }
    }
    var globalHello = juliet.hello;
    globalHello();
    