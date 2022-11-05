"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parseo = void 0;
const instruccion_1 = require("./instruccion");
let contador = 0;
class Parseo extends instruccion_1.Instruccion {
    constructor(tipo, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
    }
    ejecutar(tabla) {
        // const expresion = this.value.ejecutar(tabla)
    }
    ast() {
        console.log("entro parseo");
        let dot = "";
        contador = contador + 1;
        dot += "nodo" + (contador) + "_parseo;\n";
        dot += "nodo" + (contador) + "_parseo" + " [ label =\"" + this.tipo.toString() + "\"];\n";
        dot += "nodo" + (contador) + "_parseo ->";
        contador = contador + 1;
        console.log(dot);
        return dot;
    }
}
exports.Parseo = Parseo;
