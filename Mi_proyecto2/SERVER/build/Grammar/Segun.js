"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segun = void 0;
const instruccion_1 = require("./instruccion");
let contador = 0;
class Segun extends instruccion_1.Instruccion {
    constructor(condition, instrucciones_else, linea, columna) {
        super(linea, columna);
        this.condition = condition;
        this.instrucciones_else = instrucciones_else;
    }
    ejecutar(tabla) {
    }
    ast() {
        let dot = "";
        let mi_ = contador;
        dot += "nodo" + (mi_) + "_SW;";
        dot += "nodo" + (mi_) + "_SW" + " [ label =\"SWITCH \"];\n";
        dot += "nodo" + mi_ + "_SW" + " ->" + this.condition.ast();
        return dot;
    }
}
exports.Segun = Segun;
