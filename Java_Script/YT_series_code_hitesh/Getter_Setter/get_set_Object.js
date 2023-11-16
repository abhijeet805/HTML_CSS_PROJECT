let user={
    _email:"abhi@123.com",
    _pass:"abcd",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
         this._email=value;
    } 
}

const tea= Object.create(user);
console.log(tea.email);