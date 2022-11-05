"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso = void 0;
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class Acceso extends Expresion_1.Expresion {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }
    ejecutar(tabla) {
        //traer la variable
        const value = tabla.obtener_variable(this.id);
        if (value == null) {
            //verificar si es un array
            const tmp = tabla.get_array(this.id);
            if (tmp != null)
                return { value: tmp.contenido, type: Ret_1.Type.STRING };
            throw new Error_det_1.Error_det("Semantico", `Variable '${this.id}' no encontrada `, this.linea, this.columna);
        }
        return { value: value.valor, type: value.tipo };
    }
    ast() {
        let dot = "";
        contador += 1;
        dot += "nodo" + (contador) + "_identi;\n";
        dot += "nodo" + (contador) + "_identi" + " [ label =\"" + (this.id) + " \"];\n";
        contador++;
        return dot;
    }
}
exports.Acceso = Acceso;
