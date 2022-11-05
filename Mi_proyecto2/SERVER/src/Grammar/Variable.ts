import { Expresion } from "./Expresion"
import { Retorno, Type } from "./Ret"
let contador : number = 0;
export class Variable extends Expresion {
    //public contador:number = 0
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
        let dot:string=""
        console.log("entro var")
        contador = contador+1;
				dot+="nodo"+(contador)+"_var;\n";
				dot+="nodo"+(contador)+"_var"+" [ label =\""+this.value.toString()+"\"];\n";
				contador = contador+1;


        return dot;

    }
}