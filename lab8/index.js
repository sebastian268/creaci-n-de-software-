const http = require('http');   
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>HTML</title>
        </head>
        <body>
           <h1>hola mundo desde node</h1>
        </body>
        </html>
    `);
    response.end();
   
});


function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    const suma = arr.reduce((acum, num) => acum + num, 0);
    return suma / arr.length;
}


const numeros = [10, 20, 30, 40, 50];
const promedio = calcularPromedio(numeros);
console.log("Promedio:", promedio);


const fs = require('fs');

function escribirEnArchivo(nombreArchivo, contenido) {
    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.error("Error al escribir el archivo:", err);
        } else {
            console.log(`Contenido escrito en ${nombreArchivo}`);
        }
    });
}


function esPalindromo(cadena) {
    const limpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invertida = limpia.split('').reverse().join('');
    return limpia === invertida;
}


const prueba1 = "Anita lava la tina";
const prueba2 = "Hola mundo";
console.log('Ejercicios hechos con el grande de benji')
console.log(`"${prueba1}" es palíndromo?`, esPalindromo(prueba1));
console.log(`"${prueba2}" es palíndromo?`, esPalindromo(prueba2));


const mensaje = "Te extraño Erwin, siempre te amare. Si un dia ya no tienes fans es porque estoy muerto ";
escribirEnArchivo('Erwin.txt', mensaje);


server.listen(3000);