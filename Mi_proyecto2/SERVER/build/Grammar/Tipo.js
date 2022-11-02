"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipo = void 0;
const instruccion_1 = require("./instruccion");
class Tipo extends instruccion_1.Instruccion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
    }
    ast() {
    }
}
exports.Tipo = Tipo;
