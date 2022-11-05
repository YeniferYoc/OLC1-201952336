import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Retorno, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class To_lower extends Expresion {

    constructor(
        public expre: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s):Retorno {
        let resultado: Retorno
        resultado = resultado = { value: ("error de operacion"), type: Type.STRING}

        return resultado;
    }
    
    public ast() {
        let  dot:string = "";
		//contador += 1;
        dot+="nodo"+(contador)+"_to_low;\n";
            dot+="nodo"+(contador)+"_to_low"+" [ label =\"TO LOWER\"];\n";
            
            dot+="nodo"+(contador)+"_to_low"+" ->"+this.expre.ast()+"\n";
               
        
        contador++;

        return dot;

    }
}