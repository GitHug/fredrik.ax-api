var express = require('express'),
app = express(),
port = process.env.PORT || 1337,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/appRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);