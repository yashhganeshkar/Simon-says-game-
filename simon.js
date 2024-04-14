let userseq = [];
let gameseq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function() {
    if(started == false)
    {
        console.log("Game Started");
        started = true;
        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor)
    // console.log(gameseq); //hide console
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("check level :",level);

    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else 
    {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id")
    userseq.push(userColor)
    checkAns(userseq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress)
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}