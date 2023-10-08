//object
const ob1={
    name:"Abhijeet",
    rno:101,
    per:78.88
}

function obj(anyobject)
{
   console.log(`student name is${anyobject.name} and percentage is ${anyobject.per}`);
}

obj(ob1);
console.log("\n");
// direct pass object to function

function obj1(anyobject)
{
   console.log(`student name is${anyobject.name} and percentage is ${anyobject.per}`);
}

obj1({
    name:"Abhi",
    rno:101,
    per:98.88
});


// array with function
const a=[10,20,30,40,50];

function arr(newarr)
{
    console.log(newarr);
}

arr(a);
arr([0,8,5,6,9,8,5])