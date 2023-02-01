const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const button = document.querySelector(".btn");

button.addEventListener("click", rango);

const pResultado = document.querySelector("#p-resultado");

function calcular() {
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value); 

    return (peso/(altura*altura)).toFixed(2);  
}

function rango(){
    let resultado = "";

    let valor = calcular();
    console.log(valor);

    switch(true){
        case (valor < 18.5):
        resultado = `${valor} : Insuficiencia ponderal`;

        console.log(resultado);
        break;

        case (valor >= 18.5 && valor <= 24.9):
        resultado = `${valor} : Intervalo normal`;
        console.log(resultado);
        break;

        case (valor > 24.9):
        resultado = `${valor} : Sobrepeso`;
        console.log(resultado);
        break;
    }
    
    pResultado.innerHTML = resultado;
}