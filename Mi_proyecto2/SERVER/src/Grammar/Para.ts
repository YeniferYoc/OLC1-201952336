import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"

export class Para extends Instruccion {

    constructor(
        private desde: Instruccion,
        private hasta: Expresion,
        private iterador: Instruccion,
        private instr: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        //crear un nuevo entorno para ejecutar solo la variable del for 
        const tabla_nueva = new Tabla_s(tabla)
        //ejecuta la declacion o podria ser una asignacion
        this.desde.ejecutar(tabla_nueva)
        let condicion = this.hasta.ejecutar(tabla_nueva)
        //verificar que la expresion sea de tipo boolean
        if (condicion.type != Type.BOOLEAN) throw new Error_det("Semantico", `Error en el tipo de operacion, se recibio un tipo [${get(condicion.type)}] en la expresion`, this.linea, this.columna)
        while (condicion.value) {
            this.instr.ejecutar(tabla_nueva)
            this.iterador.ejecutar(tabla_nueva)
            //ejecutar la condicion otra vez para saber si seguir o salir 
            condicion = this.hasta.ejecutar(tabla_nueva)
        }
    }

    public ast() {
/*
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nFor"];
        ${name_node}->node_${this.declaracion.line}_${this.declaracion.column}_;
        ${name_node}->node_${this.iterador.line}_${this.iterador.column}_;
        ${name_node}->node_${this.code.line}_${this.code.column}_;
        ${name_node}->${this.condicion_seguir.ast()}
        `)
        this.declaracion.ast();
        this.iterador.ast();
        this.code.ast()*/

    }
}