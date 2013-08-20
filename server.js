var express = require('express'),
stylus = require('stylus'),
http = require('http'),
config = require('./config'),
yummly = require('yummly');

var app = express();
var port = process.env.PORT || 3000;

app.use(stylus.middleware(
{
    src: __dirname + '/views',
    dest: __dirname + '/public'
}));

app.use(express.static(__dirname + '/public'));

//////////////////////////////////////////////////
// Helpers
//////////////////////////////////////////////////

var sendBack = function (req, res, error, response, json) {
    if (error) {
        console.error(error);
    } else if (response === 200) {
        res.type('application/json');
        res.send(200, json);
    } else {
        console.log(response);
    }
};

var getByQuery = function (req, res) {
    console.log('getByQuery: /recipes/q=' + req.params.q + '/s=' +
                req.params.s + '/t=' + req.params.t);
    yummly.search({
        credentials: config.yummlyCredential,
        query: {
            q: req.params.q || '',
            requirePictures: true,
            maxResult: req.params.t,
            start: req.params.s
        }
    }, function (error, response, json) {
        sendBack(req, res, error, response, json);
    });
};

var getById = function (req, res) {
    console.log('getById: /recipes/' + req.params.id);
    yummly.recipe({
        credentials: config.yummlyCredential,
        id: req.params.id
    }, function (error, response, json) {
        sendBack(req, res, error, response, json);
    });
};

//////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////

app.get('/recipes/q=:q/s=:s/t=:t', getByQuery);

app.get('/recipes/s=:s/t=:t', getByQuery);

app.get('/recipes/q=:q', getByQuery);

app.get('/recipes/:id', getById);

app.get('/recipes', getByQuery);

//////////////////////////////////////////////////
// Listen
//////////////////////////////////////////////////

app.listen(port, function() {
	console.log('Yummly\'s app listening on port ' + port);
});