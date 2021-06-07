// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = Number((valueInEuro*1.2).toFixed(2));
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToyen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = Number((valueInDollar*127.9).toFixed(2));;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = Number((valueInYen*0.8).toFixed(2));
    // retornamos el valor
    return valueInPound;
}
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToyen}