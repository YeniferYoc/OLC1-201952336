
import express, {Application} from 'express'; 
import ndexroutes from './routes/indexroutes';

import morgan from 'morgan';
import cors from 'cors';
import { Tabla_s } from './Grammar/Tabla_s';
import { Union } from './Grammar/Union';
class Server {
    public app: Application;
    constructor(){
        this.app =  express();
        this.config();
        this.routes();
    }
    config():void {
    this.app.set('port',process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    }
    routes():void{
        this.app.use("/", ndexroutes);
        //this.app.use(ndexroutes)
    }
    start():void{
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