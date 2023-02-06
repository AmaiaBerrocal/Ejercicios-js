const text = "Las Olimpiadas de Munich fueron en su momento las mas innovadoras. Munich  creo las mejores instalaciones deportivas de la epoca. En munich se reunieron deportistas de mas de 125 naciones";

let textArray = text.toLocaleLowerCase().split(" ");
console.log(textArray);

function replaceWordInArray(array, wordToreplace, newWord) {
    array.forEach((element, index) => {
        element==wordToreplace ? textArray[index]=newWord : textArray[index]=element;
        });
    
}

replaceWordInArray(textArray, "munich", "roma");

console.log(textArray);