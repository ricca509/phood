var express = require('express'),
    stylus = require('stylus'),
	http = require('http');

var app = express();

app.use(stylus.middleware(
    {
        src: __dirname + '/views',
        dest: __dirname + '/public'
    }));

app.use(express.static(__dirname + '/public'));

app.get('/recipes/q=:q', function(req, res) {
    console.log('/recipes/q=' + req.params.q);
    res.type('application/json');

    var options = {
        host: 'api.yummly.com',
        port: 80,
        path: '/v1/api/recipes?_app_id=9476205d&_app_key=ea5cc1be824b8947feaef714e80b3fab&requirePictures=true&q=' + encodeURIComponent(req.params.q),
        method: 'GET'
    };

    var data = '';

    var request = http.request(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            data += chunk;
        });

        response.on('end', function(){
            console.log(data);
            res.send(200, JSON.parse(data));

        });
    });

    request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    request.end();
});

app.get('/recipes/:id', function(req, res) {
    console.log('/recipes/' + req.params.id);
    res.type('application/json');

    var options = {
        host: 'api.yummly.com',
        port: 80,
        path: '/v1/api/recipe/' + req.params.id + '?_app_id=9476205d&_app_key=ea5cc1be824b8947feaef714e80b3fab',
        method: 'GET'
    };

    var data = '';

    var request = http.request(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            //console.log('BODY: ' + chunk);
            data += chunk;
        });

        response.on('end', function(){
            console.log(data);
            res.send(200, JSON.parse(data));

        });
    });

    request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    request.end();
});

app.get('/recipes', function(req, res) {
    console.log('/recipes/all');
	res.type('application/json');

	var options = {
	  host: 'api.yummly.com',
	  port: 80,
	  path: '/v1/api/recipes?_app_id=9476205d&_app_key=ea5cc1be824b8947feaef714e80b3fab&requirePictures=true',
	  method: 'GET'
	};

	var data = '';

	var request = http.request(options, function(response) {
	  console.log('STATUS: ' + response.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(response.headers));
	  response.setEncoding('utf8');
	  response.on('data', function (chunk) {
	    //console.log('BODY: ' + chunk);
    	data += chunk;
	  });

	  response.on('end', function(){
		res.send(200, JSON.parse(data));
		  
	   });
	});

	request.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	// write data to request body
	request.end();
});

app.listen(3000, function() {
	console.log('backbone-requirejs-jquerymobile listening on port 3000...');
});