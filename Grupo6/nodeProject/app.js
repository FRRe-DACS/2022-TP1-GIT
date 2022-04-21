const express = require('express')
const square  = require('./functions/square')
const toUpperCase = require('./functions/toUpperCase')
const suma = require('./functions/suma')
const product = require('./functions/product')
const app = express()
const port = 3000

app.use(express.json())
app.set("view engine","ejs")
app.get('/', (req, res) => {
  res.render("index",{square: square(3),
    textToUpperCase: toUpperCase("hola como estas?"),suma:suma(2,2),product:product(3,5)})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
