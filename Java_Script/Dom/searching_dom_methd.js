
//get getElementsByClassName

let ctitle=document.getElementsByClassName("card-title")[0]
ctitle.style.color="red";

// Not Supported let arr=Array.from(document.getElementsByClassName("card-title"))
// ctitle[0].style.color="Blue";
// ctitle[1].style.color="Blue";
// ctitle[2].style.color="Blue";
// ctitle[3].style.color="Blue";
document.getElementsByClassName("card-title")[1].style.color="Blue";
document.getElementsByClassName("card-title")[2].style.color="green";
document.getElementsByClassName("card-title")[3].style.color="gray";

//getElementsById
//It does not perform as Array. that's we give the different id'd for tags
document.getElementById("text-card").style.background= "aqua";
document.getElementById("text-card1").style.background= "blue";
document.getElementById("text-card2").style.background= "red";
document.getElementById("text-card3").style.background= "yellow";

//querySelectorAll
let ctitles=document.querySelectorAll(".btn-primary");
ctitles[3].style.background= "red";
ctitles[2].style.background= "pink";
ctitles[1].style.background= "green";

//queryselector =It select only first element
let bu=document.querySelector(".this");
bu.style.color="orange"

//getElementsByTagName
let t=document.getElementsByTagName("p")[0];
console.log(t);
console.log(document.querySelector(".card-title").getElementsByTagName("p"))
