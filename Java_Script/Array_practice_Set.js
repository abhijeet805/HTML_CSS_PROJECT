//question2


//question3
let a=[10,20,30,12,43,50]
let b=a.filter((val)=>
{
     if(val%10==0)
     {
        return val;
     }
     //or   return val%10 == 0;
})

console.log("Divisible by 10="+b);

// question4
let c=a.map((val)=>
{
    return val*val;
})
console.log("Square of array="+c);

// //question5
// d=[1,2,3,4,5];

// let e=d.reduce((h1,h2)=>
// {
//     return h1+h2;
// })

// let f=1;
// for(let i=1;i<=e;i++)
// {
//     f=f*i;
// }
// console.log("Factorial of number="+f);

//or
let d=[1,2,3,4,5];

const func_fact=(h1,h2)=>
{
    return h1*h2;
}

let r=d.reduce(func_fact);
console.log("Factorial of number="+r);