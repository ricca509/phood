define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/headerTemplate.html',
    'app/helpers/config'
], function($, _, Backbone, headerTemplate, config) {
    var View = Backbone.View.extend({
        initialize: function() {
        },

        template: _.template(headerTemplate),

        render: function() {
            this.$el.html(this.template({ title: config.appName }));

            return this;
        }
    });

    return View;
});
