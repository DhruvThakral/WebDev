let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow" , "purple"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
};

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
};

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(){
    let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]){
        console.log("same value");
    }else{
        h2.innerText = "Game Over ! Press any key to restart the game.";
    }
}

function btnPress() {
    let btn = this;
    console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
