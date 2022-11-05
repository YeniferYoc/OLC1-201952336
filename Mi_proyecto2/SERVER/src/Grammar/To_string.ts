import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Retorno, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class To_string extends Expresion {

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
    dot+="nodo"+(contador)+"_to_S;\n";
        dot+="nodo"+(contador)+"_to_S"+" [ label =\"TO STRING\"];\n";
        
        dot+="nodo"+(contador)+"_to_S"+" ->"+this.expre.ast()+"\n";
           
    
    contador++;

    return dot;

    }
}