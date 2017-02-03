var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./router/dishRouter.js');
var assert = require('assert');
var  host = 'localhost';
var port = '3000';

app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);

app.use(express.static(__dirname + "/static"));

// Console will print the message
app.listen(port, host, function(){console.log(`Server running at http://${host}:${port}/`)});
