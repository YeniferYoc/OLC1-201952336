"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mientras = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
class Mientras extends instruccion_1.Instruccion {
    constructor(condicion, instru, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instru = instru;
    }
    ejecutar(tabla) {
        let cumplir_cond = this.condicion.ejecutar(tabla);
        if (cumplir_cond.type != Ret_1.Type.BOOLEAN)
            throw new Error_det_1.Error_det("Semantico", `La condicion enviada no es de tipo bool y no de tipo [${(0, Ret_1.get)(cumplir_cond.type)}]`, this.linea, this.columna);
        while (cumplir_cond.value) {
            this.instru.ejecutar(tabla);
            cumplir_cond = this.condicion.ejecutar(tabla);
            if (cumplir_cond.type != Ret_1.Type.BOOLEAN)
                throw new Error_det_1.Error_det("Semantico", `La condicion enviada no es de tipo bool y no de tipo [BOOLEAN] y se reconocio el tipo [${(0, Ret_1.get)(cumplir_cond.type)}]`, this.linea, this.columna);
        }
    }
    ast() {
        /* const s = Singleton.getInstance()
         const name_node = `node_${this.line}_${this.column}_`
         s.add_ast(`
         ${name_node}[label="\\<Instruccion\\>\\nwhile"];
         ${name_node}1[label="\\<Condicion\\>"];
         ${name_node}->${name_node}1;
         ${name_node}1->${this.condicion.ast()}
         ${name_node}->node_${this.code.line}_${this.code.column}_;
         `)
         this.code.ast()
 */
    }
}
exports.Mientras = Mientras;
