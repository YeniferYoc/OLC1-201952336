"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTipo = exports.Tabla_s = void 0;
const simbolo_1 = require("./simbolo");
class Tabla_s {
    constructor(anterior) {
        this.anterior = anterior;
        this.variables = new Map();
        this.funciones = new Map();
        this.arreglos = new Map();
    }
    /**
     * Metodo para guardar una VARIABLE en la tabla de simbolos
     * @param id nombre de la variable
     * @param valor valor de la variable
     * @param type tipo de dato de la variable
     * @param condicion si es editable
     * @returns boolan si se efectuo el almacenamiento de la variable
     */
    guardar_variable(nombre, valor, type) {
        //revisar que el nombre de la nueva variable se encuentre disponible
        if (this.Repetido(nombre))
            return false;
        //agrega la variable al MAP 
        this.variables.set(nombre, new simbolo_1.Simbolo(valor, nombre, type));
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
        for (let actual of Array.from(this.arreglos.entries())) {
            if (actual[0] == nombre)
                return true;
        }
        //revisar en las variables almacenadas
        for (let actual of Array.from(this.variables.entries())) {
            if (actual[0] == nombre)
                return true;
        }
        //revisar en las funciones almacenadas
        for (let entry of Array.from(this.funciones.entries())) {
            if (entry[0] == nombre)
                return true;
        }
        //no encontro el nombre , osea que esta disponible para usar
        return false;
    }
    /**
     * Guardar la funcion en la tabla de simbolos, literalmente se guardar la instruccion "Instfuncion"
     * @param id Nombre de la funcion con la que se guardara
     * @param funcion clase tipo "InsFunccion"
     */
    guardar_funcion(id, funcion) {
        this.funciones.set(id, funcion);
    }
    /**
     * Retorna la clase INSFUNCION para ejecutarla
     * @param id nombre de la funcion con la qu ese guardo en la tabla de simbolos
     * @returns Clase INSFUNCION
     */
    get_funcion(id) {
        let tabla = this;
        while (tabla != null) {
            if (tabla.funciones.has(id))
                return tabla.funciones.get(id);
            tabla = tabla.anterior;
        }
        return tabla;
    }
    /**
     * Guardar un arreglo en la tabla de simbolos
     * @param id nombre con el que se quiere guardar
     * @param tmp objeto
     * @returns boolean si se pudo guardar en la tabla de simbolos
     */
    guardar_arreglo(id, tmp) {
        if (this.Repetido(id))
            return false;
        this.arreglos.set(id, tmp);
        return true;
    }
    /**
      * Busca un array en la tabla de simbolos y la retorna
      * @param nombre Nombre del array que se esta buscando
      * @returns
      */
    get_array(nombre) {
        let tabla = this;
        while (tabla != null) {
            if (tabla.arreglos.has(nombre))
                return tabla.arreglos.get(nombre);
            tabla = tabla.anterior;
        }
        return undefined;
    }
    /**
     * Actualizar el array en la tabla de simbolos
     * @param id Nombre del array con el que se guardara en la tabla de simbolos
     * @param arreglo Objeto el cual se guardara
     */
    update_array(id, arreglo) {
        let tabla = this;
        while (tabla != null) {
            if (tabla.arreglos.has(id)) {
                for (let entry of Array.from(tabla.arreglos.entries())) {
                    if (entry[0] == id) {
                        entry[1].contenido = arreglo;
                        return;
                    }
                }
            }
            tabla = tabla.anterior;
        }
    }
}
exports.Tabla_s = Tabla_s;
function getTipo(id) {
    switch (id) {
        case 0:
            return "int";
        case 1:
            return "double";
        case 2:
            return "string";
        case 3:
            return "char";
        case 4:
            return "boolean";
        default:
            return "void";
    }
}
exports.getTipo = getTipo;
