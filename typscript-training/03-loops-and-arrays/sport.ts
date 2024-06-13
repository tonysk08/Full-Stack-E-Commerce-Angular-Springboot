let sportsOne: string[] = ["golf","criket","tenis", "swiming"];

//sinple for loop
console.log(" ");

for(let tempSport of sportsOne)
{   
    if(tempSport == "criket")
    {
        console.log(`${tempSport} Her favorite!`);
    }
    else
    {
            
        console.log(tempSport);
    }
}