"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retornando = void 0;
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class Retornando extends Expresion_1.Expresion {
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
        //console.log("char arrrrrrrrrrr")
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_return;\n";
        dot += "nodo" + (contador) + "_return" + " [ label =\"RETURN\"];\n";
        dot += "nodo" + (contador) + "_return" + " ->" + this.expre.ast() + "\n";
        contador++;
        return dot;
    }
}
exports.Retornando = Retornando;
