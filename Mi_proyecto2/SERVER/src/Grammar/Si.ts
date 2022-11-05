import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
let contador:number = 0;
export class Si extends Instruccion {

    constructor(
        private condition: Expresion,
        private instrucciones: Instruccion,
        private instrucciones_else: Instruccion | null,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        const expresion = this.condition.ejecutar(tabla)
        if (expresion.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion de la instruccion if tiene que ser tipo [BOOLEAN] y se reconocio el tipo [${get(expresion.type)}}]]`, this.linea, this.columna);

        if (expresion.value) this.instrucciones.ejecutar(tabla)
        else this.instrucciones_else?.ejecutar(tabla)

    }

    public ast() {
        const s = Union.getInstance()
        let dot:string = "";
		
		let mi_ :number = contador;
		dot+="nodo"+(mi_)+"_SI;";
		dot+="nodo"+(mi_)+"_SI"+" [ label =\"IF "+"\"];\n";
		dot+="nodo"+mi_+"_SI"+" ->"+this.condition.ast();
		dot+="nodo"+(mi_)+"_SI"+" ->";
        
	
		if(this.instrucciones != null) {
			dot+=this.instrucciones.ast();
		}
		else {
			dot+="nodo"+mi_+"_SI"+" ->"+"nodo"+mi_+"_null_SI;";
			dot+="nodo"+(mi_)+"_null_SI"+" [ label =\"NULL "+"\"];\n";
			contador++;
		}
        dot+="nodo"+(mi_)+"_SI"+" ->";
        if(this.instrucciones_else != null) {
			dot+=this.instrucciones_else.ast();
		}
		else {
			dot+="nodo"+mi_+"_SI"+" ->"+"nodo"+mi_+"_null_SI;";
			dot+="nodo"+(mi_)+"_null_SI"+" [ label =\"NULL "+"\"];\n";
			contador++;
		}
		
		contador++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		s.add_ast(dot);
        return dot; 
    }
}