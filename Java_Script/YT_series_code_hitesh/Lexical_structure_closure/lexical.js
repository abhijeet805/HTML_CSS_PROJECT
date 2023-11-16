// It's outer Function allow to access variable into the Inner Functiuon
 function outer(){
    let name="abhi"

    function Inner(){
         console.log(name);
    }
    function Inner2(){
        console.log(name);
    }
    Inner();
    Inner2();
 }
 outer();
