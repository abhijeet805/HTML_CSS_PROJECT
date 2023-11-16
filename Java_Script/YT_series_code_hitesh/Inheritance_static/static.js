class stud{
    constructor(name){
        this.name=name;
    }

    logMe(){
        console.log(`Studname is :${this.name}`);
    }

    static createId(){
        return `123`;
    }
}

class Teacher extends stud{
    constructor(rno,name,pass){
        super(name);
        this.rno=rno;
        this.pass=pass;
    }
}


const ob=new stud("Abhi");
console.log(ob.createId());