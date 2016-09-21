"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var MethodOverride_1 = require("../MethodOverride");
var _1 = require("../../routes/");
var jwt = require("express-jwt");
var Constants_1 = require("../../constants/Constants");
var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "configuration", {
        get: function () {
            var app = express();
            app.use(bodyParser.json());
            app.use(MethodOverride_1.MethodOverride.configuration());
            app.use(new _1.BaseRoutes().routes);
            app.use(jwt({ secret: Constants_1.Constants.SECRET }).unless({ path: ['/admin/login'] }));
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewaresBase;
}());
exports.MiddlewaresBase = MiddlewaresBase;
//# sourceMappingURL=MiddlewaresBase.js.map