var express = require('express'),
stylus = require('stylus'),
http = require('http'),
yummlyHelpers = require('./helpers/yummly');

var app = express();
var port = process.env.PORT || 3000;

app.use(stylus.middleware(
{
    src: __dirname + '/views',
    dest: __dirname + '/public'
}));

app.use(express.static(__dirname + '/../public'));

//////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////

app.get('/recipes/q=:q/s=:s/t=:t', yummlyHelpers.getByQuery);

app.get('/recipes/s=:s/t=:t', yummlyHelpers.getByQuery);

app.get('/recipes/q=:q', yummlyHelpers.getByQuery);

app.get('/recipes/:id', yummlyHelpers.getById);

app.get('/recipes', yummlyHelpers.getByQuery);

//////////////////////////////////////////////////
// Listen
//////////////////////////////////////////////////

app.listen(port, function() {
	console.log('Yummly\'s app listening on port ' + port);
});
