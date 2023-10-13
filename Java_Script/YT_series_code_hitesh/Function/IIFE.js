// Immediately Invoke Function Expression
// 1)Named IIFE

(function chai(){
    console.log("DB Connected Named");
})();
// If semicolon not put then IIFE was not terminated

// 2)UnNamed IIFE

(()=>{
    console.log("DB Connected Unnamed");
})();

// LLFE with Parameter
(function chai2(num1,num2) {
   console.log(num1+num2);  
})(10,20);

// Unnamed with para 
((user)=>{
   console.log(user);

})("Abhijeet")

console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")