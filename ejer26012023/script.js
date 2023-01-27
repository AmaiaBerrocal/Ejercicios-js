let image = document.querySelector("#image1");

image.addEventListener('mouseover', changeImage);
image.addEventListener('mouseout', startImage);

function changeImage() {
    this.setAttribute('src', './img/imagen2.jpg');
    this.setAttribute('alt', 'montaña nevada');
}

function startImage() {
    this.setAttribute('src', './img/imagen1.jpg');
    this.setAttribute('alt', 'cielo estrellado nevado');
}