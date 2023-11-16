const promiseone=new Promise(function(resolve,reject){
     //Do an async task
     //DB call,cryptography,network
     setTimeout(function(){
        console.log('Async task is complete');
        resolve();
     },1000);
});

promiseone.then(function(){
    console.log("Promise consumed");
});

//2nd way to create promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },2000);
}).then(function(){
    console.log("Async 2 are consumed");
})

//promisethree: Give Parameter to resolve

const promisethree=new Promise(function(resolve,reject){
   setTimeout(function(){
       resolve({name:"Abhi",password:"1234"});

   },2000);
});

promisethree.then(function(user){
    console.log(user);
});

//Now to learn and use about reject(),catch,finally,chaining then

const promisefour=new Promise(function(resolve,reject){
       setTimeout(function(){
            let error=true;
            if(error)
              {
                resolve({name:"Abhi",password:"1234"});
              }
            else{
                reject("E:Something went wrong");
            }
       },2000);
});

promisefour.then(function(user){
    console.log(user);
    return user.name;

}).then(function(name){
    console.log(name);
})
.catch(function(e){
    console.log("Error=",e);
}).finally(function(){
    console.log("finally block always run, error found or not");
});
