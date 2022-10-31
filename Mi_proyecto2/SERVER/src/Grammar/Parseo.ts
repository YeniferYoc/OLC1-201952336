import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { get, Type } from "./Ret"

export class Parseo extends Instruccion {

    constructor(
        public tipo: string,
        public value: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        const expresion = this.value.ejecutar(tabla)
        

        

    }

    public ast() {
/*
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo}[label="\\<Instruccion\\>\\nAsignacion"];
        ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${this.value.ast()}
        `)*/

    }
}