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