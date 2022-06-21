// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('../server/data.json');
// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/data', function(req, res){
    res.json(data);
})

app.get('/', function(req, res) {
    res.status(200).send('Hello');
});

app.get('*', function(req, res){
    res.send('Not Found');
});
// finally export the express application
module.exports = app;
