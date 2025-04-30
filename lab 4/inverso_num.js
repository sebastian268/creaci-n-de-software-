function inverso(numero) {
    let invertido = numero.toString().split('').reverse().join('');
    return parseInt(invertido);
}

let entrada = prompt("Introduce un número para invertir sus dígitos:");
let numero = parseInt(entrada);

if (isNaN(numero)) {
    document.write("<p>Por favor, ingresa un número válido.</p>");
} else {
    let resultado = inverso(numero);

    document.write(`<p>Número ingresado: ${numero}</p>`);
    document.write(`<p>Número invertido: ${resultado}</p>`);


    console.assert(inverso(1234) === 4321);
    console.assert(inverso(100) === 1);
    console.assert(inverso(0) === 0);
}
