import * as express from "express";
import * as bodyParser from "body-parser";
import { MethodOverride } from "../MethodOverride";
import { BaseRoutes } from "../../routes/"; 
import * as jwt from "express-jwt";
import { Constants } from "../../constants/Constants";


export class MiddlewaresBase {
    
    static get configuration () {
         var app = express();
         app.use(bodyParser.json());
         app.use(MethodOverride.configuration());
         app.use(new BaseRoutes().routes);
         app.use(jwt({ secret: Constants.SECRET }).unless({ path: ['/admin/login'] }));
        
         return app;
    }    
}