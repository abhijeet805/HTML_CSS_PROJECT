const sym=Symbol("key1");

// Interview question: Acces Symbol within a object
const ob={
  [sym]:"value"
}
console.log(ob[sym]);

// Addvalue within the object

ob.greeting=function(){
    console.log("Hello JS User");
}
console.log(ob["greeting"]);
