let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let inicio = Date.now();
let respuesta = parseInt(prompt(`¿Cuánto es ${a} + ${b}?`));
let fin = Date.now();
let tiempo = (fin - inicio) / 1000; // en segundos

if (respuesta === a + b) {
    document.write(`<p>Correcto. Tiempo: ${tiempo} segundos</p>`);
} else {
    document.write(`<p>Incorrecto. La respuesta correcta era ${a + b}. Tiempo: ${tiempo} segundos</p>`);
}
