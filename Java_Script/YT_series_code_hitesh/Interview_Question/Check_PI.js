const disc= Object.getOwnPropertyDescriptor(Math,"PI");

console.log(disc);
console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);

// Its Not Changable