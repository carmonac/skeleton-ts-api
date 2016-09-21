"use strict";
var AppBusiness_1 = require("../app/business/AppBusiness");
var jsonwebtoken = require("jsonwebtoken");
var Constants_1 = require("../config/constants/Constants");
var AppController = (function () {
    function AppController() {
    }
    AppController.prototype.create = function (req, res) {
        try {
            var app = req.body;
            var appBusiness = new AppBusiness_1.AppBusiness();
            appBusiness.create(app, function (error, result) {
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
    AppController.prototype.update = function (req, res) {
        try {
            var admin = req.body;
            var _id = req.params._id;
            var appBusiness = new AppBusiness_1.AppBusiness();
            appBusiness.update(_id, admin, function (error, result) {
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
    AppController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var appBusiness = new AppBusiness_1.AppBusiness();
            appBusiness.delete(_id, function (error, result) {
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
    AppController.prototype.retrieve = function (req, res) {
        try {
            var appBusiness = new AppBusiness_1.AppBusiness();
            appBusiness.retrieve(function (error, result) {
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
    AppController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var appBusiness = new AppBusiness_1.AppBusiness();
            appBusiness.findById(_id, function (error, result) {
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
    AppController.prototype.login = function (req, res) {
        try {
            var admin = req.body.admin;
            var password = req.body.password;
            var appBusiness = new AppBusiness_1.AppBusiness();
            appBusiness.login(admin, password, function (error, result) {
                if (error) {
                    res.json({ status: "error" });
                }
                else {
                    if (result !== null) {
                        var token = jsonwebtoken.sign(result, Constants_1.Constants.SECRET, { expiresIn: "12 days" });
                        var success = {
                            app: result,
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
    return AppController;
}());
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map