import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
let contador :number = 0;
export class DoWhile extends Instruccion {

    constructor(
        private condicion: Expresion,
        private instru: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        let cond = this.condicion.ejecutar(tabla)
        this.instru.ejecutar(tabla)
        if (cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion es invalida porque es de tipo [${get(cond.type)}]`, this.linea, this.columna)

        while (cond.value) {
            this.instru.ejecutar(tabla)
            cond = this.condicion.ejecutar(tabla)
            if (cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion es invalida porque es de tipo [${get(cond.type)}]`, this.linea, this.columna)
        }
    }
    public ast() {

       
	
        const s = Union.getInstance()
        let dot:string = "";
		
		let mi_ :number = contador;
		dot+="nodo"+(mi_)+"_dow;";
		dot+="nodo"+(mi_)+"_dow"+" [ label =\"DO WHILE "+"\"];\n";
		dot+="nodo"+mi_+"_dow"+" ->"+this.condicion.ast();
		dot+="nodo"+(mi_)+"_dow"+" ->";
        
	
		if(this.instru != null) {
			dot+=this.instru.ast();
		}
		else {
			dot+="nodo"+mi_+"_dow"+" ->"+"nodo"+mi_+"_null_dow;";
			dot+="nodo"+(mi_)+"_null_dow"+" [ label =\"NULL "+"\"];\n";
			contador++;
		}
		
		contador++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		s.add_ast(dot);
        return dot; 

    }
}