const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express<h1>');
    res.send({
        name: 'Brady',
        likes: [
            'Food',
            'Sleep',
            'Code',
            'Node'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to handle request'
    });
});

app.listen(3000);