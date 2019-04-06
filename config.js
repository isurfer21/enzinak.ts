requirejs.config({
    baseUrl: "./",
    paths: {
        app: "js",
        enzinak: "js/enzinak",
        modules: "js/modules"
    }
});
requirejs(["js/main"]);