"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Longitud = void 0;
const instruccion_1 = require("./instruccion");
let contador = 0;
class Longitud extends instruccion_1.Instruccion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
    }
    ast() {
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_len_i;\n";
        dot += "nodo" + (contador) + "_len_i" + " [ label =\"LENGTH \"];\n";
        dot += "nodo" + (contador) + "_len_i" + " ->" + this.expre.ast() + "\n";
        contador++;
        return dot;
    }
}
exports.Longitud = Longitud;
