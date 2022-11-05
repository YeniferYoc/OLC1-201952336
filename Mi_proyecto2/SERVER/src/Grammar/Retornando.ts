import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Retorno, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class Retornando extends Expresion  {

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
    
    
    public   ast() {
        //console.log("char arrrrrrrrrrr")
         let  dot:string = "";
    //contador += 1;
    dot+="nodo"+(contador)+"_return;\n";
        dot+="nodo"+(contador)+"_return"+" [ label =\"RETURN\"];\n";
        
        dot+="nodo"+(contador)+"_return"+" ->"+this.expre.ast()+"\n";
           
    
    contador++;

    return dot;

    }
}