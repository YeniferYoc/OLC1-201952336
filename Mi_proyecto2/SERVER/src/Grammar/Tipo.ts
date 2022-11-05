import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class Tipo extends Instruccion {

    constructor(
        public expre: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
    }
    
  
    public   ast() {
        //console.log("char arrrrrrrrrrr")
         let  dot:string = "";
    //contador += 1;
    dot+="nodo"+(contador)+"_to_C;\n";
        dot+="nodo"+(contador)+"_TP"+" [ label =\"TYPEOF\"];\n";
        
        dot+="nodo"+(contador)+"_TP"+" ->"+this.expre.ast()+"\n";
           
    
    contador++;

    return dot;

    }
}