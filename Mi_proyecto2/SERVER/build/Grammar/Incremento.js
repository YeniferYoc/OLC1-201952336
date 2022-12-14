"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incremento = void 0;
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Incremento_op_1 = require("./Incremento_op");
const Ret_1 = require("./Ret");
let contador = 0;
class Incremento extends Expresion_1.Expresion {
    constructor(type, nombre, linea, columna) {
        super(linea, columna);
        this.type = type;
        this.nombre = nombre;
    }
    ejecutar(tabla) {
        let resultado = { value: null, type: Ret_1.Type.INT };
        const variable = tabla.obtener_variable(this.nombre);
        //validar que exista, que sea editable y que su tipo sea numero
        if (variable == null)
            throw new Error_det_1.Error_det("Semantico", `La variable '${this.nombre}' no encontrada`, this.linea, this.columna);
        if (variable.tipo != Ret_1.Type.INT)
            throw new Error_det_1.Error_det("Semantico", `La variable '${this.nombre}' tiene que ser de tipo entero para incrementar o decrementar`, this.linea, this.columna);
        switch (this.type) {
            case Incremento_op_1.Incremento_op.INCREMENTO1:
                resultado.value = variable.valor;
                variable.valor++;
                break;
            case Incremento_op_1.Incremento_op.INCREMENTO2:
                variable.valor++;
                resultado.value = variable.valor;
                break;
            case Incremento_op_1.Incremento_op.DECREMENTO1:
                resultado.value = variable.valor;
                variable.valor--;
                break;
            case Incremento_op_1.Incremento_op.DECREMENTO2:
                variable.valor--;
                resultado.value = variable.valor;
                break;
            default:
                break;
        }
        //actualiza en la tabla de simbolos 
        tabla.actualizar_variable(this.nombre, variable.valor);
        return resultado;
    }
    ast() {
        let dot = "";
        //contador += 1;
        //esta en length
        //dot+="nodo"+(contador)+"_incre;\n";
        if (this.type == Incremento_op_1.Incremento_op.DECREMENTO1) {
            dot += "nodo" + (contador) + "_id_dncre;\n";
            dot += "nodo" + (contador) + "_id_dncre" + " [ label =\"" + this.nombre.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_dncre" + " [ label =\"--\"];\n";
            dot += "nodo" + (contador) + "_id_dncre" + " ->" + "nodo" + (contador) + "_dncre" + "\n";
        }
        else if (this.type == Incremento_op_1.Incremento_op.DECREMENTO2) {
            dot += "nodo" + (contador) + "_dncre2;\n";
            dot += "nodo" + (contador) + "_dncre2" + " [ label =\"--\"];\n";
            dot += "nodo" + (contador) + "_id_dncre2" + " [ label =\"" + this.nombre.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_dncre2" + " ->" + "nodo" + (contador) + "_id_dncre2" + "\n";
        }
        else if (this.type == Incremento_op_1.Incremento_op.INCREMENTO1) {
            dot += "nodo" + (contador) + "_id_incre;\n";
            dot += "nodo" + (contador) + "_id_incre" + " [ label =\"" + this.nombre.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_incre" + " [ label =\"++\"];\n";
            dot += "nodo" + (contador) + "_id_incre" + " ->" + "nodo" + (contador) + "_incre" + "\n";
        }
        else {
            dot += "nodo" + (contador) + "_incre2;\n";
            dot += "nodo" + (contador) + "_incre2" + " [ label =\"++\"];\n";
            dot += "nodo" + (contador) + "_id_incre2" + " [ label =\"" + this.nombre.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_incre2" + " ->" + "nodo" + (contador) + "_id_incre2" + "\n";
        }
        contador++;
        return dot;
    }
}
exports.Incremento = Incremento;
