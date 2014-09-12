define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/jQmPageTemplate.html'
], function($, _, Backbone, jQmPageTemplate) {

    var View = Backbone.View.extend({
        initialize: function () {
            $( document ).on( "pagechange", this.$el, this.onPageChange );
        },

        tagName: 'div',

        attributes: {
            'data-role': 'page'
        },

        setHeaderView: function (view, addBackButton) {
            this.headerView = view;

            //$.mobile.page.prototype.options.addBackBtn = ( addBackButton === true ) ? true : false;

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
            this.$el.html(_.template(jQmPageTemplate));

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
