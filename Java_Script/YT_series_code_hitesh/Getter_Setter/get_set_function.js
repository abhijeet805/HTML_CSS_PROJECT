//Behind the scene
function User(id,pass){
    this._id=id;
    this._pass=pass;

    Object.defineProperty(this,'id',{
        get:function(){
            return this._id;
        },
        set:function(value){
            this._id=value;
        }
    })
    Object.defineProperty(this,'pass',{
        get:function(){
            return this._pass
        },
        set:function(value){
            this._pass=value;
        }
    })
}

const ob=new User(101,'1234');
console.log("id:",ob.id);
console.log("id:",ob.pass);