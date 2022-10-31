import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"

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

        while (cond.value!) {
            this.instru.ejecutar(tabla)
            cond = this.condicion.ejecutar(tabla)
            if (cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion es invalida porque es de tipo [${get(cond.type)}]`, this.linea, this.columna)
        }
    }
    public ast() {/*
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\ndo while"];
        ${name_node}1[label="\\<Condicion\\>"];
        ${name_node}->${name_node}1;
        ${name_node}1->${this.condicion.ast()}
        ${name_node}->node_${this.code.line}_${this.code.column}_;        
        `)
        this.code.ast()*/

    }
}