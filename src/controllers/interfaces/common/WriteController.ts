import * as express from "express";

export interface WriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
}
