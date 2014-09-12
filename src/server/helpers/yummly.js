var helpers = require('./helpers'),
    config = require('../../config'),
    yummly = require('yummly');

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
        helpers.sendBack(req, res, error, response, json);
    });
};

var getById = function (req, res) {
    console.log('getById: /recipes/' + req.params.id);
    yummly.recipe({
        credentials: config.yummlyCredential,
        id: req.params.id
    }, function (error, response, json) {
        helpers.sendBack(req, res, error, response, json);
    });
};

module.exports = {
    getByQuery: getByQuery,
    getById: getById
};
