import * as express from "express";
import { MiddlewaresBase as Middlewares } from "./config/middlewares/base/MiddlewaresBase";


class App {
    public static Main() {
        Object.seal(Middlewares);
        let app = express();
        var port = parseInt(process.env.PORT, 10) || 5000;
        app.set("port", port);
        app.use(Middlewares.configuration);
        app.listen(port, () => {
            console.log("Running at localhost:" + port);
        });
    }
}

App.Main();