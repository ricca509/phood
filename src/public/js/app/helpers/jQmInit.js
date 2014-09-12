define(['jquery'], function($) {
    $(document).on("mobileinit",
        function () {
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
            $.mobile.loader.prototype.options.text = "Yummly's working...";
            $.mobile.loader.prototype.options.textVisible = true;

            // Phonegap
            $.support.cors = true;
            $.mobile.allowCrossDomainPages = true;

            // jQuery Raty
            $.fn.raty.defaults.path = '/libs/jquery-raty/lib/img';

            // Remove page from DOM when it's being replaced
            $(document).on('pagehide', 'div[data-role="page"]', function(event, ui){
                console.log('remove ' + event.currentTarget);
                $(event.currentTarget).remove();
            });
        }
    );
});