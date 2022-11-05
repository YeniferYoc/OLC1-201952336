import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { get, Type } from "./Ret"
let contador :number = 0;
export class Parseo extends Instruccion {

    constructor(
        public tipo: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

       // const expresion = this.value.ejecutar(tabla)
        

        

    }

    public ast() {
        console.log("entro parseo")
        let dot:string=""
        contador = contador+1;
				dot+="nodo"+(contador)+"_parseo;\n";
				dot+="nodo"+(contador)+"_parseo"+" [ label =\""+this.tipo.toString()+"\"];\n";
				dot+="nodo"+(contador)+"_parseo ->";
                contador = contador+1;
                console.log(dot)


        return dot;

    }
}