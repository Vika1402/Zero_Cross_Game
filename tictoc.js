let boxes = document.querySelectorAll(".Box");
let resetButton = document.querySelector("#reset-button");
let newGameButton = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player x and player y
let turnX = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enableButton();
  msgContainer.classList.add("hide");

};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableButton = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableButton = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulatios, winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1VAl = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1VAl != "" && pos2Val != "" && pos3Val != "") {
      if (pos1VAl === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1VAl);
        disableButton();
        showWinner(pos1VAl);
      }
    }
  }
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);