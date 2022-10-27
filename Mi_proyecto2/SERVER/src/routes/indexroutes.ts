import {Router}  from 'express'; 
class indexroutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',(req, res) => res.send('hellxxo'));

    }
}
const ndexroutes = new indexroutes();
export default ndexroutes.router;