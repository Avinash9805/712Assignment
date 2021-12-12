//initializing function a
var product= function(a){
    //initializing function b

    return function(b){
        //initializing function c

        return function(c){
           console.log(a*b*c);   
           //console product of three values
        }
    }
}

  
product(4)(5)(5);