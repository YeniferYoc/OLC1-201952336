"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redondear = void 0;
const instruccion_1 = require("./instruccion");
class Redondear extends instruccion_1.Instruccion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
    }
    ast() {
    }
}
exports.Redondear = Redondear;
