"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parseo = void 0;
const instruccion_1 = require("./instruccion");
class Parseo extends instruccion_1.Instruccion {
    constructor(tipo, identificadores, value, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.value = value;
    }
    ejecutar(tabla) {
        const expresion = this.value.ejecutar(tabla);
    }
    ast() {
        /*
                const s = Singleton.getInstance()
                const nombre_nodo =`node_${this.line}_${this.column}_`
                s.add_ast(`
                ${nombre_nodo}[label="\\<Instruccion\\>\\nAsignacion"];
                ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
                ${nombre_nodo}->${nombre_nodo}1;
                ${nombre_nodo}->${this.value.ast()}
                `)*/
    }
}
exports.Parseo = Parseo;
