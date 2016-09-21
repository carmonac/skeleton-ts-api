"use strict";
var express = require("express");
var MiddlewaresBase_1 = require("./config/middlewares/base/MiddlewaresBase");
var Eventus = (function () {
    function Eventus() {
    }
    Eventus.Main = function () {
        Object.seal(MiddlewaresBase_1.MiddlewaresBase);
        var app = express();
        var port = parseInt(process.env.PORT, 10) || 5000;
        app.set("port", port);
        app.use(MiddlewaresBase_1.MiddlewaresBase.configuration);
        app.listen(port, function () {
            console.log("Node app is running at localhost:" + port);
        });
    };
    return Eventus;
}());
Eventus.Main();
//# sourceMappingURL=app.js.map