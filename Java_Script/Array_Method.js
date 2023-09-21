const a=[10,20,30,"Abhi","Raj"];
console.log(a);
console.log(typeof(a));

//converting to String
let b=a.toString();
console.log(b);
console.log(typeof(b));

//join()
// b.join("_");
// console.log(b);

//push() & pop()

a.pop();
console.log("pop()=  "+a);
a.push("jeet");
console.log("push()=  "+a);
console.log(a.length);
//shift() & unshift()

a.shift();
console.log("shift()="+a);
a.unshift(100);
console.log("unshift()=  "+a);
console.log(typeof(a));

// delete() &concat()

delete a[2];
console.log("delete operator= "+a);//delete is an operator
console.log(a);
a[2]=30;
console.log(a);

let x=[10,20,30,40,50];
let y=[100,200,300,400,500];
let z=["King",2000,3000,"Raj","abhi"];

let n=x.concat(y,z);
console.log(n);

//splice() & slice() &reverse

x.splice(2,3,300,400);
console.log(x);

let p=y.slice(2);
console.log(p);
console.log(y.slice(1,4));

console.log(z.reverse());