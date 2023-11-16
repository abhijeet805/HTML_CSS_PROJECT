class stud{
    constructor(name){
        this.name=name;

    }
    logMe(){
        console.log(`Studname is :${this.name}`);
    }
}

class Teacher extends stud{
    constructor(rno,name,pass){
        super(name);
        this.rno=rno;
        this.pass=pass;
    }
}

const ob=new Teacher(101,"OM",5432);
ob.logMe();