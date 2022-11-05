import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Tabla_s } from "./Tabla_s";
import { Union } from "./Union";
let contador:number = 0;
export class Vector extends Instruccion {

    public tam: number

    constructor(
        
        public id: string,
        public arrayExpresiones: Array<Expresion>,
        public tipo: string,
        public contenido: Array<any>, 
        public cast:Instruccion,
        public tamaño:Expresion,  //EL OBJETO que guarda los elementos del array
        linea: number,
        columna: number
    ) {
        super(linea, columna)
        this.tam = -1

    }
    public ejecutar(tabla: Tabla_s) {
        let tama = this.tamaño.ejecutar(tabla);
        if(tama.value <= 0){
            this.arrayExpresiones.forEach(element => {
                const expre = element.ejecutar(tabla);
                if (expre.type != get_num(this.tipo.toLowerCase())) throw new Error_det("Semantico", `Tipo no valido, el contenido de este array tiene que ser tipo [${this.tipo}] `, this.linea, this.columna)
                this.contenido.push(expre.value)
            })
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = this.arrayExpresiones.length
        }else{
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = tama.value

        }
        
    }

    public ast() {
        //console.log("entro ast declara  cion ")
        const u = Union.getInstance()

		// TODO Auto-generated method stub
		//System.out.println("entro");
		let  dot:string = "";
		
		let  declaracion :number= contador;
		let ides :boolean = false;
        dot+="nodo"+(declaracion)+"_vec;";
        dot+="nodo"+(declaracion)+"_vec"+" [ label =\"VECTOR "+this.tipo.toString()+"\"];\n";
				
				dot+="nodo"+(declaracion)+"_vec_id"+" [ label =\""+this.id.toString()+"\"];\n";
				dot+="nodo"+(declaracion)+"_vec"+" ->nodo"+(declaracion)+"_vec_id;";
        if(this.arrayExpresiones == null && this.cast == null){
            dot+="nodo"+(declaracion)+"_vec"+" ->"+this.tamaño.ast();
        }

        else if(this.arrayExpresiones == null && this.cast != null){
            console.log("aeisjejk")
            dot+="nodo"+(declaracion)+"_vec"+" ->"+this.cast.ast();
            dot+=(this.tamaño.ast())+"\n"; 
            console.log(dot)
        }
        
        else{
            this.arrayExpresiones.forEach(element => {
                dot+="nodo"+(declaracion)+"_vec"+" ->"+element.ast();
            })
        }

		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		contador++;
		
			
		//console.log(dot)
		u.add_ast(dot)
		return dot; 
	
    }

}

/**
 * Retorna un numero segun el tipo
 * @param id 
 * @returns 
 */
export function get_num(id: string): number {
    switch (id) {
        case "int":
            return 0
        case "double":
            return 1
        case "string":
            return 2
        case "char":
            return 3
        case "boolean":
            return 4
        default:
            return 0
    }
}