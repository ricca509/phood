define([
    'jquery',
    'underscore',
    'backbone',
    'jstTemplates'
], function($, _, Backbone) {

    var View = Backbone.View.extend({
        initialize: function () {
            $( document ).on( "pagechange", this.$el, this.onPageChange );
        },

        template: JST['JQMPAGE'],

        tagName: 'div',

        attributes: {
            'data-role': 'page'
        },

        setHeaderView: function (view, addBackButton) {
            this.headerView = view;
            return this;
        },

        setFooterView: function (view) {
            this.footerView = view;

            return this;
        },

        setContentView: function (view) {
            this.contentView = view;

            return this;
        },

        render: function () {
            this.$el.html(this.template);

            if (this.headerView) {
                this.$('[data-role="header"]').html(this.headerView.render().$el.children());
            } else {
                this.$('[data-role="header"]').remove();
            }
            if (this.contentView) {
                this.$('[data-role="content"]').html(this.contentView.render().$el);
            }
            if (this.footerView) {
                this.$('[data-role="footer"]').html(this.footerView.render().$el.children());
            } else {
                this.$('[data-role="footer"]').remove();
            }

            return this;
        },

        navigate: function (transition) {
            var page = this.render();

            transition = transition || $.mobile.defaultPageTransition;

            // Add the page to the DOM
            $('body').append(page.$el);

            // Programatically changes to the page
            $.mobile.changePage( page.$el , { changeHash: false, transition: transition } );
        },

        onPageChange: function () {
            window.scrollTo(0, 0);
        }

    });

    return View;
});
