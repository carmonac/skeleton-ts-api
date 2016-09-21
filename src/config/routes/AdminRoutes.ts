import * as express from "express";
import { AdminController } from "../../controllers/AdminController";

var router = express.Router();
export class AdminRoutes {
    private _adminController: AdminController;
    
    constructor () {
        this._adminController = new AdminController();   
    }
    get routes () {
        var controller = this._adminController;
        router.get("/get", controller.retrieve);
        router.post("/create", controller.create);
        router.put("/update/:_id", controller.update);
        router.get("/findbyid/:_id", controller.findById);
        router.delete("/delete/:_id", controller.delete);

        router.post("/login", controller.login);

        return router;
    } 
}