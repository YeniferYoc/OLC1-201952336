"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
class Variable extends Expresion_1.Expresion {
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
        const nombre = `node_${this.linea}_${this.columna}_`;
        if (this.type == Ret_1.Type.STRING)
            return `
        ${nombre};
        ${nombre}[label="\\"${this.value.toString()}\\""];`;
        else
            return `
        ${nombre};
        ${nombre}[label="${this.value.toString()}"];`;
    }
}
exports.Variable = Variable;
