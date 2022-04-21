const express = require('express')
const app = express()

//----external libraries------
require('colors');
//-------------------------
const puerto=3001
//----motor de plantillas-----
app.set('view engine', 'ejs')
app.set('views', __dirname+'/view')
//-------------------------
app.get('/', function (req, res) {
    res.render('index', 
    {
        mensaje: "Somos Grupo 8"
    })
})

app.listen(puerto)