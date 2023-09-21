const obj={
    abhi: 10,
    jeet:20,
    raj:30
}


for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log("Name="+Object.keys(obj)[i]+"marks="+obj[Object.keys(obj)[i]]);
}

for(i in obj)
{
    console.log("Name"+i+"Marks"+obj[i]);
}


