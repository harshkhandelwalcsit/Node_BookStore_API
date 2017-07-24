var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var database = require('./configs/db');
var home = require('./routes/home/home')
//bring genre Model
let Genre = require('./models/genre');
//bring Book model
let Book = require('./models/book');
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/',home);

app.listen(3000,function(){
    console.log('Server running at Port no. 3000..');
})