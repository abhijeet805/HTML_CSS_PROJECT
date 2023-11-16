class User{
    constructor(id,name,pass){
        this.id=id;
        this.name=name;
        this.pass=pass;
    }
    encryptPass(){
        console.log(`Encrypted password is:${this.pass}`);
    }
    changeUsername(){
        console.log(`${this.name.toUpperCase()}`);
        return `${this.name="abhijeet"}`
    }
}

const ob=new User(101,"Om",1234);
console.log(ob);
ob.encryptPass();
console.log(ob.changeUsername());

// Behind the Scene

console.log("\n\nBehind the Scene\n\n");

function User2(id,name,pass){
    this.id=id;
    this.name=name;
    this.pass=pass;
}
User2.prototype.encryptPass2=function(){
     return `${this.pass}`;    
}
User2.prototype.changeUsername2=function(){
    return `${this.name.toUpperCase()}`;    
}

const ob2=new User2(102,"sai",4321);
console.log(ob2);
console.log(ob2.encryptPass2());
console.log(ob2.changeUsername2());