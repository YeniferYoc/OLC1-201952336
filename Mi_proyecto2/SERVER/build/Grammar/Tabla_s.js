"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTipo = exports.Tabla_s = void 0;
const simbolo_1 = require("./simbolo");
//import { InsFuncion } from "../Instruction/InsFuncion"
//import { Arreglo } from "../Instruction/Arreglo"
class Tabla_s {
    //public funciones: Map<string, InsFuncion>
    //public arreglos: Map<string, Arreglo>
    constructor(anterior) {
        this.anterior = anterior;
        this.variables = new Map();
        //  this.funciones = new Map();
        //this.arreglos = new Map();
    }
    /**
     * Metodo para guardar una VARIABLE en la tabla de simbolos
     * @param id nombre de la variable
     * @param valor valor de la variable
     * @param type tipo de dato de la variable
     * @param condicion si es editable
     * @returns boolan si se efectuo el almacenamiento de la variable
     */
    guardar_variable(nombre, valor, type, condicion) {
        //revisar que el nombre de la nueva variable se encuentre disponible
        if (this.Repetido(nombre))
            return false;
        //agrega la variable al MAP 
        this.variables.set(nombre, new simbolo_1.Simbolo(valor, nombre, type, condicion));
        return true;
    }
    /**
     * Metodo para actualizar una VARIABLE almacenada en la tabla de simbolos con un nombre
     * @param nombre Nombre de la variable que se quiere actualizar
     * @param valor Valor con el que se actualizara
     */
    actualizar_variable(nombre, valor) {
        let tab = this;
        while (tab != null) {
            if (tab.variables.has(nombre)) {
                for (let actual of Array.from(tab.variables.entries())) {
                    if (actual[0] == nombre) {
                        actual[1].valor = valor;
                        return;
                    }
                }
            }
            tab = tab.anterior;
        }
    }
    /**
     * Metodo para retornar una VARIABLE como [Symbol]
     * @param nombre buscar el nombre de la variable en todos los entornos
     * @returns Un objeto [Symbol] que tiene la informacion de la variable
     */
    obtener_variable(nombre) {
        let tabla = this;
        while (tabla != null) {
            if (tabla.variables.has(nombre))
                return tabla.variables.get(nombre);
            tabla = tabla.anterior;
        }
        return null;
    }
    /**
     *
     * @param nombre nombre de la variable,arreglo o funcion que se quiere declarar
     * @returns si encontro el nombre en la tabla de simbolos retorna un true
     */
    Repetido(nombre) {
        //revisar en los arreglos almacenados
        //for (let actual of Array.from(this.arreglos.entries())) {
        //  if (entry[0] == nombre) return true;
        // }
        //revisar en las variables almacenadas
        for (let actual of Array.from(this.variables.entries())) {
            if (actual[0] == nombre)
                return true;
        }
        //revisar en las funciones almacenadas
        //for (let entry of Array.from(this.funciones.entries())) {
        //  if (entry[0] == nombre) return true;
        //}
        //no encontro el nombre , osea que esta disponible para usar
        return false;
    }
}
exports.Tabla_s = Tabla_s;
function getTipo(id) {
    switch (id) {
        case 0:
            return "Numero";
        case 1:
            return "String";
        case 2:
            return "Boolean";
        default:
            return "void";
    }
}
exports.getTipo = getTipo;
