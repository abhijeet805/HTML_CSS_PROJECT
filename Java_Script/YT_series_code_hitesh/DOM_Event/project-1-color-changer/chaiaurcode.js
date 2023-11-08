const buttons=document.querySelectorAll('.button');
console.log(buttons);//It display Nodelist of buttons

buttons.forEach(function(but){
     but.addEventListener('click',function(e){
          console.log(e);//display tag when we click on their
          console.log(e.target);//give the id and class of given tag

          if(e.target.id=='grey'){
            document.body.style.backgroundColor="grey";
          }
          if(e.target.id=='white')
          {
            document.body.style.backgroundColor=e.target.id;
          }
          if(e.target.id=='blue')
          {
            document.body.style.backgroundColor=e.target.id;
          }
          if(e.target.id=='purple')
          {
            document.body.style.backgroundColor=e.target.id;
          }
     });
});