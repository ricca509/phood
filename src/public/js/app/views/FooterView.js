define([
    'jquery',
    'underscore',
    'backbone',
    'jstTemplates'
], function ($, _, Backbone) {
    var View = Backbone.View.extend({
        template: JST['FOOTER'],

        render: function () {
            var that = this;
            this.$el.html(this.template());

            // TODO: Fix this with dynamic events
            $(document).on('keypress', this.$('[name="search"]'), _.bind(that.search, that));

            return this;
        },

        search: function (ev) {
            if (ev.keyCode === 13) {
                Backbone.history.navigate('recipes/q=' + $('#search').val(), { trigger: true });
            }
        }

    });

    return View;
});
