define(['jquery'], function($) {
    $(document).on("mobileinit",
        function () {
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
            $.mobile.loader.prototype.options.text = "phood's working...";
            $.mobile.loader.prototype.options.textVisible = true;

            // Phonegap
            $.support.cors = true;
            $.mobile.allowCrossDomainPages = true;

            // jQuery Raty
            $.fn.raty.defaults.path = '/libs/raty/lib/images';

            // Remove page from DOM when it's being replaced
            $(document).on('pagehide', 'div[data-role="page"]', function(event, ui){                
                $(event.currentTarget).remove();
            });
        }
    );
});
