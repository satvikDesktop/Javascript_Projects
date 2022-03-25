let counter=0

function inc(){
    counter++
    print()
}
function dec(){
    counter--
    print()
}

function print(){
console.log(counter)  

if(counter<0) 
document.getElementById("txt").style.color="#fc0303";
else if(counter>0)  
document.getElementById("txt").style.color="#03fc1c";

document.getElementById("txt").innerHTML = counter ;
}
