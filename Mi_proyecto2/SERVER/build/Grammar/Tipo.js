"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipo = void 0;
const instruccion_1 = require("./instruccion");
let contador = 0;
class Tipo extends instruccion_1.Instruccion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
    }
    ast() {
        //console.log("char arrrrrrrrrrr")
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_to_C;\n";
        dot += "nodo" + (contador) + "_TP" + " [ label =\"TYPEOF\"];\n";
        dot += "nodo" + (contador) + "_TP" + " ->" + this.expre.ast() + "\n";
        contador++;
        return dot;
    }
}
exports.Tipo = Tipo;
