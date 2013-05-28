define([
	'backbone',
	'app/helpers/config'
], function(Backbone, config) {
	var Model = Backbone.Model.extend({		
        urlRoot: '/recipes'
    });

	var Collection = Backbone.Collection.extend({
		models: Model,

		initialize: function(attrs) {
			this.options = attrs;
		},

		comparator: function(recipe) {
			return recipe.get('rating');
		},
		
		url: function() {
			if (this.options.q) {
				return '/recipes/q=' + this.options.q;
			}

			return '/recipes';
		},

		parse: function(response) {
			return response.matches
		}
	});

	return {
		model: Model,
		collection: Collection
	};
});