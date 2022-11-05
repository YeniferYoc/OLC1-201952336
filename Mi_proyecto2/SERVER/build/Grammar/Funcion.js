"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Union_1 = require("./Union");
let contador = 0;
class Funcion extends instruccion_1.Instruccion {
    constructor(name, bloque, parametros, tipo, retorno, linea, columna) {
        super(linea, columna);
        this.name = name;
        this.bloque = bloque;
        this.parametros = parametros;
        this.tipo = tipo;
        this.retorno = retorno;
    }
    ejecutar(tabla) {
        let c = tabla.Repetido(this.name);
        if (c)
            throw new Error_det_1.Error_det("Semantico", `La funcion o metodo que se quiere guardar ya tiene el nombre '${this.name}' registrado como funcion, variable o array `, this.linea, this.columna);
        //revisar que el nombre de los parametros no se repitan, para eso los metere todos los nombres de los parametros en un array
        let array_parametro = [];
        this.parametros.forEach(x => {
            let tmp = x.split(",");
            array_parametro.push(tmp[0]); //almaceno el nombre del parametro
        });
        var i = 0;
        array_parametro.forEach(x => {
            if (i != array_parametro.indexOf(x) //que no sea el mismo, porque ira a buscar el nombre a todo el array
                && array_parametro.indexOf(x) >= 0) {
                throw new Error_det_1.Error_det("Semantico", `La funcion  '${this.name}' tiene un parametro repetido llamado '${x}'`, this.linea, this.columna);
            }
            i++;
        });
        //todo esta listo para guardarla en la tabla de simbolos
        tabla.guardar_funcion(this.name, this);
    }
    ast() {
        const s = Union_1.Union.getInstance();
        let dot = "";
        let mi_ = contador;
        dot += "nodo" + (mi_) + "_FU;";
        dot += "nodo" + (mi_) + "_FU" + " [ label =\"FUNCION " + this.name.toString() + "\"];\n";
        let ides = false;
        let declaracion = contador;
        if (this.parametros != null) {
            // console.log("no es null")
            this.parametros.forEach(id => {
                declaracion = contador;
                if (ides == false) {
                    let cont = contador;
                    for (let i = 0; i < this.parametros.length; i++) {
                        dot += "nodo" + (cont) + "_par";
                        ides = true;
                        cont++;
                        //console.log(dot)
                        //console.log(this.identificadores.length)
                        if (i != this.parametros.length - 1) {
                            dot += ",";
                        }
                    }
                    //console.log(dot)
                    dot += ";";
                }
                else {
                }
                // console.log(this.tipo+" tipo")
                dot += "nodo" + (declaracion) + "_par" + " [ label =\"PARAMETRO " + this.tipo.toString() + "\"];\n";
                dot += "nodo" + (mi_) + "_FU -> " + "nodo" + (declaracion) + "_par;";
                dot += "nodo" + (declaracion + 1) + "_par_id" + " [ label =\"" + id.toString() + "\"];\n";
                dot += "nodo" + (declaracion) + "_par" + " ->nodo" + (declaracion + 1) + "_par_id;";
                //dot+="nodo"+declaracion+"_de"+" ->"+this..ast();
                //console.log(dot)
                //console.log("fin dot decla")
                contador++;
            });
        }
        else {
            //console.log("i es null")
        }
        dot += "nodo" + (mi_) + "_tipo_fu" + " [ label =\"TIPO: " + this.tipo.toString() + "\"];\n";
        dot += "nodo" + mi_ + "_FU" + " ->" + "nodo" + (mi_) + "_tipo_fu;";
        dot += "nodo" + (mi_) + "_FU" + " ->";
        if (this.bloque != null) {
            dot += this.bloque.ast();
        }
        else {
            dot += "nodo" + mi_ + "_FU" + " ->" + "nodo" + mi_ + "_null_FU;";
            dot += "nodo" + (mi_) + "_null_FU" + " [ label =\"NULL " + "\"];\n";
            contador++;
        }
        contador++;
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        s.add_ast(dot);
        return dot;
    }
}
exports.Funcion = Funcion;
