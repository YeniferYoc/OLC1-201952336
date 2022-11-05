import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
let contador :number = 0;
export class Redondear extends Instruccion {

    constructor(
        public expre: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
    }
    
    public ast() {
        let  dot:string = "";
        //contador += 1;
        dot+="nodo"+(contador)+"_to_redon;\n";
            dot+="nodo"+(contador)+"_to_redon"+" [ label =\"ROUND \"];\n";
            
            dot+="nodo"+(contador)+"_to_redon"+" ->"+this.expre.ast()+"\n";
               
        
        contador++;
    
        return dot;
    }
}