"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignar_arreglo = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
const Vector_1 = require("./Vector");
let contador = 0;
class Asignar_arreglo extends instruccion_1.Instruccion {
    constructor(nombre, indice, asig, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.indice = indice;
        this.asig = asig;
    }
    ejecutar(tabla) {
        let objeto = tabla.get_array(this.nombre);
        if (objeto == undefined)
            throw new Error_det_1.Error_det("Semantico", `Este array '${this.nombre}' no existe`, this.linea, this.columna);
        var array = objeto.contenido;
        //Es una asignacion a una posicion en especifico
        const expre_index = this.indice.ejecutar(tabla);
        const expre_asig = this.asig.ejecutar(tabla);
        if (expre_index.type != Ret_1.Type.INT)
            throw new Error_det_1.Error_det("Semantico", `El tipo de dato del index no es valido`, this.linea, this.columna);
        if (expre_asig.type != (0, Vector_1.get_num)(objeto.tipo))
            throw new Error_det_1.Error_det("Semantico", `La asignacion es de tipo [${(0, Ret_1.get)(expre_asig.type)}] pero el array tiene que ser tipo [${objeto.tipo}]`, this.linea, this.columna);
        array[expre_index.value] = expre_asig.value;
        tabla.update_array(this.nombre, array);
    }
    ast() {
        const s = Union_1.Union.getInstance();
        let dot = "";
        //contador += 1;
        //esta en length
        dot += "nodo" + (contador) + "_as_arr;\n";
        dot += "nodo" + (contador) + "_as_arr" + " [ label =\"ASIGNAR ARRAY\"];\n";
        dot += "nodo" + (contador) + "_id_arr" + " [ label =\"" + this.nombre.toString() + "\"];\n";
        dot += "nodo" + (contador) + "_as_arr" + " ->" + "nodo" + (contador) + "_id_arr" + "\n";
        dot += "nodo" + (contador) + "_as_arr" + " ->" + this.indice.ast() + "\n";
        dot += "nodo" + (contador) + "_as_arr" + " ->" + (this.asig.ast()) + "\n";
        contador++;
        s.add_ast(dot);
        return dot;
    }
}
exports.Asignar_arreglo = Asignar_arreglo;
