define([
    'jquery',
    'underscore',
    'backbone',    
    'text!templates/footerTemplate.html'
], function($, _, Backbone, footerTemplate) {
    var View = Backbone.View.extend({

        events: {
        },

        template: _.template(footerTemplate),

        initialize: function() {
        },
        
        render: function() {
            var that = this;
            this.$el.html(this.template());

            // TODO: Fix this with dynamic events
            $(document).on('keypress', this.$('[name="search"]'), _.bind(that.search, that));
            
            return this;
        },

        search: function(ev) {
            if (ev.keyCode === 13) {
                Backbone.history.navigate('recipes/q=' + $('#search').val(), { trigger: true });
            }            
        }

    });

    return View;
});