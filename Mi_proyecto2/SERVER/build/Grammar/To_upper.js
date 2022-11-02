"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.To_upper = void 0;
const instruccion_1 = require("./instruccion");
class To_upper extends instruccion_1.Instruccion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
    }
    ast() {
    }
}
exports.To_upper = To_upper;
