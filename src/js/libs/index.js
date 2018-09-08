var bcroll;
define([
    "jquery",
    "handbars",
], function($, hand, bscroll) {
    'use strict';
    $.ajax({
        url: "/api/list",
        dataType: "json",
        success: function(rs) {
            var sourec = $("#tpl").html();
            var template = hand.compile(sourec);
            var html = template(rs.data);
            $(".list").html(html)
            $("section").on("scroll", function() {
                $(".topBtn").show();
            });
        }
    });
});