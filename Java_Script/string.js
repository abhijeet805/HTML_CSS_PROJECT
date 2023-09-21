let s1="Abhijeet";
console.log(s1.length);
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());

let ne=s1.slice(2,-2);
console.log("slice=  "+ne);
let ne1=s1.slice(0,4);
console.log("Slice=  "+ne1);

console.log("substring=   "+s1.substring(-2,4)); // if we put -ve values then he treted as a 0 value
console.log("substr=   "+s1.substr(2,4));     //It print extracted parts in 4 charcter

let s2=`abhiraj vetal raj`;

console.log("\nreplace() String=  "+s2.replace("raj","jeet")); //It repalce only first match
console.log("replaceAll() String=   "+s2.replaceAll("raj","jeet")); //It repalce only all match

console.log("\nconcat() String=    "+s1.concat("  #   ",s2));
console.log("concat() string=  "+s1+"  * "+s2);

let s3='     hello world     ';
console.log("\ntrim()="+s3.trim()); //It remove space both start and End side
console.log("trimStart()="+s3.trimStart()); //It remove space only Start side
console.log("trimEnd()="+s3.trimEnd()); //It remove space only  End side

/*  This Function not woeking in this Nodejs 20 platform
let s4=5;
console.log("padStart()= "+s4.padStart(4,"0"));
console.log("padStart()= "+s4.padEnd(4,"0"));
*/

let s5="Hello";
console.log(s5[3]);
console.log("charAt()= "+s5.charAt(3));
console.log("charCodeAt()= "+s5.charCodeAt(3)); //It return UTF-16 code (int between 0 to 65535)

//Converting String into Array

let s6="A,B,B,C,D,E,F,G";
let a=s6.split(",");
console.log("\nArrat of String= "+a);