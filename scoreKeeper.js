var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1ScoreDisplay = document.querySelector("#p1Display");
var p2ScoreDisplay = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var inputNum = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#points");

var p1Score = 0;
var p2Score = 0;
var winningScore = 0;
var gameOver = false;


p1Button.addEventListener("click", function(){

    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1ScoreDisplay.classList.add("winnerColor");
            gameOver = true;
            alert("GAME OVER !");            
        }

        p1ScoreDisplay.textContent = p1Score;
    }  
            
});

p2Button.addEventListener("click", function(){

    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2ScoreDisplay.classList.add("winnerColor");
            gameOver = true;
            alert("GAME OVER !");
        }
    }   

    p2ScoreDisplay.textContent = p2Score;

});

function reset(){
    p1Score = 0;
    p2Score = 0;
    
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    
    p1ScoreDisplay.classList.remove("winnerColor");
    p2ScoreDisplay.classList.remove("winnerColor");
    

    gameOver = false;
}


resetButton.addEventListener("click", reset);

inputNum.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value; // "this" face referire la eventul din care face parte "inputNum"
    winningScore = Number(this.value);
    reset();
});