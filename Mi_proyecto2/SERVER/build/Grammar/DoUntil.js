"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoUntil = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
class DoUntil extends instruccion_1.Instruccion {
    constructor(condicion, instru, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instru = instru;
    }
    ejecutar(tabla) {
        let cond = this.condicion.ejecutar(tabla);
        this.instru.ejecutar(tabla);
        if (cond.type != Ret_1.Type.BOOLEAN)
            throw new Error_det_1.Error_det("Semantico", `La condicion es invalida porque es de tipo [${(0, Ret_1.get)(cond.type)}]`, this.linea, this.columna);
        while (cond.value) {
            this.instru.ejecutar(tabla);
            cond = this.condicion.ejecutar(tabla);
            if (cond.type != Ret_1.Type.BOOLEAN)
                throw new Error_det_1.Error_det("Semantico", `La condicion es invalida porque es de tipo [${(0, Ret_1.get)(cond.type)}]`, this.linea, this.columna);
        }
    }
    ast() {
    }
}
exports.DoUntil = DoUntil;
