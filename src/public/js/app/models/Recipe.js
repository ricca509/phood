define([
	'backbone',
	'app/helpers/config'
], function(Backbone, config) {
	var Model = Backbone.Model.extend({
        urlRoot: config.baseDomain + '/recipes'
    });

	var Collection = Backbone.Collection.extend({
		models: Model,

		initialize: function (options) {
			this.options = options;
		},

		comparator: function (recipe) {
			return recipe.get('rating');
		},

		url: function () {
			var url = config.baseDomain + '/recipes';

			if (this.options.q) {
				url += '/q=' + this.options.q;
			}
			if (this.options.page > 0) {
				url += '/s=' + (this.options.page * config.pageSize);
			} else {
				url += '/s=' + 0;
			}

			url += '/t=' + config.pageSize;

			return url;
		},

		getPageUrl: function (direction) {
			var page, url = '/recipes';

			if (direction === 'next') {
				page = this.options.page + 1;
			} else if (direction === 'prev') {
				page = this.options.page > 1 ? this.options.page - 1 : 1;
			}

			if (this.options.q) {
				url += '/q=' + this.options.q;
			}

			return url + '/p=' + page;
		},

		parse: function (response) {
			this.total = response.totalMatchCount;
			//this.skipped = response.criteria.resultsToSkip || 0;
			//this.pageNumber = Math.round(this.skipped / config.pageSize) + 1;

			return response.matches;
		}
	});

	return {
		model: Model,
		collection: Collection
	};
});
