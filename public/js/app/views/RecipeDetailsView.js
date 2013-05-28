define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/RecipeDetailsTemplate.html'
], function($, Backbone, _, recipeDetailsTemplate) {
    var View = Backbone.View.extend({

        tagName: 'div',

        className: 'recipeDetails',

        render: function() {
            this.$el.html(_.template(recipeDetailsTemplate, this.model.toJSON()));
            return this;
        }
    });

    return View;
});