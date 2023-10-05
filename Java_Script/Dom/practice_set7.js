// Q1
document.getElementsByTagName("nav")[0].firstElementChild.firstElementChild.style.color="red";
// Q3
document.getElementsByTagName("ul")[0].firstElementChild.style.color="Blue";
document.getElementsByTagName("ul")[0].lastElementChild.style.color="green";

// Q4
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
         element.style.background="cyan";
})

