function makeFunc(){
    let name="Abhijeet";
    function disp(){
        console.log(name);
    }
    return disp;
}

const newfunc = makeFunc();
newfunc();
