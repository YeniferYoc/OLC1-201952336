import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class Longitud extends Instruccion {

    constructor(
        public expre: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
    }
    
    public ast() {let  dot:string = "";
    //contador += 1;
    dot+="nodo"+(contador)+"_len_i;\n";
        dot+="nodo"+(contador)+"_len_i"+" [ label =\"LENGTH \"];\n";
        
        dot+="nodo"+(contador)+"_len_i"+" ->"+this.expre.ast()+"\n";
           
    
    contador++;

    return dot;

    }
}