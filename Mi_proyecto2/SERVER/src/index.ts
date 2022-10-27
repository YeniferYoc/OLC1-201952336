
import express, {Application} from 'express'; 
import ndexroutes from './routes/indexroutes';
import morgan from 'morgan';
import cors from 'cors';
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
            console.log('server mio', this.app.get('port'));
            
            let var1 = 1;
            console.log(var1)

            const parser = require("./Grammar/Grammar");
            const fs = require("fs");
            
            try {
                const entrada = fs.readFileSync("src/entrada.txt");
                const ast = parser.parse(entrada.toString());
            
                
                
            } catch (error) {
                console.log(error);
                
            }







            
        });
    }
}
const server = new Server();
server.start();