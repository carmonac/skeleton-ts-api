import { DataAccess } from "../DataAccess";
import { IAdminModel } from "./../../model/interfaces/IAdminModel";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AdminSchema {

    static get schema() {
        var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           password: {
               type: String,
               required: true
           }
       });
       
       return schema;
    }
    
}

var schema = mongooseConnection.model<IAdminModel>("Admin", AdminSchema.schema);
export default schema;