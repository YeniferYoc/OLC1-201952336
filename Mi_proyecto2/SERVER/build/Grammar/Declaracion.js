"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Error_det_1 = require("./Error_det");
const Union_1 = require("./Union");
let contador = 0;
class Declaracion extends instruccion_1.Instruccion {
    constructor(identificadores, tipo, valor, parse, linea, columna) {
        super(linea, columna);
        this.identificadores = identificadores;
        this.tipo = tipo;
        this.valor = valor;
        this.parse = parse;
    }
    ejecutar(tabla) {
        console.log("aqui esta en declaracion");
        if (this.valor == null) {
            console.log("dice que valor es null");
            if (Ret_1.Type.INT && this.tipo.toLowerCase() == "int") {
                if (this.identificadores != null) {
                    this.identificadores.forEach(x => {
                        const c = tabla.guardar_variable(x, null, Ret_1.Type.INT);
                        if (!c)
                            throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                    });
                }
            }
            else if (Ret_1.Type.DOUBLE && this.tipo.toLowerCase() == "double") {
                if (this.identificadores != null) {
                    this.identificadores.forEach(x => {
                        const c = tabla.guardar_variable(x, null, Ret_1.Type.DOUBLE);
                        if (!c)
                            throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                    });
                }
            }
            else if (Ret_1.Type.CHAR && this.tipo.toLowerCase() == "char") {
                if (this.identificadores != null) {
                    this.identificadores.forEach(x => {
                        const c = tabla.guardar_variable(x, null, Ret_1.Type.CHAR);
                        if (!c)
                            throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                    });
                }
            }
            else if (Ret_1.Type.STRING && this.tipo.toLowerCase() == "string") {
                if (this.identificadores != null) {
                    this.identificadores.forEach(x => {
                        const c = tabla.guardar_variable(x, null, Ret_1.Type.STRING);
                        if (!c)
                            throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                    });
                }
            }
            else if (Ret_1.Type.BOOLEAN && this.tipo.toLowerCase() == "boolean") {
                if (this.identificadores != null) {
                    this.identificadores.forEach(x => {
                        const c = tabla.guardar_variable(x, null, Ret_1.Type.BOOLEAN);
                        if (!c)
                            throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                    });
                }
            }
        }
        else {
            console.log("entro primir else");
            if (this.parse == null) {
                console.log("entro ejecutar declaracion");
                const ex = this.valor.ejecutar(tabla);
                console.log("entro ejecutar declaracion");
                //cuando la declaracion si tiene un tipo de dato definido
                if (ex.type == Ret_1.Type.INT && this.tipo.toLowerCase() == "int" ||
                    ex.type == Ret_1.Type.DOUBLE && this.tipo.toLowerCase() == "double" ||
                    ex.type == Ret_1.Type.CHAR && this.tipo.toLowerCase() == "char" ||
                    ex.type == Ret_1.Type.STRING && this.tipo.toLowerCase() == "string" ||
                    ex.type == Ret_1.Type.BOOLEAN && this.tipo.toLowerCase() == "boolean") {
                    if (this.identificadores != null) {
                        this.identificadores.forEach(x => {
                            const c = tabla.guardar_variable(x, ex.value, ex.type);
                            if (!c)
                                throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                        });
                    }
                }
                else
                    throw new Error_det_1.Error_det("Semantico", `El tipo de dato de la expresion [${(0, Ret_1.get)(ex.type)}] no es compatible con [${this.tipo}]`, this.linea, this.columna);
            }
            else {
                console.log("entro segundo else");
                const ex = this.valor.ejecutar(tabla);
                console.log(ex.value);
                console.log("entro ejecutar declaracion");
                //cuando la declaracion si tiene un tipo de dato definido
                if (this.identificadores != null) {
                    this.identificadores.forEach(x => {
                        const c = tabla.guardar_variable(x, ex.value, ex.type);
                        if (!c)
                            throw new Error_det_1.Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna);
                    });
                }
            }
        }
    }
    ast() {
        //console.log("entro ast declaracion ")
        const u = Union_1.Union.getInstance();
        // TODO Auto-generated method stub
        //System.out.println("entro");
        let dot = "";
        let declaracion = contador;
        let ides = false;
        if (this.identificadores != null) {
            // console.log("no es null")
            this.identificadores.forEach(id => {
                declaracion = contador;
                if (ides == false) {
                    let cont = contador;
                    for (let i = 0; i < this.identificadores.length; i++) {
                        dot += "nodo" + (cont) + "_de";
                        ides = true;
                        cont++;
                        //console.log(dot)
                        //console.log(this.identificadores.length)
                        if (i != this.identificadores.length - 1) {
                            dot += ",";
                        }
                    }
                    //console.log(dot)
                    dot += ";";
                }
                else {
                }
                // console.log(this.tipo+" tipo")
                dot += "nodo" + (declaracion) + "_de" + " [ label =\"DECLARACION " + this.tipo.toString() + "\"];\n";
                dot += "nodo" + (declaracion + 1) + "_id" + " [ label =\"" + id.toString() + "\"];\n";
                dot += "nodo" + (declaracion) + "_de" + " ->nodo" + (declaracion + 1) + "_id;";
                if (this.parse == null) {
                    if (this.valor == null) {
                    }
                    else {
                        dot += "nodo" + declaracion + "_de" + " ->" + this.valor.ast();
                    }
                }
                else {
                    dot += "nodo" + declaracion + "_de" + " ->" + this.parse.ast();
                    dot += this.valor.ast();
                }
                //console.log(dot)
                //   console.log("fin dot decla")
                contador++;
            });
        }
        else {
            //console.log("i es null")
        }
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        contador++;
        //console.log(dot)
        u.add_ast(dot);
        return dot;
    }
}
exports.Declaracion = Declaracion;
