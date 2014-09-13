define([
    'jquery',
    'underscore',
    'backbone',
    'app/helpers/config',
    'jstTemplates'
], function($, _, Backbone, config) {
    var View = Backbone.View.extend({
        template: JST['HEADER'],

        render: function() {
            this.$el.html(this.template({ title: config.appName }));

            return this;
        }
    });

    return View;
});
