import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"

export class Longitud extends Instruccion {

    constructor(
        public expre: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
    }
    
    public ast() {/*

        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="Lista Instrucciones"];        
        `)
        this.code.forEach(x => {
            s.add_ast(`${name_node}->node_${x.line}_${x.column}_;`)
            x.ast()
        })*/

    }
}