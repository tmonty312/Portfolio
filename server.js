const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });

const port = 4141
app.listen(port, ()=>console.log('I am listening on',port))