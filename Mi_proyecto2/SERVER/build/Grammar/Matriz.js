"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_num = exports.Matriz = void 0;
const instruccion_1 = require("./instruccion");
class Matriz extends instruccion_1.Instruccion {
    constructor(id, arrayExpresiones, tipo, contenido, filas, //EL OBJETO que guarda los elementos del array
    cols, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.arrayExpresiones = arrayExpresiones;
        this.tipo = tipo;
        this.contenido = contenido;
        this.filas = filas;
        this.cols = cols;
        this.filass = -1;
        this.colunas = -1;
    }
    ejecutar(tabla) {
        /*let fil = this.filas.ejecutar(tabla);
        let col = this.cols.ejecutar(tabla);
        if(fil.value <= 0 && col.value <= 0){
            let i = 0
            let j = 0
            this.arrayExpresiones.forEach(element => {
                const expre = element.ejecutar(tabla);
                if (expre.type != get_num(this.tipo.toLowerCase())) throw new Error_det("Semantico", `Tipo no valido, el contenido de este array tiene que ser tipo [${this.tipo}] `, this.linea, this.columna)
                if(i )
                i++
                j++
            })
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = this.arrayExpresiones.length
        }else{
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = tama.value
            
        }*/
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
exports.Matriz = Matriz;
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
