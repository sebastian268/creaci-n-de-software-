function promedios(matriz) {
    return matriz.map(fila => {
        let suma = fila.reduce((acc, val) => acc + val, 0);
        return suma / fila.length;
    });
}

// Entrada por prompt
let entrada = prompt("Introduce los renglones de la matriz.\nCada renglón con números separados por coma.\nEjemplo: 1,2,3;4,5,6;7,8,9");

let matriz = entrada.split(";").map(fila => fila.split(",").map(num => parseFloat(num.trim())));

// Validamos que sean números válidos
let esValida = matriz.every(fila => fila.every(num => !isNaN(num)));

if (!esValida) {
    document.write("<p>Error: Verifica que todos los valores sean números válidos.</p>");
} else {
    let resultado = promedios(matriz);

    document.write(`<p>Matriz ingresada: ${JSON.stringify(matriz)}</p>`);
    document.write(`<p>Promedios por fila: [${resultado.join(", ")}]</p>`);

    // Pruebas automáticas
    console.assert(JSON.stringify(promedios([[1,2,3],[4,5,6]])) === JSON.stringify([2, 5]));
    console.assert(JSON.stringify(promedios([[10, 0], [5, 5]])) === JSON.stringify([5, 5]));
}
