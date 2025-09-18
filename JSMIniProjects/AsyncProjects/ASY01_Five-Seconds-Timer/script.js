const remSec = document.querySelector("#remaining-seconds");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const timePlus = document.querySelector("#timePlus");
const timeMinus = document.querySelector("#timeMinus");
const seconds = document.querySelector("#seconds");

let canModifyTime = true;
let timerSec = parseInt(seconds.textContent);
let oneSecInterval;
let timer;

const decrementTime = () => {
  if (timerSec > 0) {
    timerSec--;
    remSec.textContent = timerSec;
  } else {
    clearInterval(oneSecInterval);
  }
};

timePlus.addEventListener("click", () => {
  if (canModifyTime) {
    timerSec = parseInt(seconds.textContent) + 1;
    seconds.textContent = timerSec;
    remSec.textContent = timerSec;
  }
});

timeMinus.addEventListener("click", () => {
  if (canModifyTime && parseInt(seconds.textContent) > 0) {
    timerSec = parseInt(seconds.textContent) - 1;
    seconds.textContent = timerSec;
    remSec.textContent = timerSec;
  }
});

startBtn.addEventListener("click", () => {
  canModifyTime = false;
  timerSec = parseInt(seconds.textContent);
  remSec.textContent = timerSec;

  oneSecInterval = setInterval(decrementTime, 1000);

  timer = setTimeout(() => {
    document.querySelector(".timer-parent").innerHTML = `<h1>Times Up!!!</h1>`;
    clearInterval(oneSecInterval);
    canModifyTime = true;
  }, timerSec * 1000);
});

stopBtn.addEventListener("click", () => {
  canModifyTime = true;
  clearInterval(oneSecInterval);
  clearTimeout(timer);
});
