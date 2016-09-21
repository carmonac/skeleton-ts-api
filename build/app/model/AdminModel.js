"use strict";
var AdminModel = (function () {
    function AdminModel(adminModel) {
        this._adminModel = adminModel;
    }
    Object.defineProperty(AdminModel.prototype, "name", {
        get: function () {
            return this._adminModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminModel.prototype, "password", {
        get: function () {
            return this._adminModel.name;
        },
        enumerable: true,
        configurable: true
    });
    return AdminModel;
}());
exports.AdminModel = AdminModel;
//# sourceMappingURL=AdminModel.js.map