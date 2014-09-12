define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/RecipeListItemTemplate.html',
    'jquery-raty'
], function($, _, Backbone, recipeListItemTemplate) {
	var View = Backbone.View.extend({
		tagName: 'li',

		className: 'recipeItem',

        template: _.template(recipeListItemTemplate),

		events: {
			'click a': 'goToDetails'
		},

		render: function() {
			this.$el.html( this.template(_.extend({}, this.model.toJSON())) );

			this.$('[data-use="rating"]').raty({
				readOnly: true,
				score: this.model.get('rating'),
				width: 150
			});
			return this;
		},

		goToDetails: function() {
			Backbone.history.navigate('recipes/' + this.model.id, { trigger: true });
		}
	});

	return View;
});
