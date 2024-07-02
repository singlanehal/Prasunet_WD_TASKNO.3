

const ContainerEl = document.querySelector(".container");
let playerTxt = document.querySelector(".message");
let restartBtn = document.getElementById("restartbtn");
let boxes = document.querySelectorAll(".box");

const O_TXT = "O";
const X_TXT = "X";

let currentPlayer = O_TXT;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((boxs) => boxs.addEventListener("click", boxClicked)); // Use 'box' instead of 'boxs'
  console.log(boxes);
};

function boxClicked(e) {
  const id = e.target.id; // Access the id property of the clicked element
  console.log("Clicked box:", e.target, "ID:", id); // Log both the element and its ID
}

startGame();
