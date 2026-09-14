let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".newg");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;

const winPosition = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [6,4,2],
   [8,4,0],
];


const checkWinner = () => {
    for (let position of winPosition) {
        let pos1 = boxes[position[0]].innerText;
        let pos2 = boxes[position[1]].innerText;
        let pos3 = boxes[position[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            msg.innerText = `${pos1} is the Winner!`;
            msgContainer.classList.remove("hide");

            boxes.forEach((box) => {
                box.disabled = true;
            });

            return;
        }
    }
};

boxes.forEach((box) =>{
   box.addEventListener("click", (event) =>{
       if(turnO === true){
        box.innerText = "O";
        turnO = false;
        box.disabled = true;
       }else{
        box.innerText = "X";
        turnO = true;
        box.disabled =true;
       }
       checkWinner();

});
});

newGame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turnO = true;
    msgContainer.classList.add("hide");
});

