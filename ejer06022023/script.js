const text = "Las Olimpiadas de Munich fueron en su momento las mas innovadoras. Munich  creo las mejores instalaciones deportivas de la epoca. En munich se reunieron deportistas de mas de 125 naciones";

let result = text.replace(/munich/g, "Munich");

let result2 = result.replace(/Munich/g, "Roma");

console.log(result2);

let text2 = "Cuando Fernando Séptimo Usaba paletón Cuando Fernando Séptimo Usaba paletón Cuando Fernando Séptimo Usaba paletón, paletón";

let vocales = ["a", "e", "i", "o", "u"];



function reemplazaVocal(vocal){
    return text2.replace(/a|e|i|o|u|á|é|í|ó|ú/gi, vocal);
}


let resultA = text2.replace(/a|e|i|o|u/gi, "a");

console.log(reemplazaVocal("e"));

const texto = document.getElementById('texto-usuario');

function reemplazaVocal(vocal){
    let valorTexto = texto.value;
    return text2.replace(/a|e|i|o|u|á|é|í|ó|ú/gi, valorTexto);
}
