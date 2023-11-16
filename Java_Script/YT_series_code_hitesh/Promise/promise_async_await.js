//It is a second way to consume promise
const promisefive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=false;
        if(error)
        {
            resolve({name:"Abhi",pass:"1234"});
        }
        else{
            reject("E:something went wrong");
        }
     },3000);
});

async function consumePromise(){
    try{
        const responce=await promisefive;
        console.log(responce);
    }
    catch(e)
    {
       console.log("Error=",e);
    }
}
consumePromise();