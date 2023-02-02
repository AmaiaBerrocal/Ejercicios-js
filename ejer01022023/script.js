let image = document.querySelector("#imagen-ojo");
let contrasena = document.querySelector("#contrasena")

image.addEventListener('click', change);

function change() {
    if(contrasena.type == "password") {
        contrasena.type = "text";
        image.setAttribute('src','./img/ojoAbierto1.jpg');
    }else {
        contrasena.type = "password";
        image.setAttribute('src','./img/ojoCerrado1.jpg');
    }
}