function MultipleBy5(num){
    return num*5;
}

MultipleBy5.power=2;

MultipleBy5.prototype.increment = function(){
    console.log("Hiii Abhi");
}

console.log(MultipleBy5(5));
console.log(MultipleBy5.power);
console.log(MultipleBy5.prototype);
