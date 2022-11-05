"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_num = exports.Vector = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Union_1 = require("./Union");
let contador = 0;
class Vector extends instruccion_1.Instruccion {
    constructor(id, arrayExpresiones, tipo, contenido, cast, tamaño, //EL OBJETO que guarda los elementos del array
    linea, columna) {
        super(linea, columna);
        this.id = id;
        this.arrayExpresiones = arrayExpresiones;
        this.tipo = tipo;
        this.contenido = contenido;
        this.cast = cast;
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
        //console.log("entro ast declara  cion ")
        const u = Union_1.Union.getInstance();
        // TODO Auto-generated method stub
        //System.out.println("entro");
        let dot = "";
        let declaracion = contador;
        let ides = false;
        dot += "nodo" + (declaracion) + "_vec;";
        dot += "nodo" + (declaracion) + "_vec" + " [ label =\"VECTOR " + this.tipo.toString() + "\"];\n";
        dot += "nodo" + (declaracion) + "_vec_id" + " [ label =\"" + this.id.toString() + "\"];\n";
        dot += "nodo" + (declaracion) + "_vec" + " ->nodo" + (declaracion) + "_vec_id;";
        if (this.arrayExpresiones == null && this.cast == null) {
            dot += "nodo" + (declaracion) + "_vec" + " ->" + this.tamaño.ast();
        }
        else if (this.arrayExpresiones == null && this.cast != null) {
            console.log("aeisjejk");
            dot += "nodo" + (declaracion) + "_vec" + " ->" + this.cast.ast();
            dot += (this.tamaño.ast()) + "\n";
            console.log(dot);
        }
        else {
            this.arrayExpresiones.forEach(element => {
                dot += "nodo" + (declaracion) + "_vec" + " ->" + element.ast();
            });
        }
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        contador++;
        //console.log(dot)
        u.add_ast(dot);
        return dot;
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
