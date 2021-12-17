let clickCount = 0;
let computerCount = 0;
let userCount = 0;

function reply_Click(textValue) {


    clickCount++;
    console.log(clickCount);
    let userChoice = document.getElementById(textValue).getAttribute("textValue").toLocaleLowerCase();





    let computerChoice;
    function computerPlay() {
        let options;
        options = ["rock", "paper", "scissor"];
        computerChoice = (options[Math.floor(Math.random() * 1 * options.length)]);
        document.getElementsByClassName("computerScore")[0].innerHTML = document.getElementById(computerChoice).innerHTML;
        return computerChoice;
    }

    document.getElementsByClassName("userChoice")[0].innerHTML = document.getElementById(textValue).innerHTML;


    computerPlay();
    play(userChoice, computerChoice);
    console.log("User", userCount);
    console.log("Computer", computerCount);
    console.log(document.getElementById("computerScoreCount").innerText = computerCount);
    document.getElementById("userScoreCount").innerText = userCount;

    if (computerCount == 5) {
        document.getElementsByClassName("gameResult")[0].innerText = "Computer has won.";
        document.getElementById("userScoreCount").innerText = 0;
        document.getElementById("computerScoreCount").innerText = 0;
        let modal = document.getElementById("modal");
        let modalText = document.getElementsByClassName("modalText")[0];
        modalText.innerText = "Retry?";
        modal.style.display = "block";
        let btn = modal.getElementsByClassName("modalBtn")[0];
        let a = document.getElementsByClassName("game")[0];
        a.style.pointerEvents = "none";
        btn.onclick = function(){
            computerCount = 0;
            userCount = 0;
            clickCount = 0;
            document.getElementsByClassName("gameResult")[0].innerText = "";
            a.style.pointerEvents = "auto";
            modal.style.display = "none";
        }
    }
    else if (userCount == 5) {
        document.getElementsByClassName("gameResult")[0].innerText = "You have won.";
        document.getElementById("userScoreCount").innerText = 0;
        document.getElementById("computerScoreCount").innerText = 0;
        let modal = document.getElementById("modal");
        let modalText = document.getElementsByClassName("modalText")[0];
        modalText.innerText = "You won. Want to play again?";
        document.getElementById("mybtn").innerHTML = "Play Again";
        modal.style.display = "block";
        let btn = modal.getElementsByClassName("modalBtn")[0];
        let a = document.getElementsByClassName("game")[0];
        a.style.pointerEvents = "none";
        btn.onclick = function(){
            computerCount = 0;
            userCount = 0;
            clickCount = 0;
            document.getElementsByClassName("gameResult")[0].innerText = "";
            a.style.pointerEvents = "auto";
            modal.style.display = "none";
        }
    }
}



function play(user, computer) {
    if (user === computer) {
        document.getElementsByClassName("gameResult")[0].innerHTML = "This game was a tie.";
    }
    else if (user === "scissor" && computer === "paper") {
        document.getElementsByClassName("gameResult")[0].innerText = "Scissors beat paper.";
        userCount++;
    }
    else if (user === "paper" && computer === "scissor") {
        document.getElementsByClassName("gameResult")[0].innerText = "Scissors beat paper.";
        computerCount++;
    }
    else if (user === "rock" && computer === "paper") {
        document.getElementsByClassName("gameResult")[0].innerText = "Rock beats paper.";
        userCount++;
    }
    else if (user === "paper" && computer === "rock") {
        document.getElementsByClassName("gameResult")[0].innerText = "Paper beats rock.";
        userCount++;
    }
    else if (user === "paper" && computer === "scissor") {
        document.getElementsByClassName("gameResult")[0].innerText = "Scissors beat paper.";
        computerCount++;
    }
    else if (user === "scissor" && computer === "paper") {
        document.getElementsByClassName("gameResult")[0].innerText = "Scissors beat paper.";
        userCount++;
    }
    else if (user === "rock" && computer === "scissor") {
        document.getElementsByClassName("gameResult")[0].innerText = "Rock beat scissors.";
        userCount++;
    }
    else if (user === "scissor" && computer === "rock") {
        document.getElementsByClassName("gameResult")[0].innerText = "Rock beat scissors.";
        computerCount++;
    }
}



