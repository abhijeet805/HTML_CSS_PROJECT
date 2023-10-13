const name=(num1,num2)=>{
     return num1+num2
}
console.log(name(10,20))

//Implicit Function 
// If we are wrap in the ()pren.. then return keyword is optional
// abhi(100,200);  Not allow befor caliing
const abhi=(num1,num2)=>(num1+num2)

console.log(abhi(80,20));

// OR  this function works in the browser
// const abhi1=(num1+num2)=> return num1+num2
// console.log(abhi1(1000,2000));
