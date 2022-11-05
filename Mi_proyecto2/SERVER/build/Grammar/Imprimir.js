"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imprimir = void 0;
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
let contador = 0;
class Imprimir extends instruccion_1.Instruccion {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
    }
    ejecutar(tabla) {
        var _a;
        const s = Union_1.Union.getInstance();
        const expresion = (_a = this.value) === null || _a === void 0 ? void 0 : _a.ejecutar(tabla);
        console.log(expresion.value + "fff");
        if (expresion != null) {
            if (expresion.type != Ret_1.Type.error)
                s.add_consola(expresion.value);
        }
    }
    ast() {
        const u = Union_1.Union.getInstance();
        console.log("iprimir entro");
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_imprimir;\n";
        dot += "nodo" + (contador) + "_imprimir" + " [ label =\"IMPRIMIR: \"];\n";
        dot += "nodo" + (contador) + "_imprimir" + " ->" + this.value.ast() + "\n";
        console.log(dot);
        contador++;
        u.add_ast(dot);
        return dot;
    }
}
exports.Imprimir = Imprimir;
