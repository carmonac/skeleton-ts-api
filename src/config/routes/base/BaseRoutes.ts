import * as express from "express";
import { AdminRoutes } from "../AdminRoutes";

var app = express();
export class BaseRoutes {
    
    get routes() {
        app.use("/admin", new AdminRoutes().routes);
        return app;
    }
}