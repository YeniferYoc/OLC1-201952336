"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simbolo = void 0;
class Simbolo {
    /**
     * Clase que guarda toda la informacion importante de una variable y despues sera almacenada en la tabla de simbolos
     */
    constructor(valor, id, tipo) {
        this.valor = valor;
        this.id = id;
        this.tipo = tipo;
    }
}
exports.Simbolo = Simbolo;
