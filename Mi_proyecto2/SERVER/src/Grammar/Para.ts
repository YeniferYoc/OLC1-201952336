import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
let contador:number = 0;
export class Para extends Instruccion {

    constructor(
        private desde: Instruccion,
        private hasta: Expresion,
        private iterador: Instruccion,
        private instr: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        //crear un nuevo entorno para ejecutar solo la variable del for 
        const tabla_nueva = new Tabla_s(tabla)
        //ejecuta la declacion o podria ser una asignacion
        this.desde.ejecutar(tabla_nueva)
        let condicion = this.hasta.ejecutar(tabla_nueva)
        //verificar que la expresion sea de tipo boolean
        if (condicion.type != Type.BOOLEAN) throw new Error_det("Semantico", `Error en el tipo de operacion, se recibio un tipo [${get(condicion.type)}] en la expresion`, this.linea, this.columna)
        while (condicion.value) {
            this.instr.ejecutar(tabla_nueva)
            this.iterador.ejecutar(tabla_nueva)
            //ejecutar la condicion otra vez para saber si seguir o salir 
            condicion = this.hasta.ejecutar(tabla_nueva)
        }
    }

    public ast() {
        let dot :string= "";
		console.log("entro for777777777777777777777777777777777777777777777")
		let for_:number = contador;
		dot+="nodo"+(for_)+"_for;\n";
		dot+="nodo"+(for_)+"_for"+" [ label =\"FOR "+"\"];\n";
		dot+="nodo"+(for_)+"_cfor"+" [ label =\"DECLARACION FOR "+"\"];\n";
		dot+="nodo"+for_+"_for"+" ->"+"nodo"+(for_)+"_cfor;";
		dot+="nodo"+(for_)+"_cfor"+" ->" +this.desde.ast();
		//console.log(dot)
		//dot+="nodo"+(for_)+"_cfor"+" ->"+desde.CodigoDot();
		dot+="nodo"+(for_)+"_cfor"+" ->"+this.hasta.ast();
        //console.log(dot)
        dot+="nodo"+(for_)+"_cfor"+" ->"+this.iterador.ast();
        //console.log(dot)
		
		dot+="nodo"+(for_)+"_for"+" ->";
		
		
		
		if(this.instr != null) {
			dot+=this.instr.ast();
            console.log(dot);
		}
		else {
			dot+="nodo"+for_+"_for"+" ->"+"nodo"+for_+"_null_for;";
			dot+="nodo"+(for_)+"_null_for"+" [ label =\"NULL "+"\"];\n";
			contador++; 
		}
			contador++;
		console.log("jdsjddddd ddddddakjdk")
		console.log(dot)
	
       
        return dot;
    }
}