const boxes = Array.from(document.querySelectorAll('.box'));
const body = document.querySelector('body');

boxes.forEach((box) => box.addEventListener('click', function (event) {
    body.style.backgroundColor = '#212121';
}
));

boxes.forEach((box) => box.addEventListener('mouseover', function (event) {
    body.style.backgroundColor = event.target.id;
}
));
