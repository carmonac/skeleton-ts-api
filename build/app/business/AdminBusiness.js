"use strict";
var AdminRepository_1 = require("./../repository/AdminRepository");
var AdminBusiness = (function () {
    function AdminBusiness() {
        this._adminRepository = new AdminRepository_1.AdminRepository();
    }
    AdminBusiness.prototype.create = function (item, callback) {
        this._adminRepository.create(item, callback);
    };
    AdminBusiness.prototype.retrieve = function (callback) {
        this._adminRepository.retrieve(callback);
    };
    AdminBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._adminRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._adminRepository.update(res._id, item, callback);
        });
    };
    AdminBusiness.prototype.delete = function (_id, callback) {
        this._adminRepository.delete(_id, callback);
    };
    AdminBusiness.prototype.findById = function (_id, callback) {
        this._adminRepository.findById(_id, callback);
    };
    AdminBusiness.prototype.login = function (name, password, callback) {
        this._adminRepository.login(name, password, callback);
    };
    return AdminBusiness;
}());
exports.AdminBusiness = AdminBusiness;
//# sourceMappingURL=AdminBusiness.js.map