
const moves = ["✊", "✌️","🖐"]
let selected_move

function computers_move(){

    for (let i = 1; i < 3; i++) {

        random = Math.floor(Math.random() * moves.length)
        selected_move=moves[random]
    }
}


var choices = document.getElementById('choice-overlay');

function onR() { //rock
    computers_move()
    document.getElementById("choice-overlay").style.display = "block";
    text1.innerHTML = "Your choice  -  ✊" 
    text2.innerHTML = "Computer  chose  -  " + selected_move
    if (moves[random] == "✌️")
    text3.innerHTML = "You won"     
    else if (moves[random] == "🖐")
    text3.innerHTML = "Computer won"  
    else 
    text3.innerHTML = "Draw"  
    effects() 
}
function onS() { //scissors
    computers_move()
    document.getElementById("choice-overlay").style.display = "block";
    text1.innerHTML = "Your choice  -  ✌️" 
    text2.innerHTML = "Computer  chose  -  " + selected_move
    if (moves[random] == "✊")
    text3.innerHTML = "Computer won" 
    else if (moves[random] == "🖐")
    text3.innerHTML = "You won"
    else
    text3.innerHTML = "Draw"
    effects()
}
function onP() { //paper
    computers_move()
    document.getElementById("choice-overlay").style.display = "block";
    text1.innerHTML = "Your choice  -  🖐" 
    text2.innerHTML = "Computer  chose  -  " + selected_move

    if (moves[random] == "✌️")
    text3.innerHTML = "Computer won"
    else if (moves[random] == "✊")
    text3.innerHTML = "You won" 
    else
    text3.innerHTML = "Draw"
    effects()
}

function off() {
document.getElementById("choice-overlay").style.display = "none";
}

function effects (){
    if (text3.textContent =="You won"){
        text3.textContent += " 🎉"
        text3.style.color = "#42ff5f"
    }
    if (text3.textContent == "Computer won"){
        text3.textContent+= " 🤖"
        text3.style.color = "#ff4242"
    }
    if (text3.textContent == "Draw"){
        text3.textContent+= " 😐"
        text3.style.color = "#8c8c8c"
    }
}

