define([
    "jquery",
], function($, hand, bscroll) {
    'use strict';
    $(".topBtn").on("click", function() {
        $(".topBtn").hide();
        $("section").scrollTop(0);

    });
});