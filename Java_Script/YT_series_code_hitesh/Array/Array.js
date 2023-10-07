const a=[10,25,454,98,75,33,2,30];
const a1=[25,66,88,77,12,0,2,3];

// created like as a Java
const a2=new Array(1,5,2,63,98,42,88);
console.log(a2);
console.log(a2[5]);

// Array Functions push.pop.shift,unshift
console.log("Deleted value="+a1.pop());
a1.pop();
a1.push(33);
console.log(a1);

console.log("Deleted Value="+a1.shift());
a1.unshift(2000);
console.log(a1);

// indexOf,includes
console.log(a.includes(1000));
console.log(a.indexOf(3));
console.log(a.indexOf(454));

// join()
const stringarr=a.join();
console.log(a);
console.log(stringarr);

// slice & splice
console.log(a1.slice(1,5));
console.log(a2.splice(1,5))
console.log(a2);



