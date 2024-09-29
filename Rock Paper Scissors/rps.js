const patterns = [
  {
    choices: ["rock", "scissor"],
    winner: "You win",
  },
  {
    choices: ["rock", "paper"],
    winner: "You lose",
  },
  {
    choices: ["paper", "scissor"],
    winner: "You lose",
  },
  {
    choices: ["scissor", "rock"],
    winner: "You lose",
  },
  {
    choices: ["paper", "rock"],
    winner: "You won",
  },
  {
    choices: ["scissor", "paper"],
    winner: "You won",
  },
  {
    choices: ["paper", "paper"],
    winner: "draw",
  },
  {
    choices: ["scissor", "scissor"],
    winner: "draw",
  },
  {
    choices: ["rock", "rock"],
    winner: "draw",
  },
];
var num, link2, computerchoice;

function random() {
  num = Math.floor(Math.random() * 3) + 1;
  console.log(num);

  if (num == 1) {
    computerchoice = "rock";
    console.log("rock");
    link2 = document.querySelector("#rock").src;
  }
  if (num == 2) {
    computerchoice = "paper";
    console.log("paper");
    link2 = document.querySelector("#paper").src;
  }
  if (num == 3) {
    computerchoice = "scissor";
    console.log("scissor");
    link2 = document.querySelector("#scissor").src;
  }
}
function display() {
  document.querySelector("#imgs").style.display = "none";
  document.querySelector("#choice").style.display = "none";
  document.querySelector(".imgs2").style.display = "flex";
  document.querySelector("#winners").style.display = "block";
  document.querySelector("#newgame").style.display = "block";
  checkwinner(ourchoice, computerchoice);
}

var link1, ourchoice;
document.querySelector("#rock").onclick = () => {
  random();
  ourchoice = "rock";
  link1 = document.querySelector("#rock").src;

  document.querySelector(".photo1").src = link1;
  document.querySelector(".photo2").src = link2;
  display();
};
document.querySelector("#paper").onclick = () => {
  random();
  ourchoice = "paper";
  link1 = document.querySelector("#paper").src;

  document.querySelector(".photo1").src = link1;
  document.querySelector(".photo2").src = link2;
  display();
};
document.querySelector("#scissor").onclick = () => {
  random();
  ourchoice = "scissor";
  link1 = document.querySelector("#scissor").src;

  document.querySelector(".photo1").src = link1;
  document.querySelector(".photo2").src = link2;
  display();
};
var i = 0;
function checkwinner(ourchoice, computerchoice) {
  let obj = patterns[i];
  if (obj.choices[0] === ourchoice && obj.choices[1] === computerchoice) {
    document.querySelector("#winners").innerHTML = obj.winner;
  } else {
    i++;
    checkwinner(ourchoice, computerchoice);
  }
}

document.querySelector("#newgame").onclick = () => {
  document.querySelector("#imgs").style.display = "block";
  document.querySelector("#choice").style.display = "block";
  document.querySelector(".imgs2").style.display = "none";
  document.querySelector("#winners").style.display = "none";
  document.querySelector("#newgame").style.display = "none";
  i=0;
  random();
};
