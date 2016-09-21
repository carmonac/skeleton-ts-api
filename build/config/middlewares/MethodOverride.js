"use strict";
var methodOverride = require("method-override");
var express = require("express");
var MethodOverride = (function () {
    function MethodOverride() {
    }
    MethodOverride.configuration = function () {
        var app = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));
        Object.seal(this);
        return app;
    };
    return MethodOverride;
}());
exports.MethodOverride = MethodOverride;
//# sourceMappingURL=MethodOverride.js.map