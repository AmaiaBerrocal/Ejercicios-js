const menu = document.getElementById("menu");
const parrafo = document.getElementById("result");

const days = [
    ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
]

let valor = "";

menu.addEventListener('click', function(event) {
    valor = event.target.value;
    // console.log(event.target);
    // console.log(valor);
    mostrarFecha(valor);

    if(valor === "1") {
        alert("This is an english page");
        window.location.href = "english.html";
    }else if (valor === "2"){

        alert("Hemen euskaraz!");
        window.location.href = "euskaraz.html";
    } else {
        alert("Esta página está en castellano");
        window.location.href = "index.html";
    }

    
})


function mostrarFecha(valor) {
    //crear una fecha, sacamos el dia en num 0=domingo
    let day = new Date().getDay();
    parrafo.innerHTML = days[valor][day];
}

