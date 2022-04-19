let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoices(){
    const choice=['r','s','p'];
    const index = Math.floor(Math.random()*3);
    return choice[index];
}

function convertToWord(word){
    if(word==='r') return "Rock";
    else if(word==='s') return "Scissor"
    else return "Paper"
}


function win(userChoices,computerChoices){
    userScore++;
    userScore_span.innerHTML= userScore;
    const smalluserword = " ( user )".fontsize(3).sub();
    const smallcompword ="( bot )".fontsize(3).sub();
    result_p.innerHTML = convertToWord(userChoices)+ smalluserword+" beats "+convertToWord(computerChoices)+ smallcompword;
    document.getElementById(userChoices).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoices).classList.remove('green-glow'); },300)

}
function loose(userChoices,computerChoices){
    computerScore++;
    computerScore_span.innerHTML = computerScore
    const smalluserword = " ( user )".fontsize(3).sub();
    const smallcompword ="( bot )".fontsize(3).sub();
    result_p.innerHTML = convertToWord(userChoices)+ smalluserword + " beaten by "+ convertToWord(computerChoices)+smallcompword;
    document.getElementById(userChoices).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userChoices).classList.remove('red-glow'); },300)

}
function draw(userChoices){
    result_p.innerHTML = "It's a tie of "+convertToWord(userChoices)+"s";
    document.getElementById(userChoices).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(userChoices).classList.remove('gray-glow'); },300)

}

function game(userChoices){
const computerChoices= getComputerChoices();
switch(userChoices+computerChoices){
    case "rs":
    case "pr":
    case "sp":
       win(userChoices,computerChoices);
       break;
    case "rp":
    case "ps":
    case "sr":
        loose(userChoices,computerChoices);
        break; 
    case "pp":
    case "ss":
    case "rr":
        draw(userChoices);
        break;
}
}

function main(){

    rock_div.addEventListener("click", function(){
        game('r');
    })
    paper_div.addEventListener("click", function(){
        game('p')
    })
    scissor_div.addEventListener("click", function(){
        game('s')
    })
}

main(); 