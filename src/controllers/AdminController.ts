import * as express from "express";
import { AdminBusiness } from "../app/business/AdminBusiness";
import { BaseController as IBaseController } from "./interfaces/base/BaseController";
import { IAdminModel } from "../app/model/interfaces/IAdminModel";
import * as jsonwebtoken from "jsonwebtoken";
import { Constants } from "../config/constants/Constants";

export class AdminController implements IBaseController<AdminBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            const admin: IAdminModel = <IAdminModel>req.body;
            const adminBusiness = new AdminBusiness();
            adminBusiness.create(admin, (error, result) => {
                if (error) res.json({ status: "error" });
                else res.json({ status: "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            const admin: IAdminModel = <IAdminModel>req.body;
            const _id: string = req.params._id;
            const adminBusiness = new AdminBusiness();
            adminBusiness.update(_id, admin, (error, result) => {
                if (error) res.json({ status: "error" });
                else res.json({ status: "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;
            let adminBusiness = new AdminBusiness();
            adminBusiness.delete(_id, (error, result) => {
                if (error) res.json({ status: "error" });
                else res.json({ status: "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            const total: any = req;
            const adminBusiness = new AdminBusiness();
            adminBusiness.retrieve((error, result) => {
                if (error) res.json({ status: "error" });
                else res.json(result);
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const adminBusiness = new AdminBusiness();
            adminBusiness.findById(_id, (error, result) => {
                if (error) res.json({ status: "error" });
                else res.json(result);
            });
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });

        }
    }

    login(req: express.Request, res: express.Response): void {
        try {
            const { name, password }: string = req.body;
            var adminBusiness = new AdminBusiness();
            adminBusiness.login(name, password, (error, result) => {
                if (error) {
                    res.json({ status: "error" })
                } else {
                    if(result !== null) {
                        let token = jsonwebtoken.sign(result, Constants.SECRET, { expiresIn: "12 days" });
                        let success: any = {
                            user: result,
                            token: token
                        }
                        res.json(success);
                    }
                }
            }); 
        }
        catch (e) {
            console.log(e);
            res.json({ status: "error in your request" });

        }
    }



}
