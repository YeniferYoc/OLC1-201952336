"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Error_det_1 = require("./Error_det");
class Declaracion extends instruccion_1.Instruccion {
    constructor(identificadores, valor, parse, tipo, linea, columna) {
        super(linea, columna);
        this.identificadores = identificadores;
        this.valor = valor;
        this.parse = parse;
        this.tipo = tipo;
    }
    ejecutar(tabla) {
        if (this.valor == null) {
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
            if (this.parse == "0") {
                const ex = this.valor.ejecutar(tabla);
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
            }
        }
    }
    ast() {
        /* const s = Singleton.getInstance()
         const nombreNodo = `node_${this.line}_${this.column}_`
         s.add_ast(`
         ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion const"];
         ${nombreNodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
         ${nombreNodo}2[label="\\<Tipo\\>\\n${this.tipo}"];
         ${nombreNodo}->${nombreNodo}1
         ${nombreNodo}->${nombreNodo}2
         ${nombreNodo}->${this.value.ast()}`)*/
    }
}
exports.Declaracion = Declaracion;
