const menu = document.getElementById("menu");
const parrafo = document.getElementById("result");

const days = [
    {Domingo, Lunes, Martes, Miércoles, Jueves, Viernes, Sábado},
    {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday},
    {Igandea, Astelehena, Asteartea, Asteazkena, Osteguna, Ostirala, Larunbata}
]

menu.addEventListener('click', function(event) {
    let valor = event.target.value;
    mostrarFecha(valor);
})

function mostrarFecha(valor) {
    //crear una fecha, sacamos el dia en num 0=domingo
    let day = new Date().getDay();
    console.log(day)
    parrafo.innerHTML = days[valor][day];
}