function setUsername(id){
//    Complex DB Calls
     this.id=id;
     console.log("User id=",id);
}

function createUser(id,name,email){
   setUsername.call(this,id);
    this.name=name;
    this.email=email;

}

const ob=new createUser(101,"om","on@123");
console.log(ob);