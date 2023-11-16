let myHero=["Thor","spiderman"];

let Heropower={
   thor:"Hammer",
   spiderman:"sling",

   getSpiderpower: function(){
    console.log(`spidy power is ${this.spiderman}`);
   }
}

console.log(Heropower.getSpiderpower());

Object.prototype.Abhi = function(){
    console.log("Abhi prototype is present in all Objects");
}

Array.prototype.Abhijeet= function(){
    console.log(" this Array Prototype is present in only Array Not an Object");
}

Heropower.Abhi();
myHero.Abhi(); //Accesable in array (array in down sidw approach)
myHero.Abhijeet();
// Heropower.Abhijeet();//Not access in an Object
