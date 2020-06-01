var b1 = document.querySelector("#btn1");
var b2 = document.querySelector("#btn2");
var b3 = document.querySelector("#rst");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var inputNum = document.querySelector("input");
var p1Score = 0, p2Score = 0;
var gameOver = false;
var winningScore = 0;


b1.addEventListener("click",player1);
b2.addEventListener("click",player2);
b3.addEventListener("click",reset);
inputNum.addEventListener("change",changeValue);


function reset() {
  p1Score = 0; p2Score = 0;
  one.textContent = 0;
  two. textContent = 0;
  gameOver = false;
  one.classList.remove("winner");
  two.classList.remove("winner");
}

function player1() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      one.classList.add("winner");
      gameOver = true;
    }
  } 
  one.textContent = p1Score;
}
function player2() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      two.classList.add("winner");
      gameOver = true;
    }
  } 
  two.textContent = p2Score;
}

function changeValue() {
  three.textContent = inputNum.value;
  winningScore = Number(inputNum.value);
  reset();
}