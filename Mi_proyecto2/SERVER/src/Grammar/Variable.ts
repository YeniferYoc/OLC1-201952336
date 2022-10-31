import { Expresion } from "./Expresion"
import { Retorno, Type } from "./Ret"

export class Variable extends Expresion {

    constructor(
        private value: any,
        private type: Type,
        line: number,
        column: number
    ) {
        super(line, column)
    }

    public ejecutar(): Retorno {
        if (this.type == Type.INT)
            return { value: Number(this.value), type: Type.INT }
        if (this.type == Type.DOUBLE)
            return { value: Number(this.value), type: Type.DOUBLE }
        else if (this.type == Type.CHAR)
            return { value: this.value, type: Type.CHAR }
        else if (this.type == Type.STRING)
            return { value: this.value, type: Type.STRING }
        else if (this.type == Type.BOOLEAN) {
            if (this.value == "true") {
                return { value: Boolean(true), type: Type.BOOLEAN }
            }
            else {
                return { value: Boolean(false), type: Type.BOOLEAN }
            }
        }
        else
            return { value: this.value, type: Type.error }

    }
    public ast() {

        const nombre = `node_${this.linea}_${this.columna}_`
        if(this.type==Type.STRING) return `
        ${nombre};
        ${nombre}[label="\\"${this.value.toString()}\\""];`
 
        else return `
        ${nombre};
        ${nombre}[label="${this.value.toString()}"];`

    }
}