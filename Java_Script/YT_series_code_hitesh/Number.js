const num=400;
const num1=new Number(1000);
console.log(num);
console.log(num1);
console.log("\n");
//convert Number into String
console.log(num.toString());
console.log(typeof num);

console.log("after decimal piont   "+num.toFixed(3));
console.log("\n");
//precision function: It means only number of values
const n=123.8960;
console.log(n.toPrecision(2));
console.log(n.toPrecision(4));
console.log("\n");

//toLocalStrong
const hundread=10000000;
console.log(hundread.toLocaleString());//us doller
console.log(hundread.toLocaleString('en-IN'));//indian doller

