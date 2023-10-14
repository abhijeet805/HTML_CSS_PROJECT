const map=new Map();
map.set('IN',"India");
map.set('Fr',"France");
map.set('USA',"United State of America");


for(const [key,value] of map)
{
    console.log(key+':-'+value);
}
