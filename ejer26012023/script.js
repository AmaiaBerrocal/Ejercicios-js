let image = document.querySelector("#image1");
let button = document.querySelector("#button1");

image.addEventListener('mouseover', changeImage);
image.addEventListener('mouseout', startImage);
button.addEventListener('click', change);

function changeImage() {
    image.setAttribute('src', './img/imagen2.jpg');
    image.setAttribute('alt', 'montaña nevada');
}

function startImage() {
    image.setAttribute('src', './img/imagen1.jpg');
    image.setAttribute('alt', 'cielo estrellado nevado');
}

function change() {
    let valueSrc = image.getAttribute('src');
    if (valueSrc == './img/imagen1.jpg') {
        changeImage();
    } else {
        startImage();
    }
}