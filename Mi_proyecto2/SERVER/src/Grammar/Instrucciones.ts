import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"

export class Instrucciones extends Instruccion {

    constructor(
        private instrucciones: Array<Instruccion>,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        const newEnv = new Tabla_s(tabla)

        //recorrer primero las instrucciones buscando funciones
        for (const x of this.instrucciones) {
            if (x instanceof Funcion) {
                x.ejecutar(newEnv)
            }
        }

        //recorrer las instrucciones restantes
        for (const x of this.instrucciones) {
            if (x instanceof Funcion) { }
            else if (x.toString() != ";") {
                const instruccion = x.ejecutar(newEnv)
            }
        }

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