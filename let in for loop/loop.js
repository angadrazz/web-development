// var arr = new Array(6);
// for (let i = 1; i <= 5; i++){
//         i++;
//         arr[i] = function(){
//                 console.log(i);
//         }
//         i--;
// }
// for(var a = 1; a < 5; a++){
//         setTimeout(function(){
//         console.log(a)}, 1000);
//         } 

//         for(let a = 1; a < 5; a++){
//                 setTimeout(function(){
//                 console.log(a)}, 1000);
//             } 


            console.log((function(x, f = () => x) {
                var x;
                var y = x;
                x = 2;
                return [x, y, f()];
              })(1));

              let user1 = {
                firstname: 'John',
                lastname: 'Doe',
                getFullName: function(){
                    return()=>{
                        console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
                    }
                }    
             }
             user1.getFullName()();

             console.log('New Question');

             let user = {
                firstname: 'John',
                lastname: 'Doe',
                getFullName: function(){
                    return() => {
                        console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
                    }
                }    
             }
             user.getFullName()();


             function message(params) 
                {
                        let message = "Hello";
                        console.log(message); 
                      }
                      console.log(message);

                      function makeCounter() {
                        let count = 0;
                        return function() {
                          return count++;
                        };
                      }
                      let counter1 = makeCounter();
                      let counter2 = makeCounter();
                      console.log( counter1() ); 
                      console.log( counter1() ); 
                      console.log( counter2() );
                      
                      function makeArmy() {
                        let shooters = [];
                        let i = 0;
                        while (i < 10) {
                          let shooter = function() {
                            console.log( i ); 
                          };
                          shooters.push(shooter);
                         i++;
                        }
                        return shooters;
                      }
                      let army = makeArmy();
                      army[0]();
                      army[5]();
                      
function makeArmy1(){
        let shooters = [];
        let j = 0;
        while(j < 10){
                let shooter = function(){
                        console.log(i);
                };
                shooters.push(shooter);
                j++;
        }

        return shooters;
}

let army1 = makeArmy1();
army[6]();
army[8]();


function makeArmy() {
        let shooters = [];
        for(let i = 0; i < 10; i++) {
          let shooter = function() {
            console.log( i );
          };
          shooters.push(shooter);
        }
        return shooters;    
      }
      let army2 = makeArmy();
      army2[0]();
      army2[5]();