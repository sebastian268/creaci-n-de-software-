const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));


// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pricipal.html'));
});

// Ruta acerca de
app.get('/lab6', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'lab6.html'));
});

app.get('/tabla', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'tabla_cuadrados.html'));
});



// Ruta contacto con formulario
app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'post.html'));
});

// POST del formulario
app.post('/post', (req, res) => {
    const { nombre, mensaje } = req.body;
    const linea = `Nombre: ${nombre} - Mensaje: ${mensaje}\n`;

    

    fs.appendFile('datos.txt', linea, (err) => {
        if (err) {
            console.error('Error al guardar los datos');
            return res.status(500).send('Error al guardar los datos');
        }
        res.send('Gracias por tu mensaje. ¡Datos recibidos!');
    });
});

// Ruta 404
app.use((req, res) => {
    res.status(404).send('404 - Página no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});