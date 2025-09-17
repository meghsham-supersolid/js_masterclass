const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let interval;

function startAction() {
  interval = setInterval(function () {
    let randomHexCode = "#";
    let randomNumber = 0;

    const hexValue = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
      randomHexCode += hexValue.charAt(Math.floor(Math.random() * 15));
    }

    body.style.background = randomHexCode;
  }, 1000);
}

function stopAction() {
  clearInterval(interval);
  interval = null;
}

start.addEventListener("click", () => {
  if (!interval) startAction();
});

stop.addEventListener("click", () => {
  if (interval) stopAction();

});