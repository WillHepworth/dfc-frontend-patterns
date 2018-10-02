/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
    window.GOVUKFrontend.initAll()

    var clipboard = new ClipboardJS('.snippet-copy-button');
    clipboard.on('success', function (e) {

    });

    $(".snippet-copy-button").click(function() {
        $(".snippet-copy-button").text('COPY');
        $(this).text('COPIED');
    });

})

// Copy text button

