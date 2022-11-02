"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Si = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
class Si extends instruccion_1.Instruccion {
    constructor(condition, instrucciones, instrucciones_else, linea, columna) {
        super(linea, columna);
        this.condition = condition;
        this.instrucciones = instrucciones;
        this.instrucciones_else = instrucciones_else;
    }
    ejecutar(tabla) {
        var _a;
        const expresion = this.condition.ejecutar(tabla);
        if (expresion.type != Ret_1.Type.BOOLEAN)
            throw new Error_det_1.Error_det("Semantico", `La condicion de la instruccion if tiene que ser tipo [BOOLEAN] y se reconocio el tipo [${(0, Ret_1.get)(expresion.type)}}]]`, this.linea, this.columna);
        if (expresion.value)
            this.instrucciones.ejecutar(tabla);
        else
            (_a = this.instrucciones_else) === null || _a === void 0 ? void 0 : _a.ejecutar(tabla);
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
exports.Si = Si;
