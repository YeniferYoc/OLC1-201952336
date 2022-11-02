
import express, {Application} from 'express'; 
import ndexroutes from './routes/indexroutes';
import morgan from 'morgan';
import cors from 'cors';
import { Tabla_s } from './Grammar/Tabla_s';
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
        this.app.use(ndexroutes)
    }
    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('server yoooooo', this.app.get('port'));
            let variable:string = "hola"
            console.log(variable.length)
            let nu = 2;
            let potencia = nu**6;
            console.log(potencia+"pot")
            let varible_:string = nu.toString()+" hola";
            console.log(varible_)
        for(let a of variable){
            console.log(a);
        }
            let var1 = 1;
            console.log(var1)
           
            
            var fs= require('fs') ;

            var mygramatica = require('./Grammar/Gramatica.js')
            
            
            
            fs.readFile('./src/entrada.txt',(err:any,data:any)=>{
                //si hay un error
                if (err) throw err;
            
            
                //si no hay errores
                //gramatica.parse
                console.log("hola \\\' td  u");
                console.log(data.toString());
                console.log("ahora toca analizar              izarrrdD")
                mygramatica.parse(data.toString())
                console.log("termine ")
            
            })

            console.log("ola")
            
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