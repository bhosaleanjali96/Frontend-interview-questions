//JS Object- An object is collection of properties and property is an association between key an value

const student={
    name:"Reema",
    age:24,
    "like this object":true
}
student.name= "Seema"
delete student // not delete the entire object
delete student.name //delete the name property
delete student["like this object"]
console.log(student);


//adding dynamic key value pair to object
property= "firstName"
name="Geeta"


let user={
    [property]:name
}

console.log(user);


//iterate through js object- for in loop
let person={
    name:"Sita",
    gender:"female",
    age:23
}

for(key in person){
    console.log(person[key]);
}

console.log(person);


//Question-1
//create a function multiplyByTwo(obj) that multiply the all numeric property by 2


let nums= {
    num1:100,
    num2:200,
    name:"meeta"
}

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] ==="number"){
            obj[key] *= 2
        }
    }
}

multiplyByTwo(nums);
console.log(nums);



//Question-2

const a={};
const b={key:"b"}
const c= {key:"c"}

a[b]=123
a[c]=456
console.log(a);
console.log(a[c]);


//JSON.Stringify and JSON.parse
//JSON.Stringify- to convert object into string
//JSON.parse - to convert object which is in the form of string to object back

let object1= {
    num1:24,
    num2:56
}


let conversion= JSON.stringify(object1)
let conversionOnlyDesiredValuesToString= JSON.stringify(object1,["num2"])
let result=JSON.parse(conversion)
let resultOfJSONParseAndStringify= JSON.parse(JSON.stringify(object1))

sessionStorage.setItem("test",conversion)
let sessionResult= sessionStorage.getItem("test")
let outcome= JSON.parse(sessionResult)

console.log(outcome);



//Question-3
let nameSpread= [..."gita"];
console.log(nameSpread);

let userProfile={
    name:"Meera",
    age:20
}

let adminData={
    title:"Data",
    ...userProfile
}

console.log(adminData);



//Destructuring of object
let user2={
    user2Name:"mita",
    age:34,
    details:{
        firstName:"naina",
        age:23
    }
}

let user2Name= "Rita"
const {user2Name: newuser2Name, age, details:{firstName}} = user2
console.log(newuser2Name,firstName);



//Question-4
//object reference

let p= {
    rollNo:1
}
let q={}

p=q
p.rollNo= 2
console.log(q.rollNo);


//shallow copy- we have reference to original object
//deep copy- clone of object where we don't have reference to the coping object

//3 ways to deep copy- this will not deep copy nested objects
let objectForCopy= {
   num1:1,
   num2:2
}

let copyObj1= Object.assign({},objectForCopy) 
let copyObj2= JSON.parse(JSON.stringify(objectForCopy)) 
let copyObj3= {...objectForCopy}
objectForCopy.num1=5


//this keyword for object (Implicit binding)
// this inside a object and inside function statement- reference to it's immediate parent
//this inside a object and inside arrow function reference to global object- window object

let userData= {
    name:"Anjali",
    getName(){
        name:"Lily"
        return this.name
    },
    getNewName: ()=>{
        name:"Nita"
        return this.name
    }
}

console.log(userData.getName());
console.log(userData.getNewName());

//example of this with setTimeout()

let usersData= {
    age:5,
    logMessage(){
        age:7
        console.log(this.age);
    }
}

setTimeout(function(){
    usersData.logMessage();
},1000)


//example

var length= 4;

function callBack(){
    console.log(this.length);
}

const objForLength= {
    length: 5,
    getLength(){  // arguments= [callBack, 1, 2]
        arguments[0]()
    },
};


objForLength.getLength(callBack,1,2)