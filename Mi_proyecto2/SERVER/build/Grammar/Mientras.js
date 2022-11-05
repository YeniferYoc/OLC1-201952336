"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mientras = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
let contador = 0;
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
        const s = Union_1.Union.getInstance();
        let dot = "";
        let mi_ = contador;
        dot += "nodo" + (mi_) + "_mi;";
        dot += "nodo" + (mi_) + "_mi" + " [ label =\"WHILE " + "\"];\n";
        dot += "nodo" + mi_ + "_mi" + " ->" + this.condicion.ast();
        dot += "nodo" + (mi_) + "_mi" + " ->";
        if (this.instru != null) {
            dot += this.instru.ast();
        }
        else {
            dot += "nodo" + mi_ + "_mi" + " ->" + "nodo" + mi_ + "_null_mi;";
            dot += "nodo" + (mi_) + "_null_mi" + " [ label =\"NULL " + "\"];\n";
            contador++;
        }
        contador++;
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        s.add_ast(dot);
        return dot;
    }
}
exports.Mientras = Mientras;
