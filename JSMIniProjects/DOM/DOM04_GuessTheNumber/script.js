console.log("Developed with ❤️ by Maverick_CodeX");

let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessNumbers = [];

const inputText = document.querySelector("#inputValue");
const inputError = document.querySelector("#input-error-string");
const previouslyGuessed = document.querySelector("#previous-guessed-values");
const atteptsLeft = document.querySelector("#attempts-remaining");
// 1. Take input and validate the type and value range
inputText.addEventListener("input", function (e) {
  if (typeof inputValue === "NaN") {
    setInputErrorString("invalid input : only numbers allowed");
  } else {
    if (inputValue < 0) {
      setInputErrorString("invalid input : number should be greater then 0");
    } else if (inputValue > 100) {
      setInputErrorString("invalid input : number should be less then 100");
    } else {
      setInputErrorString("");
    }
  }
});

// if user submit's the number

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (e) {
  console.log("submit");

  e.preventDefault();
  let inputValue = parseInt(inputText.value);

  if (guessNumbers.length == 9) {
    setInputErrorString(
      `You ran out of attepts. The number was ${randomNumber}`
    );
    setTimeout(() => {
      resetGame();
    }, "3000");
  } else {
    if (inputValue === randomNumber) {
      setInputErrorString(`You have guessed number`);
    } else {
      if (guessNumbers.includes(inputValue)) {
        setInputErrorString("guessed already");
      } else if (inputValue > randomNumber) {
        setInputErrorString(`guess number number smaller than ${inputValue}`);
        guessNumbers.push(inputValue);
      } else if (inputValue < randomNumber) {
        setInputErrorString(`guess number number bigger than ${inputValue}`);
        guessNumbers.push(inputValue);
      }

      previouslyGuessed.innerHTML = `${guessNumbers}`;
      atteptsLeft.innerHTML = `${10 - guessNumbers.length}`;
    }
  }
});

function setInputErrorString(errorString) {
  inputError.innerHTML = `<p>${errorString}</p>`;
}

function resetGame() {
  console.log("reset");
  inputText.value = "";
  randomNumber = Math.floor(Math.random() * 100 + 1);
  guessNumbers = [];
}
