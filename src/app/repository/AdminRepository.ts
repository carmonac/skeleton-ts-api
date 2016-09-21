import { AdminModel } from "./../model/AdminModel";
import { IAdminModel } from "./../model/interfaces/IAdminModel";
import  AdminSchema  from "./../dataAccess/schemas/AdminSchema";
import { RepositoryBase } from "./base/RepositoryBase";
import * as mongoose from "mongoose";

export class AdminRepository  extends RepositoryBase<IAdminModel> {

    constructor () {
        super(AdminSchema);
    }    
    
    login (name : string, password : string, callback: (error: any, result: any) => void) {
        AdminSchema.findOne({name: name, password: password}, callback);
    }

} 
