const a=[10,20,30,40,50];

for(const i in a)
{
    console.log(i);
}

console.log();

const obj={
    1:"One",
    2:"Two",
    3:"Three"
}

console.log("Keys");
for(let i in obj)
{
   console.log(i);
}

console.log("\nValues");
for(let i in obj)
{
   console.log(obj[i]);
}
