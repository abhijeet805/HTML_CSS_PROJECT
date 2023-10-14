const arr=[10,20,30,40,50];

//1 Normal Function
arr.forEach(function (item){
    console.log(item);
})

//2 Arrow Function
console.log();
arr.forEach((item)=>{
   console.log(item);
})

//3 normal function with reference
console.log();
function print(items)
{
  console.log(items);
}
arr.forEach(print);


//4 arrow function with reference
console.log();
let print1=(items)=>
{
  console.log(items);
}
arr.forEach(print1);

// 5 print item,index &array/object using arrow function

arr.forEach((key,item,arr)=>{
   console.log(key+" "+item+" ",arr);
})
