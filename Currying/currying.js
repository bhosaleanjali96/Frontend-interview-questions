//Currying is a function which accepts one argument at a time and return a function which expects next argument


//example-1
function sum(a){
    return function (b){
        return function(c){
          let sum = a+b+c;
          return sum
        }
    }
}

sum(2)(6)(1);

//example 2 - currying for DOM manipulation

function updateHeadingText(id){
    return function(content){
        document.querySelector("#" + id).textContent=content;
        
    };
}

let updateHeader= updateHeadingText("heading")
updateHeader("React")



//example 3- Infinite currying
//f(a)(b)(c)(d).....  = add(1)(2)(4)


function addInfinite(a){
    return function (b){
        if(b) return addInfinite( a + b );
        return a;
    };
}

addInfinite(3)(3)();




//curry() implementation- no of nested functions should equal to no of args
//converts f(a,b,c) => f(a)(b)(c)

function curry(fun){
    return function curriedFun(...args){
        if(args.length >= fun.length){
            return fun(...args)
        }
        else{
            return function(...next){
                return curriedFun(...args,...next);
            };
        }
    };
}



let addition = (a,b,c) => a + b + c;

const totalSum= curry(addition);

console.log(totalSum(1)(2)(3));