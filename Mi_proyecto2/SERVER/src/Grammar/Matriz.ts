import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Tabla_s } from "./Tabla_s";
import { Union } from "./Union";
let contador : number = 0;
export class Matriz extends Instruccion {

    public filass: number
    public colunas: number

    constructor(
        
        public id: string,
        public arrayExpresiones: Array<Array<Expresion>>,
        public tipo: string,
        public contenido: Array<Array<any>>, 
        public cast:Instruccion,
        public cast2: Instruccion,
        public filas:Expresion,  //EL OBJETO que guarda los elementos del array
        public cols:Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
        this.filass = -1
        this.colunas = -1

    }
    public ejecutar(tabla: Tabla_s) {
        /*let fil = this.filas.ejecutar(tabla);
        let col = this.cols.ejecutar(tabla);
        if(fil.value <= 0 && col.value <= 0){
            let i = 0
            let j = 0
            this.arrayExpresiones.forEach(element => {
                const expre = element.ejecutar(tabla);
                if (expre.type != get_num(this.tipo.toLowerCase())) throw new Error_det("Semantico", `Tipo no valido, el contenido de este array tiene que ser tipo [${this.tipo}] `, this.linea, this.columna)
                if(i )
                i++
                j++
            })
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = this.arrayExpresiones.length
        }else{
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = tama.value
            
        }*/
        
    }

    public ast() {

        
        //console.log("entro ast declara  cion ")
        const u = Union.getInstance()

		// TODO Auto-generated method stub
		//System.out.println("entro");
		let  dot:string = "";
		
		let  declaracion :number= contador;
		let ides :boolean = false;
        dot+="nodo"+(declaracion)+"_matriz;";
        dot+="nodo"+(declaracion)+"_matriz"+" [ label =\"MATRIZ "+this.tipo.toString()+"\"];\n";
				
				dot+="nodo"+(declaracion)+"_matriz_id"+" [ label =\""+this.id.toString()+"\"];\n";
				dot+="nodo"+(declaracion)+"_matriz"+" ->nodo"+(declaracion)+"_matriz_id;";
        if(this.arrayExpresiones == null && this.cast == null && this.cast2 == null){
            dot+="nodo"+(declaracion)+"_matriz"+" ->"+this.filas.ast();
            dot+="nodo"+(declaracion)+"_matriz"+" ->"+this.cols.ast();
        }

        else if(this.arrayExpresiones == null && this.cast != null && this.cast2 == null){
            //console.log("aeisjejk")
            dot+="nodo"+(declaracion)+"_matriz"+" ->"+this.cast.ast();
            dot+=this.filas.ast();
            dot+="nodo"+(declaracion)+"_matriz"+" ->"+this.cols.ast();
        }else if(this.arrayExpresiones == null && this.cast == null && this.cast2 != null){
            //console.log("aeisjejk")
            dot+="nodo"+(declaracion)+"_matriz"+" ->"+this.cast2.ast();
            dot+=this.cols.ast();
            dot+="nodo"+(declaracion)+"_matriz"+" ->"+this.filas.ast();
        }
        
        else{
            this.arrayExpresiones.forEach(element => {
                element.forEach(ele => {
                    dot+="nodo"+(declaracion)+"_ele"+" ->"+ele.ast();
                })
                
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