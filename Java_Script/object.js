const ob={rno:101,name:"om",per:55.99,class:"TY"}
console.log(ob);
ob1={a:"ab"}
ob[4]=ob1;
console.log(ob)



//2nd example
const obj={
    abhi: 10,
    jeet:20,
    raj:30
}


for(let i=0;Object.keys(obj).length;i++)
{
    console.log("Name="+Object.keys(obj)[i]+"marks="+obj[Object.keys(obj)[i]]);
}

for(i in ob)
{
    console.log("Name"+i+"Marks"+obj[i]);
}


