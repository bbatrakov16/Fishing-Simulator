// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {}

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Stive character selection
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum >= 0 && randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum >= 0.7 && randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum >= 0.9 && randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      numTropicalSpan.innerHTML = numTropical;
    } else if (randNum >= 0.95 && randNum < 1) {
      resultImg.src = "img/Pufferfish.png";
      numPuffer = numPuffer + 1;
      numPufferSpan.innerHTML = numPuffer;
    }

  } else if (character === "alex") {
    // Alex character selection
    // Alex Fish Simulator
    let randNum = Math.random();
    if (randNum >= 0 && randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum >= 0.1 && randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum >= 0.2 && randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      numTropicalSpan.innerHTML = numTropical;
    } else if (randNum >= 0.5 && randNum < 1) {
      resultImg.src = "img/Pufferfish.png";
      numPuffer = numPuffer + 1;
      numPufferSpan.innerHTML = numPuffer;
    }

  } else if (character === "villager") {
    // Villager character selection
    // Villager Fish Simulator
    let randNum = Math.random();
    if (randNum >= 0 && randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum >= 0.25 && randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum >= 0.5 && randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      numTropicalSpan.innerHTML = numTropical;
    } else if (randNum >= 0.75 && randNum < 1) {
      resultImg.src = "img/Pufferfish.png";
      numPuffer = numPuffer + 1;
      numPufferSpan.innerHTML = numPuffer;
    }

  }
}
