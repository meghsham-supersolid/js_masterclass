console.log("Developed with ❤️ by marverick_codex");

const keyPressed = document.querySelector("#key-pressed");


window.addEventListener("keydown", (event) =>
  keyPressed.textContent = `${event.code}`
);
