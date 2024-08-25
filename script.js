function computer() {
    const nr = Math.random();
    if (nr < 1 / 3) return 1;
    else if (nr >= 1 / 3 && nr <= 2 / 3) return 2;
    else return 3;
}
let scoreh = 0, scorec = 0;
function human() {
    let choice = prompt("Rock Paper Or Scrissors? ");
    choice = choice.toLowerCase();
    const nr = computer();
    if (choice == "rock" && nr == 1) alert("It was a tie!"), scoreh++, scorec++;
    if (choice == "paper" && nr == 2) alert("It was a tie!"), scoreh++, scorec++;
    if (choice == "scrissors" && nr == 3) alert("It was a tie!"), scoreh++, scorec++;
    if (choice == "rock" && nr == 2) alert("You lost!"), scorec++;
    if (choice == "paper" && nr == 1) alert("You won!"), scoreh++;
    if (choice == "scrissors" && nr == 1) alert("You lost!"), scorec++;
    if (choice == "rock" && nr == 3) alert("You won!"), scoreh++;
    if (choice == "paper" && nr == 3) alert("You lost!"), scorec++;
    if (choice == "scrissors" && nr == 2) alert("You won!"), scoreh++;
}

function playgame() {
    for (var i = 1; i <= 5; i++)
    {
        alert("You have " + scoreh + " points " + " The computer has " + scorec + " points")
        human();
    }
    if (scorec > scoreh) alert("The computer has won!");
    else alert("You have won!");
}
console.log(playgame());