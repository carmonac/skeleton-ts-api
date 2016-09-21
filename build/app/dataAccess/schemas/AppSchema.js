"use strict";
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var AppSchema = (function () {
    function AppSchema() {
    }
    Object.defineProperty(AppSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                title: String,
                start: Date,
                finish: Date,
                description: String,
                color1: String,
                color2: String,
                color3: String,
                admin: String,
                password: String,
                dateCreation: { type: Date, default: Date.now },
                bundleID: String,
                url: String,
                icon: String,
                splash: String,
                modules: [mongoose.Types.ObjectId],
                active: Boolean,
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return AppSchema;
}());
var schema = mongooseConnection.model("App", AppSchema.schema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
//# sourceMappingURL=AppSchema.js.map