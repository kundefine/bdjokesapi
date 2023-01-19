const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())

app.get('/',  (req, res) => {
    let data = fs.readFileSync('./bdjokes.json')
    res.send(data)
    res.end();
})





app.listen(80, () => console.log('listening', 80))
