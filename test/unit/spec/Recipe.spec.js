define(function(require) {
    var Recipe = require('app/models/Recipe');

    describe('The Recipe object', function () {
        it('has a Recipe Model', function () {
            expect(Recipe.model).toBeDefined();
        });

        it('has a Recipes Collection', function () {
            expect(Recipe.collection).toBeDefined();
        });
    });
});