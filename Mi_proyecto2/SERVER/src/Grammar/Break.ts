import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
let contador:number = 0;
export class Break_ extends Instruccion {

    constructor(
       
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
    }
    
    public ast() {
        const u = Union.getInstance()

        let  dot:string = "";
		//contador += 1;
        
            dot+="nodo"+(contador)+"_break;\n";
            dot+="nodo"+(contador)+"_break"+" [ label =\"BREAK\"];\n";
             u.add_ast(dot);   
             return dot; 
    }
}