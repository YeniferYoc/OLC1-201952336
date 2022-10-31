import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Tabla_s } from "./Tabla_s";

export class Imprimir extends Instruccion {

    constructor(
        public value: Expresion,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(tabla: Tabla_s) {
/*
        const s = Singleton.getInstance()
        const expresion = this.value?.execute(environment);
        if (expresion != null) {
            if (expresion.type != Type.error) s.add_consola(expresion.value)
        }
        s.add_consola("\n")*/
    }

    public ast() {/*
        const s = Singleton.getInstance()
        const nombreNodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombreNodo}[label="\\<Instruccion\\>\\nconsole"];`)
        if (this.value!= null){s.add_ast(`${nombreNodo}->${this.value.ast()}`)}
   */
    }
}