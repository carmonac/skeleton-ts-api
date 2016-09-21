"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AppSchema_1 = require("./../dataAccess/schemas/AppSchema");
var RepositoryBase_1 = require("./base/RepositoryBase");
var AppRepository = (function (_super) {
    __extends(AppRepository, _super);
    function AppRepository() {
        _super.call(this, AppSchema_1.default);
    }
    AppRepository.prototype.login = function (name, password, callback) {
        AppSchema_1.default.findOne({ admin: name, password: password }, callback);
    };
    AppRepository.prototype.insertNewModule = function () {
    };
    AppRepository.prototype.deleteModule = function () {
    };
    return AppRepository;
}(RepositoryBase_1.RepositoryBase));
exports.AppRepository = AppRepository;
//# sourceMappingURL=AppRepository.js.map