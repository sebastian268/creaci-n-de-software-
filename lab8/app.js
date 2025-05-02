console.log("Hola Mundo");
//fs es el módulo que contiene las funciones para 
//manipular el sistema de archivos
const filesystem = require('fs');

//Se escribe el segundo parámetro en el archivo del primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola mundo desde node');