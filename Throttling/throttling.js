

let Btn = document.querySelector("#clickBtn")
function onClickFun(){
    console.log("Click happened");
}

//pollyfill of throttling
function myThrottle(cb,d){ 
    let flag= true;   
    return function(){
        Btn.disabled=true
        let context= this;
        let args= arguments
        if(flag){
           cb.apply(context,args)
            flag=false;
        }
        setTimeout(()=>{
            flag= true;
            Btn.disabled=false 
        },d)
    }

}


const myBetterFunction = myThrottle(onClickFun,2000)

Btn.addEventListener("click",myBetterFunction)