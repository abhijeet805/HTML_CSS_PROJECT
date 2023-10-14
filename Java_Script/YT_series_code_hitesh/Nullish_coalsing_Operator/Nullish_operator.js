let val1;

val1=5 ?? 10
console.log(val1)

val1= null??100
console.log(val1);

val1=null ?? 20 ?? 1000
console.log(val1);

val1=undefined ?? 12 ?? 200
console.log(val1);