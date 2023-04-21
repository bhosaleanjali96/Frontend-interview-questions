let btn= document.querySelector("#clickBtn")
let btnPressed = document.querySelector("#increment_pressed")
let count = document.querySelector("#increment_count")

let counter = 0;
let pressCount=0;
let triggerCount=0;


function getData() {
  console.log("Fetching Data " + counter++);
}

function btnClickTrigger(){
  triggerCount+=1;
  return count.innerHTML=triggerCount
}

function btnClickPress(){
  pressCount+=1;
  btnPressed.innerHTML=pressCount
  myDebounceCount()
}



// polyfill of debounce
function myDebounce(callBack, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer= setTimeout(() => {
      callBack();
    }, delay);
  };
}

//pplyfill of throttling 
function myThrottle(callBack, delay) {
  let lastTime=0;
  return function (...args) {
    let nowTime= new Date().getTime()
    if(nowTime-lastTime< delay) return;
    lastTime= nowTime;
    return callBack();

  };
}

//from lodash library
const myLodashFunction = _.debounce(getData, 800);


//usecase 1
const myBetterFunction = myDebounce(getData, 500);


//usecase 2
btn.addEventListener('click',btnClickPress)
const myDebounceCount = myDebounce(btnClickTrigger, 1000)
// const myDebounceCount = myThrottle(btnClickTrigger, 1000)



