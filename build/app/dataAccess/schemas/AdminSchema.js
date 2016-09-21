"use strict";
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var AdminSchema = (function () {
    function AdminSchema() {
    }
    Object.defineProperty(AdminSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return AdminSchema;
}());
var schema = mongooseConnection.model("Admin", AdminSchema.schema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
//# sourceMappingURL=AdminSchema.js.map