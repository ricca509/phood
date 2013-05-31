var express = require('express'),
    stylus = require('stylus'),
	http = require('http'),
    config = require('./config'),
    yummly = require('yummly');

var app = express();

app.use(stylus.middleware(
    {
        src: __dirname + '/views',
        dest: __dirname + '/public'
    }));

app.use(express.static(__dirname + '/public'));

app.get('/recipes/q=:q', function(req, res) {
    console.log('/recipes/q=' + req.params.q);
    yummly.search({
        credentials: config.yummlyCredential,
        query: {
            q: req.params.q,
            requirePictures: true
        } 
    }, function (error, response, json) {
        if (error) {
            console.error(error);
        } else if (response === 200) {
            res.type('application/json');
            res.send(200, json);
        } else {
            console.log(response);
        }
    });
});

app.get('/recipes/:id', function(req, res) {
    console.log('/recipes/' + req.params.id);
    yummly.recipe({
        credentials: config.yummlyCredential,
        id: req.params.id        
    }, function (error, response, json) {
        if (error) {
            console.error(error);
        } else if (response === 200) {
            res.type('application/json');
            res.send(200, json);
        } else {
            console.log(response);
        }
    });
});

app.get('/recipes', function(req, res) {
    yummly.search({
        credentials: config.yummlyCredential,
        query: {
            q: '',
            requirePictures: true
        }
    }, function (error, response, json) {
        if (error) {
            console.error(error);
        } else if (response === 200) {
            res.type('application/json');
            res.send(200, json);
        } else {
        console.log(response);
        }
    });
    
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('backbone-requirejs-jquerymobile listening on port ' + port);
});