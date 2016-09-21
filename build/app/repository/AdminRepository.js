"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AdminSchema_1 = require("./../dataAccess/schemas/AdminSchema");
var RepositoryBase_1 = require("./base/RepositoryBase");
var AdminRepository = (function (_super) {
    __extends(AdminRepository, _super);
    function AdminRepository() {
        _super.call(this, AdminSchema_1.default);
    }
    AdminRepository.prototype.login = function (name, password, callback) {
        AdminSchema_1.default.findOne({ name: name, password: password }, callback);
    };
    return AdminRepository;
}(RepositoryBase_1.RepositoryBase));
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=AdminRepository.js.map