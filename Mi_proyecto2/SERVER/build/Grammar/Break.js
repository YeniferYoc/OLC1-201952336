"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break_ = void 0;
const instruccion_1 = require("./instruccion");
const Union_1 = require("./Union");
let contador = 0;
class Break_ extends instruccion_1.Instruccion {
    constructor(linea, columna) {
        super(linea, columna);
    }
    ejecutar(tabla) {
    }
    ast() {
        const u = Union_1.Union.getInstance();
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_break;\n";
        dot += "nodo" + (contador) + "_break" + " [ label =\"BREAK\"];\n";
        u.add_ast(dot);
        return dot;
    }
}
exports.Break_ = Break_;
