define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/homeHeaderTemplate.html',
    'app/helpers/config'
], function($, _, Backbone, homeHeaderTemplate, config) {
    var View = Backbone.View.extend({
        initialize: function() {
        },

        template: _.template(homeHeaderTemplate),

        render: function() {
            var template = this.template({ title: config.appName });
            if (this.model) {
                template = this.template({ title: this.model.get('name') });
            }

            this.$el.html(template);

            return this;
        }
    });

    return View;
});
