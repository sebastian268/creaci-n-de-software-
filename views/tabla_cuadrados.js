let num = parseInt(prompt("Introduce un número:"));
document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (let i = 1; i <= num; i++) {
    document.write(`<tr><td>${i}</td><td>${i**2}</td><td>${i**3}</td></tr>`);
}
document.write("</table>");
