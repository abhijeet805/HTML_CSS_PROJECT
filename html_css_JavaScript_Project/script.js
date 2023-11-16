let result=document.body.querySelector("#display");

let expression='' ;
function calculate(num) {
   
   if(num==''){
      result.value='';
      expression='';
   }

   else if(num=='=')
   {  
      result.value=eval(expression);
      
   }
  else
  {
    expression=expression + num;
    result.value=expression;
  }
  
}