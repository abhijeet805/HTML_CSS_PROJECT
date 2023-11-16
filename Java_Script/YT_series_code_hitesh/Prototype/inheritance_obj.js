// inheritance
const user={
    name:"Abhi",
    email:"Abhi@555"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
    // __proto__:Teacher //Not Accesable
    
}
Teacher.__proto__ = user;
console.log(Teacher.name);

// modern Approach
Object.setPrototypeOf(TeachingSupport,Teacher);
console.log(TeachingSupport.email);
