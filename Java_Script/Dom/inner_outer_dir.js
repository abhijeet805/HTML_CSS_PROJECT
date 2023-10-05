console.log(document.getElementsByTagName("nav")[0])
console.dir(document.getElementsByTagName("nav")[0])

let first=document.getElementById("navbar");
console.log(first.outerHTML)
console.log(first.innerHTML)

// first.innerHTML="<i>Hey I am Itallic</i>";
// first.outerHTML="<span> Hey i am span </span>"

console.log(document.body.firstChild);
console.log(document.body.firstChild.data);

console.log(document.body.firstChild.nodeValue);

//Attribute
console.log(first);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("id"));
console.log(first.hasAttribute("style"));
// first.setAttribute("hidden","true");
first.setAttribute("class","true abhi");