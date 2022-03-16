
const value = ["0","1", "2", "3","4", "5", "6","7", "8", "9","A", "B", "C","D", "E", "F"]

let hex=""
let random

function hexGenerator()
{
   
    for (let i = 1; i < 7; i++) {

    random=Math.floor(Math.random() * value.length)

    hex = hex + value[random];
   
    }
   
    hex="#"+hex

    document.body.style.backgroundColor = hex;
    

    hex=""
    
}




