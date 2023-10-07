const ob={
    name:"abhi",
    age:18,
    location:"Shrirampur",
    isloggedin:"false",
    lastloggedDays:["Monday","Friday"],
    "Full Name":"Abhi Vetal"
}

console.log(ob.age); // Not good practice
console.log(ob["age"]); //good practice\

//Change value from object
ob.age=50;
console.log(ob["age"]);

// freeze(): After freeze we can not change object not manipulate
Object.freeze(ob);
ob.age=100
console.log(ob["age"]);

