import { Tabla_s } from "./Tabla_s"

export abstract class Instruccion {

    constructor(public linea: number, public columna: number) {
        this.linea = linea
        this.columna = columna + 1
    }

    public abstract ejecutar(tabla_sim: Tabla_s): any
    public abstract ast(): string

}