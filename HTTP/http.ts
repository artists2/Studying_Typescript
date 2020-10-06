import * as express from "express";


class App {
    public app: express.Application;


    /**
     * static bootstrap
     * return new App();
     */
    public static bootstrap(): App{
        return new App();     
    }

    constructor() {
        this.app = express();
        this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send("HelloWorld");
        })
    }
}

export default App;