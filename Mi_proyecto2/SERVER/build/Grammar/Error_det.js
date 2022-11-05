"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error_det = void 0;
class Error_det {
    constructor(tipo, err, linea, columna_mia) {
        this.tipo = tipo;
        this.err = err;
        this.linea = linea;
        this.columna_mia = columna_mia;
    }
    obtener_error() {
        console.log("tipo : " + this.tipo + " descripcion: " + this.err + " linea: " + this.linea + " col: " + this.columna_mia);
    }
}
exports.Error_det = Error_det;
