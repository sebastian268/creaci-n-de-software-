
const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');  // Esto importa el módulo fs



router.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'post.html'));
});

router.post('/post', (req, res) => {
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

router.get('/tabla', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'tabla_cuadrados.html'));
});


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'principal.html'));
});

module.exports = router;

