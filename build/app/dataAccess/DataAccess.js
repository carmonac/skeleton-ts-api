"use strict";
var Mongoose = require("mongoose");
var Constants_1 = require("../../config/constants/Constants");
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("Conectado a mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(Constants_1.Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
//# sourceMappingURL=DataAccess.js.map