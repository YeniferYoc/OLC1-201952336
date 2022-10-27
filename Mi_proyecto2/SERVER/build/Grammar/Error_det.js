"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error_det = void 0;
class Error_det {
    constructor(tipo, err, linea, columna) {
        this.tipo = tipo;
        this.err = err;
        this.linea = linea;
        this.columna = columna;
    }
}
exports.Error_det = Error_det;
