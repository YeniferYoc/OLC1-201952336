import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
let contador:number = 0;
export class Mientras extends Instruccion {

    constructor(
        private condicion: Expresion,
        public instru: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        let cumplir_cond = this.condicion.ejecutar(tabla)
        if (cumplir_cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion enviada no es de tipo bool y no de tipo [${get(cumplir_cond.type)}]`, this.linea, this.columna)

        while (cumplir_cond.value) {
            this.instru.ejecutar(tabla)
            cumplir_cond = this.condicion.ejecutar(tabla)
            if (cumplir_cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion enviada no es de tipo bool y no de tipo [BOOLEAN] y se reconocio el tipo [${get(cumplir_cond.type)}]`, this.linea, this.columna)
        }
    }
    public ast() {
        const s = Union.getInstance()
        let dot:string = "";
		
		let mi_ :number = contador;
		dot+="nodo"+(mi_)+"_mi;";
		dot+="nodo"+(mi_)+"_mi"+" [ label =\"WHILE "+"\"];\n";
		dot+="nodo"+mi_+"_mi"+" ->"+this.condicion.ast();
		dot+="nodo"+(mi_)+"_mi"+" ->";
        
	
		if(this.instru != null) {
			dot+=this.instru.ast();
		}
		else {
			dot+="nodo"+mi_+"_mi"+" ->"+"nodo"+mi_+"_null_mi;";
			dot+="nodo"+(mi_)+"_null_mi"+" [ label =\"NULL "+"\"];\n";
			contador++;
		}
		
		contador++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		s.add_ast(dot);
        return dot; 
    }
}