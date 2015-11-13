require.config({
    baseUrl: "./",
    paths: {
        "Test": "Test"
    },
    shim: {

    }
});

require([
    "Test"
], function (Test, jquery, redux) {

});