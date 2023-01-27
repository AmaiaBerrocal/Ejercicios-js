const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const button = document.querySelector(".btn");

button.addEventListener("click", calcular);

const divResultado = document.querySelector("#div-resultado");


function calcular() {
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value); 

    let resultado = peso/(altura*altura);
    let texto = document.createTextNode(resultado);

    divResultado.innerHTML = texto;
}

