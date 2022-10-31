import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"

export class Mientras extends Instruccion {

    constructor(
        private condicion: Expresion,
        public instru: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        let cumplir_cond = this.condicion.ejecutar(tabla)
        if (cumplir_cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion enviada no es de tipo bool y no de tipo [${get(cumplir_cond.type)}]`, this.linea, this.columna)

        while (cumplir_cond.value) {
            this.instru.ejecutar(tabla)
            cumplir_cond = this.condicion.ejecutar(tabla)
            if (cumplir_cond.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion enviada no es de tipo bool y no de tipo [BOOLEAN] y se reconocio el tipo [${get(cumplir_cond.type)}]`, this.linea, this.columna)
        }
    }
    public ast() {
       /* const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nwhile"];
        ${name_node}1[label="\\<Condicion\\>"];
        ${name_node}->${name_node}1;
        ${name_node}1->${this.condicion.ast()}
        ${name_node}->node_${this.code.line}_${this.code.column}_;        
        `)
        this.code.ast()
*/
    }
}