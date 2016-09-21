"use strict";
var AppRepository_1 = require("./../repository/AppRepository");
var AppBusiness = (function () {
    function AppBusiness() {
        this._appRepository = new AppRepository_1.AppRepository();
    }
    AppBusiness.prototype.create = function (item, callback) {
        this._appRepository.create(item, callback);
    };
    AppBusiness.prototype.retrieve = function (callback) {
        this._appRepository.retrieve(callback);
    };
    AppBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._appRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._appRepository.update(res._id, item, callback);
        });
    };
    AppBusiness.prototype.delete = function (_id, callback) {
        this._appRepository.delete(_id, callback);
    };
    AppBusiness.prototype.findById = function (_id, callback) {
        this._appRepository.findById(_id, callback);
    };
    AppBusiness.prototype.login = function (name, password, callback) {
        this._appRepository.login(name, password, callback);
    };
    return AppBusiness;
}());
exports.AppBusiness = AppBusiness;
//# sourceMappingURL=AppBusiness.js.map