// const text = "Las Olimpiadas de Munich fueron en su momento las mas innovadoras. Munich  creo las mejores instalaciones deportivas de la epoca. En munich se reunieron deportistas de mas de 125 naciones";

// let result = text.replace(/munich/g, "Munich");

// let result2 = result.replace(/Munich/g, "Roma");

// console.log(result2);

// let text2 = "Cuando Fernando Séptimo Usaba paletón Cuando Fernando Séptimo Usaba paletón Cuando Fernando Séptimo Usaba paletón, paletón";

// let vocales = ["a", "e", "i", "o", "u"];



// function reemplazaVocal(vocal){
//     return text2.replace(/a|e|i|o|u|á|é|í|ó|ú/gi, vocal);
// }


// let resultA = text2.replace(/a|e|i|o|u/gi, "a");

// console.log(reemplazaVocal("e"));

// function reemplazaVocal(vocal){
//     let valorTexto = input.value;
//     return valorTexto.replace(/a|e|i|o|u|á|é|í|ó|ú/gi, vocal);
// }


let texto = document.getElementById("textarea");

let btna = document.getElementById("btna");
let btne = document.getElementById("btne");
let btni = document.getElementById("btni");
let btno = document.getElementById("btno");
let btnu = document.getElementById("btnu");

let parf = document.getElementById("parrafo");

btna.addEventListener("click", ()=>{ print("a") });
btne.addEventListener("click", ()=>{ print("e") });
btni.addEventListener("click", ()=>{ print("i") });
btno.addEventListener("click", ()=>{ print("o") });
btnu.addEventListener("click", ()=>{ print("u") });

function print(vocal) {
    let valor = texto.value;
    if((valor=== "")  || (valor.length > 300)) {
        alert("Introduce un texto de entre 0 y 300 caracteres.")
    } else {
        let valor2 =  valor.replace(/a|e|i|o|u|á|é|í|ó|ú/gi, vocal);
        parf.innerHTML = valor2;
    }
}




