require.config({
    baseUrl: "/js/libs/",
    paths: {
        "jquery": "./jquery.min",
        "handbars": "./handlebars-v4.0.11",
        "index": "./index",
        "bscroll": "./better-scroll",
        "returnTop": "./returnTop"
    }
});

require(["index", "returnTop"]);