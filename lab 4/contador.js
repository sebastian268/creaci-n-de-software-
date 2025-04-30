function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;
    for (let num of arr) {
        if (num < 0) negativos++;
        else if (num === 0) ceros++;
        else positivos++;
    }
    return [negativos, ceros, positivos];
}


let entrada = prompt("Introduce números separados por comas (ejemplo: -1,0,5,-3,2):");
let arreglo = entrada.split(",").map(x => parseInt(x.trim()));


if (arreglo.some(isNaN)) {
    document.write("<p>Error: Introdujiste un valor no numérico.</p>");
} else {
    let resultado = contador(arreglo);


    document.write(`<p>Arreglo introducido: [${arreglo.join(", ")}]</p>`);
    document.write(`<p>Negativos: ${resultado[0]}</p>`);
    document.write(`<p>Ceros: ${resultado[1]}</p>`);
    document.write(`<p>Positivos: ${resultado[2]}</p>`);

 
    console.assert(JSON.stringify(contador([1, -2, 0, 3, -4])) === JSON.stringify([2,1,2]));
    console.assert(JSON.stringify(contador([0,0,0])) === JSON.stringify([0,3,0]));
    console.assert(JSON.stringify(contador([-1,-2,-3])) === JSON.stringify([3,0,0]));
}
