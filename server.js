const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
//   });

app.use(express.static(__dirname))

const port = 3112
app.listen(port, ()=>console.log('I am listening on',port))