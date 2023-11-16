const demo={
    name:"om",
    rno:101,
    add:"nagar"
}

const demo1={
    name:"om",
    rno:101,
    add:"nagar"
}
console.log(Object.getOwnPropertyDescriptor(demo,"name"));

// defineProperty is used to fixed value from object,writable,enumerble,confi....

Object.defineProperty(demo,"name",{
    writable:false,
    enumerable:false
});

console.log(Object.getOwnPropertyDescriptor(demo,"name"));

for(let [key,value] of Object.entries(demo1)){
    if(typeof value !== 'function'){
    console.log((`${key} : ${value}`));
    }
}