let name="     Abhijeet     ";

String.prototype.TrueLength=function(){
    console.log(`${this.name}`);//o/p is undefine
    console.log(`${this}`);// o/p is Declare String
    console.log(`True Length is :${this.trim().length}`);
}
name.TrueLength();

"  Vetal ".TrueLength();