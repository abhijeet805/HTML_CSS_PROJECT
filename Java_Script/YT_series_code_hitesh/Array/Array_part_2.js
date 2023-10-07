// Operation on two array
let a=[10,25,454,98,75,33,2,30];
let a1=[25,66,88,77,12,0,2,3];

// created like as a Java
let a2=new Array(1,5,2,63,98,42,88);



// spread operator
const newarr=[...a,...a1,...a2];
console.log(newarr);

a.push(a1);
console.log(a);
console.log("Concat="+a2.concat(a1));
console.log(a[8][1]);

// flat()
a3=[1,2,3,[5,2,8,2,8,5],5,9,[2,5,[5,2,[5,2,8,7,56],8]]];
const narr=a3.flat(Infinity);
console.log("Flat=\n"+narr);
console.log(typeof narr);

// isArray
console.log(Array.isArray(narr));

// Convert to an array
const s1="Abhi555";
console.log(Array.from(s1));
console.log(Array.from("Hi,How are you"));

// we cannot convert onject into an array
console.log(Array.from({name:"Abhi"}));

// of(): I convert Values into an array
let b1=20;
let b2=40;
let b3=50;
console.log(Array.of(b1,b2,b3));