// Stack memory: It give copy of variable,If reference variable change then original variable can not change.
let a=10;
let b=a;
b=20;

console.log(a);
console.log(b);

// Heap Memory : It give reference of variable,If reference variable change then original variable also change.

let k={
    a:10,
    b:20,
    c:30,
}
console.log(k);
let j=k;
j.b=300;
console.log(k);
console.log(j);