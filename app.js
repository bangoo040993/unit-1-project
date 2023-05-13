//alert("dawg");
const choices = ["Marine", "Covenant", "Flood", "Forerunner", "Precursor"]

//computer choices  
function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

// player and computer objects
const player = {
   currentChoice: null,
  };
const computer = {
   currentChoice: null,
  };

// comparing player and computer choices
function compareChoices() {
    if (player.currentChoice === computer.currentChoice) {
        return "It's a tie!";
    } else if (player.currentChoice === "Marine") {
        if (computer.currentChoice === "Forerunner" || computer.currentChoice === "Precursor") {
            return "You win!";
        } else {
            return "Cortana wins!";
        }
    } else if (player.currentChoice === "Covenant") {
        if (computer.currentChoice === "Marine" || computer.currentChoice === "Precursor") {
            return "You win!";
        } else {
            return "Cortana wins!";
        }
    } else if (player.currentChoice === "Flood") {
        if (computer.currentChoice === "Marine" || computer.currentChoice === "Covenant") {
            return "You  win!";
        } else {
            return "Cortana wins!";
        }
    } else if (player.currentChoice === "Forerunner") {
        if (computer.currentChoice === "Flood" || computer.currentChoice === "Covenant") {
            return "You win!";
        } else {
            return "Cortana wins!";
        }
    } else if (player.currentChoice === "Precursor") {
        if (computer.currentChoice === "Flood" || computer.currentChoice === "Forerunner") {
            return "You win!";
        } else {
            return "Cortana wins!";
        }
    }
}
    


// display game result
function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
}

// event listener for player choices

const marineButton = document.getElementById("Marine");
const covenantButton = document.getElementById("Covenant");
const floodButton = document.getElementById("Flood");
const forerunnerButton = document.getElementById("Forerunner");
const precursorButton = document.getElementById("Precursor");

marineButton.addEventListener ("click", function() {
    player.currentChoice = "Marine";
    computer.currentChoice = computerChooses();
    const result = compareChoices();
    displayResult(`Cortana chose ${computer.currentChoice}. ${result}`)
});
covenantButton.addEventListener ("click", function() {
    player.currentChoice = "Covenant";
    computer.currentChoice = computerChooses();
    const result = compareChoices();
    displayResult(`Cortana chose ${computer.currentChoice}. ${result}`)
});
floodButton.addEventListener ("click", function() {
    player.currentChoice = "Flood";
    computer.currentChoice = computerChooses();
    const result = compareChoices();
    displayResult(`Cortana chose ${computer.currentChoice}. ${result}`)
});
forerunnerButton.addEventListener ("click", function() {
    player.currentChoice = "Forerunner";
    computer.currentChoice = computerChooses();
    const result = compareChoices();
    displayResult(`Cortana chose ${computer.currentChoice}. ${result}`)
});
precursorButton.addEventListener ("click", function() {
    player.currentChoice = "Precursor";
    computer.currentChoice = computerChooses();
    const result = compareChoices();
    displayResult(`Cortana chose ${computer.currentChoice}. ${result}`)
});
computerChooses()