// Dont Allow to call previoslly the definition
// a()
const a=function()
{
    console.log(10+20);
}


// Allow to call previoslly the definition
b();
function b(){
    console.log(10+90);
   console.log(this);
}
