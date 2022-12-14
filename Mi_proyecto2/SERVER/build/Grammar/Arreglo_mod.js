"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arreglo_mod = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
const Vector_1 = require("./Vector");
let contador = 0;
class Arreglo_mod extends instruccion_1.Instruccion {
    constructor(nombre, expre, push, //push
    pop, //pop
    linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.expre = expre;
        this.push = push;
        this.pop = pop;
    }
    ejecutar(tabla) {
        //revisar que existe este array
        let objeto = tabla.get_array(this.nombre);
        if (objeto == undefined)
            throw new Error_det_1.Error_det("Semantico", `Este array '${this.nombre}' no se pudo existe`, this.linea, this.columna);
        let array = objeto.contenido;
        if (this.pop) {
            array.pop();
        }
        else {
            const tmp = this.expre.ejecutar(tabla);
            if (tmp.type != (0, Vector_1.get_num)(objeto.tipo))
                throw new Error_det_1.Error_det("Semantico", `La expresion tiene que ser del mismo tipo que el array, el array '${this.nombre}' es tipo [${objeto.tipo}] y se detecto el tipo [${(0, Ret_1.get)(tmp.type)}]`, this.linea, this.columna);
            array.push(tmp.value);
        }
        tabla.update_array(this.nombre, array);
    }
    ast() {
        const s = Union_1.Union.getInstance();
        let dot = "";
        //contador += 1;
        if (this.push) {
            //esta en length
            dot += "nodo" + (contador) + "_pus;\n";
            dot += "nodo" + (contador) + "_pus" + " [ label =\"PUSH ARRAY\"];\n";
            dot += "nodo" + (contador) + "_id_pu" + " [ label =\"" + this.nombre.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_pus" + " ->" + "nodo" + (contador) + "_id_pu" + "\n";
            dot += "nodo" + (contador) + "_pus" + " ->" + (this.expre.ast()) + "\n";
        }
        else {
            dot += "nodo" + (contador) + "_pop;\n";
            dot += "nodo" + (contador) + "_pop" + " [ label =\"POP ARRAY\"];\n";
            dot += "nodo" + (contador) + "_id_po" + " [ label =\"" + this.nombre.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_pop" + " ->" + "nodo" + (contador) + "_id_po" + "\n";
        }
        contador++;
        s.add_ast(dot);
        return dot;
        /*
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        const name = this.push ? "push" : "pop"
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\> \\n ${name}"];
        `)
        if (this.push) {
            s.add_ast(`
            ${name_node}[label="\\<Instruccion\\> \\n ${name}"];
            ${name_node}->${this.expre.ast()}
            `)
        }*/
    }
}
exports.Arreglo_mod = Arreglo_mod;
