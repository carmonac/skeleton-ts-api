import { BaseBusiness } from "./base/BaseBusiness";
import { IAdminModel } from "../../model/interfaces/IAdminModel";

export interface IAdminBusiness extends BaseBusiness<IAdminModel> {
    login: (name: string, password: string, callback: (error:any, result: IAdminModel) => void) => void; 
} 