import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { get_num } from "./Vector"

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

    public ast() {/*
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