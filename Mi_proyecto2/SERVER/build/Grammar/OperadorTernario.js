"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperadorTernario = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
class OperadorTernario extends instruccion_1.Instruccion {
    constructor(condicion, valor1, valor2, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    ejecutar(tabla) {
        const condition = this.condicion.ejecutar(tabla);
        if (condition.type != Ret_1.Type.BOOLEAN)
            throw new Error_det_1.Error_det("Semantico", `La condicion de la instruccion ternaria tiene que ser tipo [BOOLEAN] y se reconocio el tipo [${(0, Ret_1.get)(condition.type)}}]]`, this.linea, this.columna);
        if (condition.value)
            this.valor1.ejecutar(tabla);
        else
            this.valor2.ejecutar(tabla);
    }
    ast() {
        /*const s= Singleton.getInstance()
        const name_nodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_nodo} [label="\\<Instruccion\\>\\n Operador ternario"];
        ${name_nodo}1[label="\\<Instruccion verdadera\\>"];
        ${name_nodo}2[label="\\<Instruccion falsa\\>"];
        ${name_nodo}->${name_nodo}1;
        ${name_nodo}->${name_nodo}2;
        ${name_nodo}->${this.condicion.ast()}
        ${name_nodo}1->node_${this.valor1.line}_${this.valor1.column}_;
        ${name_nodo}2->node_${this.valor2.line}_${this.valor2.column}_;
        `)
        this.valor1.ast();
        this.valor2.ast();*/
    }
}
exports.OperadorTernario = OperadorTernario;
