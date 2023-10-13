const user={
    name:"ABhi",
    price:1000,
    welcome:function () {
        console.log(`Hi ${this.name} How are You`);
        console.log(this);
    }
}
user.welcome()
user.name="Sam";
user.welcome()
console.log(this);

// Example
const chai=function () {
    let name="abhi"
    console.log(this.name);
}
chai();