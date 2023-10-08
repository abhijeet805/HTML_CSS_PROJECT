function login(username)
{
    if(!username) // if result is false then it not enter.
    {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`;
}

console.log(login("abhi555"));

console.log("\n");
console.log(login());