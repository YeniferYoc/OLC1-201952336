"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Si = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
let contador = 0;
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
        const s = Union_1.Union.getInstance();
        let dot = "";
        let mi_ = contador;
        dot += "nodo" + (mi_) + "_SI;";
        dot += "nodo" + (mi_) + "_SI" + " [ label =\"IF " + "\"];\n";
        dot += "nodo" + mi_ + "_SI" + " ->" + this.condition.ast();
        dot += "nodo" + (mi_) + "_SI" + " ->";
        if (this.instrucciones != null) {
            dot += this.instrucciones.ast();
        }
        else {
            dot += "nodo" + mi_ + "_SI" + " ->" + "nodo" + mi_ + "_null_SI;";
            dot += "nodo" + (mi_) + "_null_SI" + " [ label =\"NULL " + "\"];\n";
            contador++;
        }
        dot += "nodo" + (mi_) + "_SI" + " ->";
        if (this.instrucciones_else != null) {
            dot += this.instrucciones_else.ast();
        }
        else {
            dot += "nodo" + mi_ + "_SI" + " ->" + "nodo" + mi_ + "_null_SI;";
            dot += "nodo" + (mi_) + "_null_SI" + " [ label =\"NULL " + "\"];\n";
            contador++;
        }
        contador++;
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        s.add_ast(dot);
        return dot;
    }
}
exports.Si = Si;
