"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imprimir_nl = void 0;
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
let contador = 0;
class Imprimir_nl extends instruccion_1.Instruccion {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
    }
    ejecutar(tabla) {
        var _a;
        const s = Union_1.Union.getInstance();
        const expresion = (_a = this.value) === null || _a === void 0 ? void 0 : _a.ejecutar(tabla);
        if (expresion != null) {
            if (expresion.type != Ret_1.Type.error)
                s.add_consola(expresion.value);
        }
        s.add_consola("\n");
    }
    ast() {
        const u = Union_1.Union.getInstance();
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_imprimir;\n";
        dot += "nodo" + (contador) + "_imprimir" + " [ label =\"IMPRIMIR_NL: \"];\n";
        dot += "nodo" + (contador) + "_imprimir" + " ->" + this.value.ast() + "\n";
        contador++;
        u.add_ast(dot);
        return dot;
    }
}
exports.Imprimir_nl = Imprimir_nl;
