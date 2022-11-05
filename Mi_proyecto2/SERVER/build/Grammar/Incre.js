"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incre = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
let contador = 0;
class Incre extends instruccion_1.Instruccion {
    constructor(tipo, id, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
    }
    ejecutar(tabla) {
        //primero traer la va variablde de la tabla de simbolos
        const variable = tabla.obtener_variable(this.id);
        //verificar que exista, que sea editable y que sea del tipo number
        if (variable == null)
            throw new Error_det_1.Error_det("Semantico", `Variable '${this.id}' no encontrada `, this.linea, this.columna);
        if (variable.tipo != Ret_1.Type.INT)
            throw new Error_det_1.Error_det("Semantico", `La variable '${this.id}' tiene que ser de tipo [NUMBER] y se detecto ${(0, Ret_1.get)(variable.tipo)}`, this.linea, this.columna);
        this.tipo == "++" ? variable.valor++ : variable.valor--;
        tabla.actualizar_variable(this.id, variable.valor);
    }
    ast() {
        let dot = "";
        //contador += 1;
        //esta en length
        dot += "nodo" + (contador) + "_incre;\n";
        if (this.tipo == "++") {
            dot += "nodo" + (contador) + "_incre" + " [ label =\"++\"];\n";
        }
        else {
            dot += "nodo" + (contador) + "_incre" + " [ label =\"--\"];\n";
        }
        dot += "nodo" + (contador) + "_id_incre" + " [ label =\"" + this.id.toString() + "\"];\n";
        dot += "nodo" + (contador) + "_incre" + " ->" + "nodo" + (contador) + "_id_incre" + "\n";
        contador++;
        return dot;
        /*
                const s = Singleton.getInstance()
                const name_node = `node_${this.line}_${this.column}_`
                const label = this.tipo == "++" ? "Incremento" : "Decremento"
        
                s.add_ast(`
                ${name_node}[label="\\<Instruccion\\>\\n${label}"];
                ${name_node}1[label="{${this.id}}"];
                ${name_node}->${name_node}1;
                `)*/
    }
}
exports.Incre = Incre;
