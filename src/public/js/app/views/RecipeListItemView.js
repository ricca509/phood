define([
    'jquery',
    'underscore',
    'backbone',
    'jquery-raty',
    'jstTemplates'
], function($, _, Backbone) {
	var View = Backbone.View.extend({
		tagName: 'li',

		className: 'recipeItem',

        template: JST['RECIPELISTITEM'],

		events: {
			'click a': 'goToDetails'
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

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
