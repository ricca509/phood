require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery/jquery.min',
        'backbone': 'libs/backbone-amd/backbone-min',
        'underscore': 'libs/underscore-amd/underscore-min',
        'jquerymobile': 'libs/jquery-mobile/jquery.mobile-1.3.1.min',
        'jquery-raty': 'libs/jquery-raty/jquery.raty.min',
        'app': './app',
        'templates': '../templates'
    }
});

require([
    "jquery",
    "backbone",
    "app/routers/MainRouter",
    "app/helpers/jQmInit"
], function ($, Backbone, MainRouter) {

    require([ "jquerymobile" ], function () {
        // Instantiates a new Backbone.js Mobile Router
        this.router = new MainRouter();

        Backbone.history.start();
    });

});