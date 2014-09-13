define([
    'jquery',
    'underscore',
    'backbone',
    'jstTemplates'
], function($, _, Backbone) {
    var View = Backbone.View.extend({

        tagName: 'div',

        className: 'recipeDetails',

        template: JST['RECIPEDETAILS'],

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$('[data-use="rating"]').raty({
                readOnly: true,
                score: this.model.get('rating'),
                width: 150
            });
            return this;
        }
    });

    return View;
});
