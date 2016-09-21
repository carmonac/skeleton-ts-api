import { AdminRepository } from "./../repository/AdminRepository";
import { IAdminBusiness } from "./interfaces/IAdminBusiness";
import { IAdminModel } from "./../model/interfaces/IAdminModel";
import { AdminModel } from "../model/AdminModel";


export class AdminBusiness implements IAdminBusiness {
    private _adminRepository: AdminRepository;
    
    constructor () {
        this._adminRepository = new AdminRepository();
    }  
        
    create (item: IAdminModel, callback: (error: any, result: any) => void) {
        this._adminRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._adminRepository.retrieve(callback);
    }
    
    update (_id: string, item: IAdminModel, callback: (error: any, result: any) => void) {
        
        this._adminRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            
            else 
                this._adminRepository.update(res._id, item, callback);
               
        });    
    }
    
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._adminRepository.delete(_id , callback);
    }
    
    findById (_id: string, callback: (error: any, result: IAdminModel) => void) {
        this._adminRepository.findById(_id, callback);
    }

    login (name: string, password: string, callback: (error: any, result: IAdminModel) => void) {        
        this._adminRepository.login(name, password, callback);
    }
    
}
