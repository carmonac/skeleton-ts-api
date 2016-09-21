"use strict";
var AdminBusiness_1 = require("../app/business/AdminBusiness");
var jsonwebtoken = require("jsonwebtoken");
var Constants_1 = require("../config/constants/Constants");
var AdminController = (function () {
    function AdminController() {
    }
    AdminController.prototype.create = function (req, res) {
        try {
            var admin = req.body;
            var adminBusiness = new AdminBusiness_1.AdminBusiness();
            adminBusiness.create(admin, function (error, result) {
                if (error)
                    res.json({ status: "error" });
                else
                    res.json({ status: "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });
        }
    };
    AdminController.prototype.update = function (req, res) {
        try {
            var admin = req.body;
            var _id = req.params._id;
            var adminBusiness = new AdminBusiness_1.AdminBusiness();
            adminBusiness.update(_id, admin, function (error, result) {
                if (error)
                    res.json({ status: "error" });
                else
                    res.json({ status: "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });
        }
    };
    AdminController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var adminBusiness = new AdminBusiness_1.AdminBusiness();
            adminBusiness.delete(_id, function (error, result) {
                if (error)
                    res.json({ status: "error" });
                else
                    res.json({ status: "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });
        }
    };
    AdminController.prototype.retrieve = function (req, res) {
        try {
            var total = req;
            console.log(total.user);
            var adminBusiness = new AdminBusiness_1.AdminBusiness();
            adminBusiness.retrieve(function (error, result) {
                if (error)
                    res.json({ status: "error" });
                else
                    res.json(result);
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });
        }
    };
    AdminController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var adminBusiness = new AdminBusiness_1.AdminBusiness();
            adminBusiness.findById(_id, function (error, result) {
                if (error)
                    res.json({ status: "error" });
                else
                    res.json(result);
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });
        }
    };
    AdminController.prototype.login = function (req, res) {
        try {
            var name = req.body.name;
            var password = req.body.password;
            var adminBusiness = new AdminBusiness_1.AdminBusiness();
            adminBusiness.login(name, password, function (error, result) {
                if (error) {
                    res.json({ status: "error" });
                }
                else {
                    if (result !== null) {
                        var token = jsonwebtoken.sign(result, Constants_1.Constants.SECRET, { expiresIn: "12 days" });
                        var success = {
                            user: result,
                            token: token
                        };
                        res.json(success);
                    }
                }
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });
        }
    };
    return AdminController;
}());
exports.AdminController = AdminController;
//# sourceMappingURL=AdminController.js.map