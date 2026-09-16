let boxes = document.querySelectorAll(".box");

let message = document.getElementById("message");

let reset = document.getElementById("reset");

let player = 1;

let gameOver = false;


// Winning combinations

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


// Box click

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        // Agar box already filled hai
        if (box.innerHTML !== "" || gameOver) {
            return;
        }


        // Player 1

        if (player === 1) {

            box.innerHTML = "✓";

            box.classList.add("check");

            player = 2;

            message.innerHTML = "PLAYER 2 TURN";
        }


        // Player 2

        else {

            box.innerHTML = "×";

            box.classList.add("x");

            player = 1;

            message.innerHTML = "PLAYER 1 TURN";
        }


        checkWinner();

    });

});


// Check Winner

function checkWinner() {

    for (let pattern of winningPatterns) {

        let first = boxes[pattern[0]].innerHTML;
        let second = boxes[pattern[1]].innerHTML;
        let third = boxes[pattern[2]].innerHTML;


        if (
            first !== "" &&
            first === second &&
            second === third
        ) {

            if (first === "✓") {

                message.innerHTML = "PLAYER 1 WON!";

            } else {

                message.innerHTML = "PLAYER 2 WON!";

            }

            gameOver = true;

            return;
        }
    }


    // Check Draw

    let filledBoxes = 0;

    boxes.forEach((box) => {

        if (box.innerHTML !== "") {
            filledBoxes++;
        }

    });


    if (filledBoxes === 9 && gameOver === false) {

        message.innerHTML = "GAME DRAW!";

        gameOver = true;
    }

}


// Reset Game

reset.addEventListener("click", () => {

    boxes.forEach((box) => {

        box.innerHTML = "";

        box.classList.remove("x");
        box.classList.remove("check");

    });

    player = 1;

    gameOver = false;

    message.innerHTML = "PLAYER 1 TURN";

});