import * as Mongoose from "mongoose";
import { Constants } from "../../config/constants/Constants";

export class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Conectado a mongodb.");
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

}

DataAccess.connect();