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

        render: function() {
            var template = _.template(headerTemplate, { title: config.appName });
            if (this.model) {
                template = _.template(headerTemplate, { title: this.model.get('name') });
            }

            this.$el.html(template);

            return this;
        }
    });

    return View;
});