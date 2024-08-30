
function computer() {
    const nr = Math.random();
    if (nr < 1 / 3) return 1;
    else if (nr >= 1 / 3 && nr <= 2 / 3) return 2;
    else return 3;
}

function choose()
{
   document.querySelector("#rock").addEventListener("click",function(){human("rock")});
   document.querySelector("#paper").addEventListener("click",function(){human("paper")});
   document.querySelector("#scrissors").addEventListener("click",function(){human("scrissors")});
}
let scoreh = 0, scorec = 0;
function human(choice) {
    const nr = computer();
    const res=document.querySelector("#status");
    if (choice == "rock" && nr == 1) scoreh++, scorec++, res.innerText="It was a tie! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "paper" && nr == 2)scoreh++, scorec++, res.innerText="It was a tie! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "scrissors" && nr == 3) scoreh++, scorec++,res.innerText="It was a tie! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "rock" && nr == 2) scorec++,res.innerText="You lost! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "paper" && nr == 1)scoreh++, res.innerText="You won! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "scrissors" && nr == 1)scorec++,res.innerText="You lost! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "rock" && nr == 3) scoreh++,res.innerText="You won! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "paper" && nr == 3)scorec++, res.innerText="You lost! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";
    if (choice == "scrissors" && nr == 2)scoreh++, res.innerText="You won! Score is: "+scoreh+" for you and "+scorec+ " for the computer!";

    document.querySelector("#reset").addEventListener("click", function () {
        const reset = document.querySelector("#reset");
        res.innerText = "Take your first choice";
        scoreh = 0;
        scorec = 0;
    });
}


choose();
