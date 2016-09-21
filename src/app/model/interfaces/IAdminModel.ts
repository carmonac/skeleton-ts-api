import * as mongoose from "mongoose";

export interface IAdminModel extends mongoose.Document {
    name: string;
    password: string;
}