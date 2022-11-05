"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiController = void 0;
const Tabla_s_1 = require("../Grammar/Tabla_s");
const Union_1 = require("../Grammar/Union");
class ApiController {
    funcion1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("funiona comu");
            try {
                res.json({ msg: "hola mundo!" });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    leer_entrada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {entrada} = req.body.entrada;
            let entr = req.body.entrada;
            console.log(req.body.entrada);
            console.log("entor post ");
            //console.log(entr+"   ffffffffffffffffffffffffffffff");
            let errores = [];
            let codigo_dot = "";
            let entorno = [];
            let consola = "";
            try {
                const parser = require('../Grammar/Gramatica.js');
                const fs = require('fs');
                try {
                    if (true) {
                        //const entrada = fs.readFileSync('./src/entrada.txt');
                        const s = Union_1.Union.getInstance();
                        s.clear_ast();
                        s.clear_entorno();
                        s.clear_error();
                        s.clear_consola();
                        const ast = parser.parse(entr);
                        const tabla = new Tabla_s_1.Tabla_s(null);
                        tabla.clear_entorno();
                        console.log("errres ----- -------------------------------------------");
                        errores = s.get_error();
                        for (let index = 0; index < errores.length; index++) {
                            errores[index].obtener_error();
                        }
                        //s.add_ast(`nodeOriginal[label="<\\Lista_Instrucciones\\>"];`)
                        let dot_ = "";
                        dot_ += "digraph G {node[shape=box, style=filled, color=\"#e43c5c\"]; edge[color=\"#e43c5c\"];rankdir=UD \n";
                        dot_ += "raiz" + " [ label =\"INICIO\"];\n";
                        //s.add_ast(dot)
                        //generar el ast primero
                        for (const instr of ast) {
                            try {
                                //s.add_ast(`raiz->`)
                                dot_ += (`raiz->`);
                                dot_ += instr.ast();
                            }
                            catch (error) {
                            }
                        }
                        dot_ += "hola\n";
                        dot_ += "}";
                        console.log(dot_);
                        codigo_dot = dot_;
                        for (const instr of ast) {
                            try {
                                //s.add_ast(`raiz->`)
                                instr.ejecutar(tabla);
                            }
                            catch (error) {
                            }
                        }
                        entorno = tabla.getEntorno();
                        console.log("+9999999999999999999999999999999999999");
                        for (let index = 0; index < entorno.length; index++) {
                            entorno[index].obtener_error();
                        }
                        console.log("+9999999999999999999999999999999999999");
                        // let cad:string =  s.get_ast();
                        consola = s.get_consola();
                        console.log(s.get_consola());
                        /* s.get_error().forEach(element => {
                          element.obtener_error();
                          
                         });*/
                        //   console.log(s.get_error());
                    }
                }
                catch (error) {
                    console.log(error);
                }
                console.log("ola");
                res.send({ msg: "hola mundo " + req.body.entrada,
                    errore: errores,
                    entorno: entorno,
                    consola: consola,
                    cod: codigo_dot
                });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    funcion3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo " + req.params.nombre });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    funcion4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo " + req.headers.nombre });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
}
exports.apiController = new ApiController();
