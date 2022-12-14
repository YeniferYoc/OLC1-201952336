"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLAMADA = void 0;
const instruccion_1 = require("./instruccion");
let contador = 0;
class LLAMADA extends instruccion_1.Instruccion {
    constructor(id, expresiones, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.expresiones = expresiones;
    }
    ejecutar(tabla) {
        /*
                const func = tabla.get_funcion(this.id)
                if (func == null) throw new Error_det("Semantico", `No existe '${this.id}' dentro de las funciones`, this.linea, this.columna)
        
                //verificar que el numero de parametros ingresados sea el mismo numero de parametros en la funcion almacenada
                if (this.expresiones.length != func.parametros.length) throw new Error_det("Semantico", `No enconte la funcion con nombre '${this.id}' con todos estos parametros`, this.linea, this.columna)
        
                //ejecuto cada uno de las expresiones que vienen como parametros y los almaceno los tipos en un array
                let array: number[] = []
                this.expresiones.forEach(x => {
                    const expre = x.ejecutar(tabla)
                    array.push(expre.type)
                })
        
                //recorre cada uno de los parametros de la funcion y verificar que sean del mismo tipo
                for (let i = 0; i < func.parametros.length; i++) {
                    const element = func.parametros[i].split(",")[1]
                    if (
                        element == "number" && array[i] == Type.NUMBER ||
                        element == "string" && array[i] == Type.STRING ||
                        element == "boolean" && array[i] == Type.BOOLEAN
                    ) {
                        //significa que son del mismo tipo
                    } else throw new error("Semantico", `Error de parametros, no se esperaba un tipo [${get(array[i])}] en la posicion ${i + 1} de los parametros de la funcion`, this.line, this.column)
                }
        
                //en este punto, la funcion esta lista para invocar la funcion
                const newEnv = new Environment(env)
                let y = 0
                this.expresiones.forEach(element => {
                    const x = element.execute(env)
                    newEnv.guardar_variable(func.parametros[y].split(",")[0], x.value, x.type, true) //guardar cada uno de los parametros en la tabla de simbolos
                    y++
                })
        
                const s= Singleton.getInstance()
                s.add_pila(this)
        
                //invocar la funcion
                func.bloque.execute(newEnv)*/
    }
    ast() {
        let dot = "";
        let eje = contador;
        dot += "nodo" + (eje) + "_eje;";
        dot += "nodo" + (eje) + "_eje" + " [ label =\"LLAMADA " + "\"];\n";
        dot += "nodo" + (eje + 1) + "_id_ej" + " [ label =\"" + this.id.toString() + "\"];\n";
        dot += "nodo" + (eje) + "_eje" + " ->nodo" + (eje + 1) + "_id_ej;";
        if (this.expresiones != null) {
            dot += "nodo" + (eje) + "_param_ej" + " [ label =\"PARAMETROS\"];\n";
            dot += "nodo" + (eje) + "_eje" + " ->nodo" + (eje) + "_param_ej;";
            this.expresiones.forEach(x => {
                dot += "nodo" + eje + "_param_ej" + " ->";
                dot += x.ast();
            });
        }
        else {
            dot += "nodo" + eje + "_eje" + " ->" + "nodo" + eje + "_null_eje;";
            dot += "nodo" + (eje) + "_null_eje" + " [ label =\"NULL " + "\"];\n";
        }
        contador++;
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        return dot;
    }
}
exports.LLAMADA = LLAMADA;
