import { Simbolo } from "./simbolo"
import { Type } from "./Ret"
import { Vector } from "./Vector";
import { Funcion } from "./Funcion";
import { Union } from "./Union";
import { Mi_var } from "./Mi_var";

let vars : Mi_var[] = []
export class Tabla_s {

    private variables: Map<string, Simbolo>
    public funciones: Map<string, Funcion>
    public arreglos: Map<string, Vector>

    constructor(public anterior: Tabla_s | null) {
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
    public guardar_variable(nombre: string, valor: any, type: Type): boolean {

        //revisar que el nombre de la nueva variable se encuentre disponible
        if (this.Repetido(nombre)) return false

        //agrega la variable al MAP 
        this.variables.set(nombre, new Simbolo(valor, nombre, type))
        

        vars.push(new Mi_var(nombre,getTipo(type), valor));
        return true
    }

    /**
     * Metodo para actualizar una VARIABLE almacenada en la tabla de simbolos con un nombre 
     * @param nombre Nombre de la variable que se quiere actualizar
     * @param valor Valor con el que se actualizara
     */
     public clear_entorno() {
        vars = []
    }
    public actualizar_variable(nombre: string, valor: any) {

        let tab: Tabla_s | null = this;

        while (tab != null) {
            if (tab.variables.has(nombre)) {
                for (let actual of Array.from(tab.variables.entries())) {
                    if (actual[0] == nombre) {
                        actual[1].valor = valor;
                        return
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
    public obtener_variable(nombre: string): Simbolo | undefined | null {
        let tabla: Tabla_s | null = this;
        while (tabla != null) {
            if (tabla.variables.has(nombre)) return tabla.variables.get(nombre);
            tabla = tabla.anterior;
        }
        return null;
    }

    /**
     * 
     * @param nombre nombre de la variable,arreglo o funcion que se quiere declarar
     * @returns si encontro el nombre en la tabla de simbolos retorna un true
     */
    public Repetido(nombre: string): boolean {

        //revisar en los arreglos almacenados
        for (let actual of Array.from(this.arreglos.entries())) {
           if (actual[0] == nombre) return true;
        }
        //revisar en las variables almacenadas
        for (let actual of Array.from(this.variables.entries())) {
            if (actual[0] == nombre) return true;
        }
        //revisar en las funciones almacenadas
        for (let entry of Array.from(this.funciones.entries())) {
            if (entry[0] == nombre) return true;
        }
        //no encontro el nombre , osea que esta disponible para usar
        return false
    }

    /**
     * Guardar la funcion en la tabla de simbolos, literalmente se guardar la instruccion "Instfuncion"
     * @param id Nombre de la funcion con la que se guardara
     * @param funcion clase tipo "InsFunccion"
     */
    public guardar_funcion(id: string, funcion: Funcion) {
        this.funciones.set(id, funcion)
        vars.push(new Mi_var(id,funcion.tipo, funcion.parametros));
    }

    /**
     * Retorna la clase INSFUNCION para ejecutarla
     * @param id nombre de la funcion con la qu ese guardo en la tabla de simbolos
     * @returns Clase INSFUNCION
     */
    public get_funcion(id: string): Funcion | undefined | null {
        let tabla: Tabla_s | null = this
        while (tabla != null) {
            if (tabla.funciones.has(id)) return tabla.funciones.get(id)
            tabla = tabla.anterior
        }
        return tabla
    }

    /**
     * Guardar un arreglo en la tabla de simbolos
     * @param id nombre con el que se quiere guardar
     * @param tmp objeto
     * @returns boolean si se pudo guardar en la tabla de simbolos
     */
    public guardar_arreglo(id: string, tmp: Vector): boolean {

        if (this.Repetido(id)) return false
        this.arreglos.set(id, tmp)
        vars.push(new Mi_var(id,tmp.tipo, tmp.arrayExpresiones));
        return true
    }

    /**
      * Busca un array en la tabla de simbolos y la retorna
      * @param nombre Nombre del array que se esta buscando
      * @returns 
      */
    public get_array(nombre: string): Vector | undefined {
        let tabla: Tabla_s | null = this
        while (tabla != null) {
            if (tabla.arreglos.has(nombre)) return tabla.arreglos.get(nombre)
            tabla = tabla.anterior
        }
        return undefined
    }

    /**
     * Actualizar el array en la tabla de simbolos
     * @param id Nombre del array con el que se guardara en la tabla de simbolos
     * @param arreglo Objeto el cual se guardara
     */
    public update_array(id: string, arreglo: Array<any>) {
        let tabla: Tabla_s | null = this;
        while (tabla != null) {
            if (tabla.arreglos.has(id)) {
                for (let entry of Array.from(tabla.arreglos.entries())) {
                    if (entry[0] == id) {
                        entry[1].contenido = arreglo
                        return
                    }
                }
            }
            tabla = tabla.anterior;
        }
    }
    /**
     * Crear el reporte para la tabla de simbolos
     * @returns string que contiene una tabla html de los entornos en ese momento
     */
    public getEntorno(): any {
        /*var tmp = "";
        let env: Tabla_s | null = this;
        tmp += "<table border=1 style=\"width: 75%;margin: 0 auto;\" cellpadding =\"5\"><td>"
        while (env != null) {
            tmp += "<table border=1 style=\"width: 75%;margin: 0 auto;\" cellpadding =\"5\"><tr><th>Nombre</th><th>Tipo</th><th>Valor</th></tr>"
            for (let entry of Array.from(env.variables.entries())) {
                tmp += "<tr>"
                let key = entry[0];
                tmp += "<td>" + key + "</td>";
                let value = entry[1];
                tmp += "<td>" + getTipo(value.tipo) + "</td>"
                tmp += "<td>" + value.valor + "</td>"
                tmp += "</tr>"
            }
            for (let entry of Array.from(env.arreglos.entries())) {
                tmp += "<tr>"
                let key = entry[0];
                tmp += "<td>" + key + "</td>";
                let value = entry[1];
                tmp += "<td>" + value.tipo + "</td>"
                tmp += "<td>[" + value.contenido + "]</td>"
                tmp += "</tr>"
            }
            for (let entry of Array.from(env.funciones.entries())) {
                tmp += "<tr>"
                let key = entry[0];
                tmp += "<td>" + key + "</td>";
                let value = entry[1];
                tmp += "<td>" + getTipo(4) + "</td>"
                tmp += "<td>" + value.parametros + "</td>"
                tmp += "</tr>"
            }
            tmp += "</table><br>"
            env = env.anterior;
        }
        tmp += "</td></table><br>"
        return tmp;*/
        return vars;
    }


}


export function getTipo(id: number): String {
    switch (id) {
        case 0:
            return "int"
        case 1:
            return "double"
        case 2:
            return "string"
        case 3:
            return "char"
        case 4:
            return "boolean"
        default:
            return "void";
    }
}