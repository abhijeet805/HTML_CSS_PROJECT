const randomColor=function()
{
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    { 
         color += hex[Math.floor(Math.random()*16 )];
    }
    return color;
};

let intervalId;
// Start Background color function
const startBgcolor=function(){
    if(!intervalId){
    intervalId= setInterval(Bgcolor,1000);
    }
// function of setInterval
 function Bgcolor(){
  document.body.style.backgroundColor= randomColor();
 }
};

// Start Background color function
const stopBgcolor=function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector("#start").addEventListener('click',startBgcolor);
document.querySelector("#stop").addEventListener('click',stopBgcolor);