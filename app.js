const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Inicializar Express
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'views')));


// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const modulo1 = require('./modulos/modulo1');
const modulo2 = require('./modulos/modulo2');

app.use('/', modulo1);
app.use('/', modulo2);







// Ruta 404
app.use((req, res) => {
    res.status(404).send('Error 404: Página no encontrada');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
