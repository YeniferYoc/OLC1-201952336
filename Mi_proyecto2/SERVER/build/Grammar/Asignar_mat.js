"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignar_mat = void 0;
const instruccion_1 = require("./instruccion");
class Asignar_mat extends instruccion_1.Instruccion {
    constructor(nombre, fila, col, asig, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.fila = fila;
        this.col = col;
        this.asig = asig;
    }
    ejecutar(tabla) {
        /*
                let objeto = tabla.get_array(this.nombre)
                if (objeto == undefined) throw new Error_det("Semantico", `Este array '${this.nombre}' no existe`, this.linea, this.columna)
                var array = objeto.contenido as Array<any>
        
                    //Es una asignacion a una posicion en especifico
                    const expre_index = this.indice.ejecutar(tabla)
                    const expre_asig = this.asig.ejecutar(tabla)
                    if (expre_index.type != Type.INT) throw new Error_det("Semantico", `El tipo de dato del index no es valido`, this.linea, this.columna)
                    if (expre_asig.type != get_num(objeto.tipo)) throw new Error_det("Semantico", `La asignacion es de tipo [${get(expre_asig.type)}] pero el array tiene que ser tipo [${objeto.tipo}]`, this.linea, this.columna)
                    array[expre_index.value] = expre_asig.value
        
                
                tabla.update_array(this.nombre, array)*/
    }
    ast() {
    }
}
exports.Asignar_mat = Asignar_mat;
