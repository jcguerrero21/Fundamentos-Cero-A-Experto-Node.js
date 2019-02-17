'use strict'
require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/usuario/:id', (req, res) => {
    let id = req.params.id;

    return res.json(id);
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    res.json(body);
});

app.put('/usuario', (req, res) => {
    res.json('put Usuario');
});

app.post('/usuario', (req, res) => {
    res.delete('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});