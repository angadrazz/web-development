Function Prototype
Look at the following function definitions. Determine for which of the following a prototype will be made?


1. function func1(){
      var a = "I am func1";
      console.log(a);
   }

2. function func2(b) {
      this.b = b;
      return b;
   }

3. function func3(){
        this.c = "I am func3";
        this.print = function(){
           console.log(this);
        }
    }