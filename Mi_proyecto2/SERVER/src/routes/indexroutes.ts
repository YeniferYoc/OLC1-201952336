import {Router}  from 'express'; 
import { apiController } from '../controladores/index_control';
class indexroutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
    
        //this.router.get('/',(req, res) => res.send('hellxx  o'));
    this.router.get("/analizar", apiController.funcion1);
   this.router.post("/leer", apiController.leer_entrada);
    this.router.get("/:nombre", apiController.funcion3);
    this.router.get("/saludo/:nombre", apiController.funcion4);

    }
}
const ndexroutes = new indexroutes();
export default ndexroutes.router;