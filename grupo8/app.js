const express = require('express')
const app = express()
const suma= require("./functions/suma.js")
const resta= require("./functions/resta.js")
const multiplicacion= require("./functions/multiplicacion.js")
const division= require("./functions/division.js")
const formattransfor= require("./functions/formattransfor.js")

//----external libraries------
require('colors');
//-------------------------
const puerto=3001
//----motor de plantillas-----
app.set('view engine', 'ejs')
app.set('views', __dirname+'/view')
//-------------------------
app.get('/', function (req, res) {
    res.render('view', 
    {
        mensaje: "Somos Grupo 8",
        suma:suma(1,2),
        resta:resta(1,2),
        multiplicacion:multiplicacion(1,2),
        division:division(1,2),
        formattransfor:formattransfor("hola mundo")
    })
})

app.listen(puerto)