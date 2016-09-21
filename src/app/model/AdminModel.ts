import { IAdminModel } from "./interfaces/IAdminModel"

export class AdminModel {

    private _adminModel : IAdminModel;

    constructor(adminModel: IAdminModel) {
        this._adminModel = adminModel;
    }

    get name() : string {
        return this._adminModel.name;
    }

    get password() : string {
        return this._adminModel.name;
    }

}