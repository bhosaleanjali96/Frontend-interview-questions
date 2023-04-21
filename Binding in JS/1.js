//Explicit obj binding in JS

//Call, Bind and Apply- JS methods availabel to all JS fuctions and used to set the this keyword 

let person={
    name:"Anjali",
    age:24
};

function getDetails(dob,pro){
    return `Hello ${this.name} and dob is ${dob} and profession is ${pro}`
}

//call()
console.log(getDetails.call(person,5,"Software Engg"));

//apply()- apply work exactly similar like call but takes agruments inside an array
console.log(getDetails.apply(person,[8,"Software Engg"]));


//bind()- bind a 
const bindFun= getDetails.bind(person)

console.log(bindFun(9,"Software Engg"));
console.log(bindFun(12,"Traveller"));



//Example 1-Append an array to another array

const array=["a","b"]
const elements=[1,2,3]

array.push.apply(array,elements)
console.log(array);

//Example 2 - to find max and min of array

let number= [1,5,8,9,3]

console.log(Math.max.apply(null,number));
console.log(Math.min.apply(null,number));


//Example 3-

function f(){
    console.log(this.name);
}

f= f.bind({name:"Anjali"}).bind({name:"Sita"}) //once function is bound by then it can't be bound again. bind chaining will not work in JS

f()



//Example- 4

let user={
    name:"Reema",
    getName: function(){
    console.log(this.name);
    },
    getArrowName:()=>{
        console.log(this.name);
    }
}
let user2={
    name:"Geeta"
}


user.getName.call(user2)
user.getArrowName.call(user2)


//polyfill for call()


Function.prototype.myCall= function(context,...args){
    if(typeof this !="function"){
        throw new Error(this, "It's not callable")
    }
    context.fn= this; //fn is function created- any this keyword inside of getArrowName start pointing to the this context/object
    context.fn(...args);
}

user.getArrowName.myCall(user2)