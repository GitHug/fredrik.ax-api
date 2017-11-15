var express = require('express'),
app = express(),
port = process.env.PORT || 1337,
bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const routes = require('./api/routes/appRoutes'); 

// CORS headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// Respond 200 on OPTIONS
app.options("/*", function(req, res, next){
    res.sendStatus(200);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register the routes
routes(app); 

// Fallback if route does not exist
app.use(function(req, res) {
    res.status(404).json({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log('RESTful API server started on: ' + port);