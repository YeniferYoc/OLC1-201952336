import { Retorno } from "./Ret"
import { Tabla_s } from "./Tabla_s"

export abstract class Expresion {

    constructor(public linea: number, public columna: number) {
        this.linea = linea
        this.columna = columna + 1
    }

    public abstract ejecutar(tabla_s: Tabla_s): Retorno
    public abstract ast(): string
}