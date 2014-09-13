define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/RecipeListItemView',
    'jstTemplates'
], function($, _, Backbone, RecipeListItemView) {
    var View = Backbone.View.extend({
        tagName: 'ul',

        className: 'recipesList',

        template: JST['PAGINATIONBUTTONS'],

        initialize: function() {
            this.collection.on('add', this.addOne, this);
            this.collection.on('reset', this.addAll, this);
        },

        addAll: function() {
            // Empty list
            this.$el.empty();
            // Add items
            this.collection.each(this.addOne, this);
            // Add pagination button
            this.$el.append(this.template({
                prevPageUrl: this.collection.getPageUrl('prev'),
                nextPageUrl: this.collection.getPageUrl('next')
            }));
        },

        addOne: function(recipe) {
            var view = new RecipeListItemView({
                model: recipe
            });

            this.$el.prepend(view.render().$el.fadeIn('slow'));
        }
    });

    return View;
});
