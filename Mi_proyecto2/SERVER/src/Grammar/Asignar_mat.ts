import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { get_num } from "./Vector"

export class Asignar_mat extends Instruccion {

    constructor(
        public nombre: string,
        public fila: Expresion,
        public col: Expresion,
        public asig: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }
    public ejecutar(tabla: Tabla_s) {
/*
        let objeto = tabla.get_array(this.nombre)
        if (objeto == undefined) throw new Error_det("Semantico", `Este array '${this.nombre}' no existe`, this.linea, this.columna)
        var array = objeto.contenido as Array<any>

            //Es una asignacion a una posicion en especifico
            const expre_index = this.indice.ejecutar(tabla)
            const expre_asig = this.asig.ejecutar(tabla)
            if (expre_index.type != Type.INT) throw new Error_det("Semantico", `El tipo de dato del index no es valido`, this.linea, this.columna)
            if (expre_asig.type != get_num(objeto.tipo)) throw new Error_det("Semantico", `La asignacion es de tipo [${get(expre_asig.type)}] pero el array tiene que ser tipo [${objeto.tipo}]`, this.linea, this.columna)
            array[expre_index.value] = expre_asig.value

        
        tabla.update_array(this.nombre, array)*/
    }

    public ast() {/*
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        if (this.array == null) {
            s.add_ast(`
            ${name_node}[label="\\<Instruccion\\>\\nArray asignacion"];
            ${name_node}1[label="\\<Index\\>"];
            ${name_node}2[label="\\<Asignar\\>"];
            ${name_node}->${name_node}1;
            ${name_node}->${name_node}2;
            ${name_node}1->${this.expresionIndex.ast()}
            ${name_node}2->${this.expresionAsignar.ast()}
            `)
        } else {
            s.add_ast(`
            ${name_node}[label="\\<Instruccion\\>\\nArray asignacion"];
            `)
            this.array.forEach(element => {
                s.add_ast(`
                ${name_node}->${element.ast()}
                `)
            });
        }*/

    }
}