import * as express from "express";
class App {
    constructor() {
        this.app = express();
        this.app.get("/", (req, res, next) => {
            res.send("HelloWorld");
        });
    }
    /**
     * static bootstrap
     * return new App();
     */
    static bootstrap() {
        return new App();
    }
}
export default App;
