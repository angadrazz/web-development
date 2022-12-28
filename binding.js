// var joe = {
//         name: "Joe"
//     }; 
    
//     function print(){
//         console.log(this);
//     }

//     print.call(joe);
//     print.apply(joe);
//     print.bind(joe)();

//     var juliet = {
//         name: "Juliet",
//         hello: function(){
//             console.log("Hi, I am " + this.name);
//         }
//     }
//     var globalHello = juliet.hello;
//     globalHello();


//     var juliet = {
//         name: "Juliet",
//         hello: function(){
//             console.log("Hi, I am " + this.name);
//         }
//     }
//     juliet.hello();
 
//     const billy = {
//         name: "Billy Jol", 
//         outer: function() {
//              function inner(){
//              console.log(this);
//            }     
//            inner();
//         }
//       }
//       billy.outer();


    



const john = {
    name:  "John",
    greet: function(){
        console.log(  "Hello! My name is " + this.name) ;
    }
}

const CN = {
  name: "Coding Ninjas",
  printName: function(){
        console.log(this) ;
    }
};


CN.printName.bind(john)();