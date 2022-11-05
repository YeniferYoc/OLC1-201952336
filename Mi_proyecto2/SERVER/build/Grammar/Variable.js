"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class Variable extends Expresion_1.Expresion {
    //public contador:number = 0
    constructor(value, type, line, column) {
        super(line, column);
        this.value = value;
        this.type = type;
    }
    ejecutar() {
        if (this.type == Ret_1.Type.INT)
            return { value: Number(this.value), type: Ret_1.Type.INT };
        if (this.type == Ret_1.Type.DOUBLE)
            return { value: Number(this.value), type: Ret_1.Type.DOUBLE };
        else if (this.type == Ret_1.Type.CHAR)
            return { value: this.value, type: Ret_1.Type.CHAR };
        else if (this.type == Ret_1.Type.STRING)
            return { value: this.value, type: Ret_1.Type.STRING };
        else if (this.type == Ret_1.Type.BOOLEAN) {
            if (this.value == "true") {
                return { value: Boolean(true), type: Ret_1.Type.BOOLEAN };
            }
            else {
                return { value: Boolean(false), type: Ret_1.Type.BOOLEAN };
            }
        }
        else
            return { value: this.value, type: Ret_1.Type.error };
    }
    ast() {
        let dot = "";
        console.log("entro var");
        contador = contador + 1;
        dot += "nodo" + (contador) + "_var;\n";
        dot += "nodo" + (contador) + "_var" + " [ label =\"" + this.value.toString() + "\"];\n";
        contador = contador + 1;
        return dot;
    }
}
exports.Variable = Variable;
