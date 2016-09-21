"use strict";
var express = require("express");
var AdminController_1 = require("../../controllers/AdminController");
var router = express.Router();
var AdminRoutes = (function () {
    function AdminRoutes() {
        this._adminController = new AdminController_1.AdminController();
    }
    Object.defineProperty(AdminRoutes.prototype, "routes", {
        get: function () {
            var controller = this._adminController;
            router.get("/get", controller.retrieve);
            router.post("/create", controller.create);
            router.put("/update/:_id", controller.update);
            router.get("/findbyid/:_id", controller.findById);
            router.delete("/delete/:_id", controller.delete);
            router.post("/login", controller.login);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return AdminRoutes;
}());
exports.AdminRoutes = AdminRoutes;
//# sourceMappingURL=AdminRoutes.js.map