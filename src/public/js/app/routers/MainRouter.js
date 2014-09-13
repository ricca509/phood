define([
    'backbone',
    'app/views/RecipesListView',
    'app/views/RecipeDetailsView',
    'app/views/HeaderView',
    'app/views/HomeHeaderView',
    'app/views/FooterView',
    'app/views/JqmPageView',
    'app/models/Recipe'
], function (Backbone, RecipesListView, RecipeDetailsView, HeaderView,
             HomeHeaderView, FooterView, jqMPageView, Recipe) {
    var Router = Backbone.Router.extend({
        initialize: function () {
            // Handle back button throughout the application
            $(document).on('click', '[data-rel="back"]', function (event) {
                window.history.back();
                return false;
            });
        },

        routes: {
            'recipes(/q=:q)(/p=:p)(/)': 'getRecipes',
            'recipes/:id': 'getRecipe',
            '': 'main'
        },

        main: function () {
            this.getRecipes();
        },

        getRecipe: function (id) {
            $.mobile.loading( 'show' );
            var rModel = new Recipe.model({
                id: id
            });

            var recipePage = new jqMPageView();
            recipePage.setHeaderView(new HeaderView({ model: rModel }, true));
            recipePage.setContentView(new RecipeDetailsView({ model: rModel }));
            recipePage.setFooterView();

            rModel
                .fetch()
                .done(function () {                    
                    recipePage.navigate('slide');
                });
        },

        getRecipes: function (query, page) {
            $.mobile.loading('show');

            page = !_.isNaN(parseInt(page, 10)) ? parseInt(page, 10) : 0;

            var rCollection = new Recipe.collection({
                q: query,
                page: page
            });

            var recipesPage = new jqMPageView();
            recipesPage.setHeaderView(new HomeHeaderView());
            recipesPage.setContentView(new RecipesListView({
                collection: rCollection
            }));
            recipesPage.setFooterView(new FooterView());

            rCollection
                .fetch({ reset: true })
                .done(function () {
                    rCollection.sort();
                    recipesPage.navigate();
                });
        }
    });

    return Router;
});
