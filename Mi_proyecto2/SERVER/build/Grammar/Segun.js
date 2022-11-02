"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segun = void 0;
const instruccion_1 = require("./instruccion");
class Segun extends instruccion_1.Instruccion {
    constructor(condition, instrucciones_else, linea, columna) {
        super(linea, columna);
        this.condition = condition;
        this.instrucciones_else = instrucciones_else;
    }
    ejecutar(tabla) {
    }
    ast() {
        /*const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nif"];
        ${name_node}1[label="\\<True\\>"];
        ${name_node}2[label="\\<Else\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        ${name_node}1->node_${this.code.line}_${this.code.column}_;`)
        this.code.ast()
        if (this.elsSt != null) {
            s.add_ast(`${name_node}2->node_${this.elsSt.line}_${this.elsSt.column}_`)
            this.elsSt.ast()
        }*/
    }
}
exports.Segun = Segun;
