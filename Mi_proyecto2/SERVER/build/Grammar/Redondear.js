"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redondear = void 0;
const instruccion_1 = require("./instruccion");
let contador = 0;
class Redondear extends instruccion_1.Instruccion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
    }
    ast() {
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_to_redon;\n";
        dot += "nodo" + (contador) + "_to_redon" + " [ label =\"ROUND \"];\n";
        dot += "nodo" + (contador) + "_to_redon" + " ->" + this.expre.ast() + "\n";
        contador++;
        return dot;
    }
}
exports.Redondear = Redondear;
