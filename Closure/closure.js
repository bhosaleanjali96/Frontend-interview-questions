//Closure is a function which is bundled together with it's lexical environment. Lexical environment is reference to its surrounding state.
//function along with its lexical env forms a Closure
//when you return inner not just function return it return a closure along with its lexical environment


function outer() {
    let a = 50;
  
    function inner() {
      console.log(a, "outer");
    }
    a = 100;
    return inner;
  }


  let result = outer();  
  result();
  


  //deep nested closure
  let b = 400;
  function p() {
    let b= 100;
    b=200;
  
    return function q() {
      let a = 5;
      a = 60;
  
      function r() {
        a = 40;
        console.log(a, b);
      }
      r();
    };
  }
    
  let closureResult = p();
  closureResult();


  
  // example 1 of closure- setTimeout
  function time() {
    let a = 600;
    setTimeout(function () {
      console.log(a);
    }, 3000);
  
    console.log("JS");
  }
  
  time()
  


  //example 2 of closure- setTimeout
  function timer() {
    for (let i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
  }
  
  // timer()