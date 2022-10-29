"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexroutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server yoooooo', this.app.get('port'));
            let variable = "hola";
            console.log(variable.length);
            let nu = 2;
            let potencia = nu ** 6;
            console.log(potencia + "potencia");
            let varible_ = nu.toString() + " hola";
            console.log(varible_);
            for (let a of variable) {
                console.log(a);
            }
            let var1 = 1;
            console.log(var1);
        });
    }
}
const server = new Server();
server.start();
