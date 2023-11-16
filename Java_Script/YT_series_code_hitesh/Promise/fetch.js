async function getAllUser()
{
    try{
       const responce=await fetch('https://api.github.com/users/hiteshchoudhary');
       const data=await responce.json();
       console.log(data);
    }
    catch(e){
        console.log("E:",e);
    }
}
getAllUser();

//2nd way to fetch error


fetch('https://api.github.com/users/hiteshchoudhary')
.then((variable)=>{
     return variable.json();
})
.then((data)=>{
  console.log(data);
})
.catch((e)=>{
    console.log("Error=",e);
});
