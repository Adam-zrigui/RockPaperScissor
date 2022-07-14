let computer = ["rocks", "scissor" , "paper"]
let ai = document.getElementById("AI")
let rock = document.getElementById("rock")
let scissor= document.getElementById("scissor")
let paper = document.querySelector("#paper")
let RanComp = computer[Math.floor(Math.random() *computer.length)]
let player = document.getElementById("me")
let winner =document.getElementById("winner")
let SPaper = "paper"
 function Paper() {
if (paper.onclick &&  RanComp == computer[1]) {
    player.textContent = 'paper';
ai.textContent = 'scissor'
winner.textContent = "you lost!"

} else if (paper &&  RanComp == computer[2]) {
player.textContent = 'paper';
 ai.textContent = 'paper';
 winner.textContent = 'draw'
}  else {
    player.textContent = 'paper'
    ai.textContent = 'rock'
    winner.textContent = "you won!"

}
  
}
if(paper == true) {
    addEventListener('click', Paper)
}

 
function Rock() {
    if (rock.onclick &&  RanComp == computer[2]) {
        player.textContent = 'rock';
    ai.textContent = 'paper'
    winner.textContent = "you lost!"
    
    } else if (rock.onclick &&  RanComp == computer[0]) {
    player.textContent = 'rock';
     ai.textContent = 'rock';
     winner.textContent = "it's a draw!"
    }  else {
        player.textContent = 'rock'
        ai.textContent = 'scissor'
        winner.textContent = 'you won!'
    
    }
}
if (rock == true) {
    addEventListener('click', Rock)
}
 
function Scissor() {
    if (scissor.onclick &&  RanComp == computer[0]) {
        player.textContent = 'scissor';
    ai.textContent = 'rock'
    winner.textContent = "you lost!"
    
    } else if (scissor.onclick &&  RanComp == computer[1]) {
    player.textContent = 'scissor';
     ai.textContent = 'scissor';
     winner.textContent = "it's a draw!"
    }  else {
        player.textContent = 'scissor'
        ai.textContent = 'paper'
        winner.textContent = 'you won!'
    
    }
}
if (scissor == true) {
    addEventListener('click', Scissor)
}