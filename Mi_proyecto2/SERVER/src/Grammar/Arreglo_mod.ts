import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
import { get_num } from "./Vector"
let contador:number = 0;
export class Arreglo_mod extends Instruccion {

    constructor(
        public nombre: string,
        public expre: Expresion,
        public push: boolean,      //push
        public pop: boolean,       //pop
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        //revisar que existe este array
        let objeto = tabla.get_array(this.nombre)
        if (objeto == undefined) throw new Error_det("Semantico", `Este array '${this.nombre}' no se pudo existe`, this.linea, this.columna)

        let array = objeto.contenido as Array<any>

        if (this.pop) {
            array.pop()
        } else {
            const tmp = this.expre.ejecutar(tabla)
            if (tmp.type != get_num(objeto.tipo)) throw new Error_det("Semantico", `La expresion tiene que ser del mismo tipo que el array, el array '${this.nombre}' es tipo [${objeto.tipo}] y se detecto el tipo [${get(tmp.type)}]`, this.linea, this.columna)
            array.push(tmp.value)
        }
        tabla.update_array(this.nombre, array)
    }

    public ast() {
        const s = Union.getInstance()
        let  dot:string = "";
		//contador += 1;
        if(this.push){
            //esta en length
            dot+="nodo"+(contador)+"_pus;\n";
            dot+="nodo"+(contador)+"_pus"+" [ label =\"PUSH ARRAY\"];\n";
            dot+="nodo"+(contador)+"_id_pu"+" [ label =\""+this.nombre.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_pus"+" ->"+"nodo"+(contador)+"_id_pu"+"\n";
            
            dot+="nodo"+(contador)+"_pus"+" ->"+(this.expre.ast())+"\n";     
        }else{
            dot+="nodo"+(contador)+"_pop;\n";
            dot+="nodo"+(contador)+"_pop"+" [ label =\"POP ARRAY\"];\n";
            dot+="nodo"+(contador)+"_id_po"+" [ label =\""+this.nombre.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_pop"+" ->"+"nodo"+(contador)+"_id_po"+"\n";
            

        }
        contador++;
        s.add_ast(dot)
        return dot; 
        
        
        /*
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        const name = this.push ? "push" : "pop"
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\> \\n ${name}"];
        `)
        if (this.push) {
            s.add_ast(`
            ${name_node}[label="\\<Instruccion\\> \\n ${name}"];
            ${name_node}->${this.expre.ast()}
            `)
        }*/
    }
}