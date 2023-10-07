// object created by constructor is called singleton object
const ob=new Object();

// Nested object
const info={
    email:"abhi@gmail.com",
    fullname:{
         username:{
            first:"Abhijeet",
            last:"Vetal"
         }
    }
}
console.log(info);
console.log("\n");

console.log(info.fullname);
console.log("\n");
console.log(info.fullname.username);
console.log("\n");

console.log(info.fullname.username["last"]);
console.log(info.fullname.username["first"]);