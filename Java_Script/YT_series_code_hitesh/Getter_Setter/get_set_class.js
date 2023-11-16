class User{
    constructor(id,name,email){
       this.name=name;
       this.id=id;
       this.email=email;
    }
//    It is used for Hide Password or logic
    get id(){
       return `${this._id}Abhi`;   
    }
    
    set id(value){
       this._id =value;
    }
    get name(){
        return `${this._name}Abhi`;   
     }
     
     set name(value){
        this._name =value;
     }

}


let ob=new User(101,"om",'om@123');
console.log("ID:",ob.id);
console.log("Name:",ob.name);
