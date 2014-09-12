define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/RecipeDetailsTemplate.html'
], function($, _, Backbone, recipeDetailsTemplate) {
    var View = Backbone.View.extend({

        tagName: 'div',

        className: 'recipeDetails',

        render: function() {
            this.$el.html(_.template(recipeDetailsTemplate, this.model.toJSON()));
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