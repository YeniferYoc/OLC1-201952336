"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrucciones = void 0;
const Funcion_1 = require("./Funcion");
const instruccion_1 = require("./instruccion");
const Tabla_s_1 = require("./Tabla_s");
class Instrucciones extends instruccion_1.Instruccion {
    constructor(instrucciones, linea, columna) {
        super(linea, columna);
        this.instrucciones = instrucciones;
    }
    ejecutar(tabla) {
        const newEnv = new Tabla_s_1.Tabla_s(tabla);
        //recorrer primero las instrucciones buscando funciones
        for (const x of this.instrucciones) {
            if (x instanceof Funcion_1.Funcion) {
                x.ejecutar(newEnv);
            }
        }
        //recorrer las instrucciones restantes
        for (const x of this.instrucciones) {
            if (x instanceof Funcion_1.Funcion) { }
            else if (x.toString() != ";") {
                const instruccion = x.ejecutar(newEnv);
            }
        }
    }
    ast() {
    }
}
exports.Instrucciones = Instrucciones;
