
const http = require("http");
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set("views","views");

app.get('/inicio', (req, res) => {
    let frases = [];
    frases.push ("Erwin, vuelve a mi")
    frases.push ("ola mundo")
    frases.push ("Adios mundo")
    frases.push ("tralalero tralala")
    res.render('index',{
        frases_a_escribir: frases
    }); 
});

app.get('/formulario', (req, res) => {
    res.render('formulario');
});

// aprovechando mis labs pasados lol

app.post('/formulario', (req, res) => {
    const datos = `Nombre: ${req.body.nombre}, me manda el siguiente mensaje: ${req.body.mensaje}\n`;
    fs.appendFileSync('datos.txt', datos); 
    res.send('<h3>Gracias, recibí tu mensaje y fue guardado correctamente.</h3>')
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1>');
});

app.listen(3000);