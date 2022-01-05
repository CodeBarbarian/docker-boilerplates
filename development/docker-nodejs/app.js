const express = require('express');

var app = express();

app.listen()

var port = 8080;

app.get('/', (req, res, next) => {
    res.json(["Hello, World!"])
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});