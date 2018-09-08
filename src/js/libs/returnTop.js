define([
    "jquery",
], function($, hand, bscroll) {
    'use strict';
    $(".topBtn").on("click", function() {

        $("section").scrollTop(0);
        $(".topBtn").hide();
    });
});