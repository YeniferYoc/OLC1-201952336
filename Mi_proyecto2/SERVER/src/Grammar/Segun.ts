import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class Segun extends Instruccion {

    constructor(
        private condition: Expresion,
        private instrucciones_else: Instruccion | null,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

  

    }

    public ast() {
        let dot:string = "";
		
		let mi_ :number = contador;
		dot+="nodo"+(mi_)+"_SW;";
		dot+="nodo"+(mi_)+"_SW"+" [ label =\"SWITCH \"];\n";
        dot+="nodo"+mi_+"_SW"+" ->"+this.condition.ast();
return dot; 
    }
}