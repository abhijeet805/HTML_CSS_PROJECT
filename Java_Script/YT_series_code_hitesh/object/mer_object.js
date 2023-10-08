const ob={
    name:"abhi",
    age:18,
    location:"Shrirampur",
    isloggedin:"false",
    lastloggedDays:["Monday","Friday"],
    "Full Name":"Abhi Vetal"
}

const ob1={
    name:"Abhijeet",
    rno:101,
    per:78.88
}

const ob2=Object.assign({},ob,ob1);
console.log(ob2);

// Using Spread
const ob3={...ob,...ob1,...ob2};
console.log("\n");

console.log(ob3);