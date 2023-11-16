function  createUser(name,price){
   this.name=name;
   this.price=price;   
}
// In this prototype we can not use Arrow function
createUser.prototype.increment=function(){
   this.price+=1000;
}

createUser.prototype.printMe = function(){
   console.log(`Price of chai= ${this.price}`);
}

const chai=new createUser("chai",50);
const tea=new createUser("tea",100);
chai.increment();
chai.printMe();

tea.increment();
tea.printMe();