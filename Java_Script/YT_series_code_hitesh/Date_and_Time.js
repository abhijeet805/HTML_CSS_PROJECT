let date1=new Date();
console.log(date1);
console.log(date1.toString());
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleString());
console.log("\n");

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(date1.getTime());

// convert Time Milisecond into second
console.log(Math.floor(Date.now()/1000));

let newdate=new Date();
console.log("Date="+newdate);
console.log("Month="+(newdate.getMonth()+1));
console.log("Day="+newdate.getDay());
console.log("Year="+newdate.getFullYear());

// String Intenationallization
newdate.toLocaleString('default',{
    
});