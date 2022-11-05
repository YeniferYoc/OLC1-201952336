import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
import { get_num }  from "./Vector"
let contador : number = 0;
export class Asignar_mat extends Instruccion {

    constructor(
        public nombre: string,
        public indice: Expresion,
        public indice2: Expresion,
        public asig: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }
    public ejecutar(tabla: Tabla_s) {

        let objeto = tabla.get_array(this.nombre)
        if (objeto == undefined) throw new Error_det("Semantico", `Este array '${this.nombre}' no existe`, this.linea, this.columna)
        var array = objeto.contenido as Array<any>

            //Es una asignacion a una posicion en especifico
            const expre_index = this.indice.ejecutar(tabla)
            const expre_asig = this.asig.ejecutar(tabla)
            if (expre_index.type != Type.INT) throw new Error_det("Semantico", `El tipo de dato del index no es valido`, this.linea, this.columna)
            if (expre_asig.type != get_num(objeto.tipo)) throw new Error_det("Semantico", `La asignacion es de tipo [${get(expre_asig.type)}] pero el array tiene que ser tipo [${objeto.tipo}]`, this.linea, this.columna)
            array[expre_index.value] = expre_asig.value

        
        tabla.update_array(this.nombre, array)
    }

    public ast() { const s = Union.getInstance()
        let  dot:string = "";
		//contador += 1;
    
            //esta en length
            dot+="nodo"+(contador)+"_as_MAT;\n";
            dot+="nodo"+(contador)+"_as_MAT"+" [ label =\"ASIGNAR MATRIZ\"];\n";
            dot+="nodo"+(contador)+"_id_MAT"+" [ label =\""+this.nombre.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_as_MAT"+" ->"+"nodo"+(contador)+"_id_MAT"+"\n";
         
            dot+="nodo"+(contador)+"_id_MAT"+" ->"+this.indice.ast()+"\n";
            dot+="nodo"+(contador)+"_id_MAT"+" ->"+this.indice2.ast()+"\n";
            
            
            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.asig.ast())+"\n";     
        
        contador++;
        s.add_ast(dot)
        
        return dot; 
    }
}