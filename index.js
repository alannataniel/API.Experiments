const express = require('express')
const app = express()

const conf = require('dotenv').config().parsed;

console.log(conf);

const port = conf.HTTPPORT;

app.get('/',(req, res) => {
    res.send('Hello World')
}) 

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`)
})