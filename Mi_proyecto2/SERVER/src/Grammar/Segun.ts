import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
export class Segun extends Instruccion {

    constructor(
        private condition: Expresion,
        private instrucciones_else: Instruccion | null,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

  

    }

    public ast() {
        /*const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nif"];
        ${name_node}1[label="\\<True\\>"];
        ${name_node}2[label="\\<Else\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        ${name_node}1->node_${this.code.line}_${this.code.column}_;`)
        this.code.ast()
        if (this.elsSt != null) {
            s.add_ast(`${name_node}2->node_${this.elsSt.line}_${this.elsSt.column}_`)
            this.elsSt.ast()
        }*/
    }
}