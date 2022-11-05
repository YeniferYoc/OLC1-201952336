"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.To_upper = void 0;
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class To_upper extends Expresion_1.Expresion {
    constructor(expre, linea, columna) {
        super(linea, columna);
        this.expre = expre;
    }
    ejecutar(tabla) {
        let resultado;
        resultado = resultado = { value: ("error de operacion"), type: Ret_1.Type.STRING };
        return resultado;
    }
    ast() {
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_to_U;\n";
        dot += "nodo" + (contador) + "_to_U" + " [ label =\"TO UPER CASE\"];\n";
        dot += "nodo" + (contador) + "_to_U" + " ->" + this.expre.ast() + "\n";
        contador++;
        return dot;
    }
}
exports.To_upper = To_upper;
