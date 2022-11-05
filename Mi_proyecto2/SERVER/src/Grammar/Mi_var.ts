import { Type } from "./Ret";

export class Mi_var {
    
    constructor(
        public nombre: string,
        public tipo: any,
        public valor: any
    ) { 


    }
    public obtener_error(){
        console.log("nombre : "+this.nombre+" tipo: "+this.nombre+" valor: "+this.valor);
    }
}