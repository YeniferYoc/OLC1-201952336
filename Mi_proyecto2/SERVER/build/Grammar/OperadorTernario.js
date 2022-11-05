"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperadorTernario = void 0;
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
let contador = 0;
class OperadorTernario extends Expresion_1.Expresion {
    constructor(condicion, valor1, valor2, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    ejecutar(tabla) {
        const condition = this.condicion.ejecutar(tabla);
        let resultado;
        if (condition.type != Ret_1.Type.BOOLEAN)
            throw new Error_det_1.Error_det("Semantico", `La condicion de la instruccion ternaria tiene que ser tipo [BOOLEAN] y se reconocio el tipo [${(0, Ret_1.get)(condition.type)}}]]`, this.linea, this.columna);
        if (condition.value)
            this.valor1.ejecutar(tabla);
        else
            this.valor2.ejecutar(tabla);
        resultado = resultado = { value: ("error de operacion"), type: Ret_1.Type.STRING };
        return resultado;
    }
    ast() {
        const s = Union_1.Union.getInstance();
        let dot = "";
        //contador += 1;
        dot += "nodo" + (contador) + "_ter;\n";
        dot += "nodo" + (contador) + "_ter" + " [ label =\"TERNARIO\"];\n";
        dot += "nodo" + (contador) + "_ter" + " ->" + (this.condicion.ast()) + "\n";
        dot += "nodo" + (contador) + "_ter" + " ->" + "nodo" + (contador) + "_v" + "\n";
        dot += "nodo" + (contador) + "_v" + " [ label =\"VERDADERO\"];\n";
        dot += "nodo" + (contador) + "_v" + " ->" + (this.valor1.ast()) + "\n";
        dot += "nodo" + (contador) + "_ter" + " ->" + "nodo" + (contador) + "_f" + "\n";
        dot += "nodo" + (contador) + "_f" + " [ label =\"FALSO\"];\n";
        dot += "nodo" + (contador) + "_f" + " ->" + (this.valor2.ast()) + "\n";
        console.log(dot);
        contador++;
        return dot;
    }
}
exports.OperadorTernario = OperadorTernario;
