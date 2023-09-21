//Q1
let s1="Abhi\"";
console.log(s1.length);

//Q3
let s2="ABHIJEET";
console.log(s2.toLowerCase());

//Q4
let s3="please give RS 1000";
// let n=Number.parseInt(s3.substr("please give RS ".length,4));
// or 
let n=Number.parseInt(s3.slice("please give RS ".length));
console.log(n);
console.log(typeof(n));

//Q5
//this String is not change because it is imutable 
