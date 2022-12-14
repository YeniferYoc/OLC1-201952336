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
        this.app.use("/", indexroutes_1.default);
        //this.app.use(ndexroutes)
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
/*


            const parser = require("./Grammar/Gramatica");
            const fs = require("fs");
            
            try {
                console.log("entoncere")
                const entrada = fs.readFileSync("./src/entrada.txt");
                const ast = parser.parse(entrada.toString());
                const env= new Tabla_s(null);
            
                for (const instruccion of ast) {
                    try {
                        instruccion.ejecutar(env);
                    } catch (error) {
                        console.log(error);
                        
                    }
                }
            
                
                
            } catch (error) {
                console.log(error);
                
            }

s
*/ 
