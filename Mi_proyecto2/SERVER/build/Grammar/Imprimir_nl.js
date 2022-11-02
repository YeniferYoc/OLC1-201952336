"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imprimir_nl = void 0;
const instruccion_1 = require("./instruccion");
class Imprimir_nl extends instruccion_1.Instruccion {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
    }
    ejecutar(tabla) {
        /*
                const s = Singleton.getInstance()
                const expresion = this.value?.execute(environment);
                if (expresion != null) {
                    if (expresion.type != Type.error) s.add_consola(expresion.value)
                }
                s.add_consola("\n")*/
    }
    ast() {
    }
}
exports.Imprimir_nl = Imprimir_nl;
