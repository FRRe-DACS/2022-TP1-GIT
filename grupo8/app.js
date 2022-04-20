const express = require('express')
const app = express()

//----external libraries------
require('colors');
//-------------------------
const puerto=3001
app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello World</h1>');
    res.end();
})

app.listen(puerto)