
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
            console.log('server yoooooo', this.app.get('port'));
            let variable:string = "hola"
            console.log(variable.length)
            let nu = 2;
            let potencia = nu**6;
            console.log(potencia+"potencia")
            let varible_:string = nu.toString()+" hola";
            console.log(varible_)
        for(let a of variable){
            console.log(a);
        }
            let var1 = 1;
            console.log(var1)
            
            
        });
    }
}
const server = new Server();
server.start();