const x=[10,20,30,40,50,60,70];
//ForEach
console.log("\nFor Each=");
x.forEach((value,index,array)=>
{ 
   console.log(value,index,array);
})

//ForEach
console.log("\nFor Each= ");
x.forEach((value)=>
{
     console.log(value*value);
})

//Array.form
console.log("\nArray from");
let a="Abhijeet";
let b=Array.from(a);
console.log(b);
console.log(typeof(b));

//for in loop
console.log("\nFor in= ");
for(let key in x)
{
    console.log(key);
}
//for of loop
console.log("\nFor of loop");
for(let val of x)
{
    console.log(val);
}
console.log("\nmap= ");
let n=x.map((val)=>
{
    console.log(val);
    return val+2;
})
console.log("New array from creates by map");
console.log(n);

//Array.filter
console.log("\nArray.filter=");
let d=x.filter((val)=>
{
    return val<50;
})
console.log("\nThis Array created by filter loop");
console.log(d);

//reduce
console.log("\nreduce()=");
let y=[1,2,3,4,5];
let aa= y.reduce((h1,h2)=>
{
    return h1+h2; //firstlly addded first two element then added one by one from the array
}
)
console.log(aa);
//** */
console.log("\nSecond way to write reduced");

const func_add = (h1,h2)=>
{
    return h1+h2;
}
let a1=y.reduce(func_add);
console.log(a1);