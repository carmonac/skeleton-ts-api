"use strict";
var express = require("express");
var AdminRoutes_1 = require("../AdminRoutes");
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use("/admin", new AdminRoutes_1.AdminRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
exports.BaseRoutes = BaseRoutes;
//# sourceMappingURL=BaseRoutes.js.map