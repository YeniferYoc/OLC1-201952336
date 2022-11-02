"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_num = exports.Vector = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
class Vector extends instruccion_1.Instruccion {
    constructor(id, arrayExpresiones, tipo, contenido, tamaño, //EL OBJETO que guarda los elementos del array
    linea, columna) {
        super(linea, columna);
        this.id = id;
        this.arrayExpresiones = arrayExpresiones;
        this.tipo = tipo;
        this.contenido = contenido;
        this.tamaño = tamaño;
        this.tam = -1;
    }
    ejecutar(tabla) {
        let tama = this.tamaño.ejecutar(tabla);
        if (tama.value <= 0) {
            this.arrayExpresiones.forEach(element => {
                const expre = element.ejecutar(tabla);
                if (expre.type != get_num(this.tipo.toLowerCase()))
                    throw new Error_det_1.Error_det("Semantico", `Tipo no valido, el contenido de este array tiene que ser tipo [${this.tipo}] `, this.linea, this.columna);
                this.contenido.push(expre.value);
            });
            if (!tabla.guardar_arreglo(this.id, this))
                throw new Error_det_1.Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna);
            this.tam = this.arrayExpresiones.length;
        }
        else {
            if (!tabla.guardar_arreglo(this.id, this))
                throw new Error_det_1.Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna);
            this.tam = tama.value;
        }
    }
    ast() {
        /* const s = Singleton.getInstance()
         const name_node = `node_${this.line}_${this.column}_`
         s.add_ast(`
         ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
         ${name_node}1[label="\\<Nombre\\>\\n{${this.id}}"];
         ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
         ${name_node}3[label="\\<Contenido\\>"];
         ${name_node}->${name_node}1;
         ${name_node}->${name_node}2;
         ${name_node}->${name_node}3;
         `)
         this.arrayExpresiones.forEach(element => {
             s.add_ast(`
             ${name_node}3->${element.ast()}
             `)
         })*/
    }
}
exports.Vector = Vector;
/**
 * Retorna un numero segun el tipo
 * @param id
 * @returns
 */
function get_num(id) {
    switch (id) {
        case "int":
            return 0;
        case "double":
            return 1;
        case "string":
            return 2;
        case "char":
            return 3;
        case "boolean":
            return 4;
        default:
            return 0;
    }
}
exports.get_num = get_num;
