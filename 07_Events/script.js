console.log("Codex with ❤️ By MaverickCodeX");

const imageList = document.querySelector("#images-list");

console.log(imageList);

imageList.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target.tagName);

  if (event.target.tagName === "IMG" || event.target.tagName ==="A") {
    const imageParent = event.target.parentNode;
    imageParent.remove();
  }
});
