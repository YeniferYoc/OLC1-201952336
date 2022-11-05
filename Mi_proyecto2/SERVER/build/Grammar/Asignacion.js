"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Union_1 = require("./Union");
let contador = 0;
class Asignacion extends instruccion_1.Instruccion {
    constructor(identificadores, value, cast, linea, columna) {
        super(linea, columna);
        this.identificadores = identificadores;
        this.value = value;
        this.cast = cast;
    }
    ejecutar(tabla) {
        const expresion = this.value.ejecutar(tabla);
        if (this.identificadores != null) {
            this.identificadores.forEach(nombre => {
                var variable = tabla.obtener_variable(nombre);
                //validar que todo este bien antes de actualizar la variable
                if (variable == null || variable == undefined)
                    throw new Error_det_1.Error_det("Semantico", `Variable inexistente '${nombre}'`, this.linea, this.columna);
                if ((variable === null || variable === void 0 ? void 0 : variable.tipo) != expresion.type)
                    throw new Error_det_1.Error_det("Semantico", `Asignacion incorrecta, la variable '${nombre}' es de tipo [${(0, Ret_1.get)(variable === null || variable === void 0 ? void 0 : variable.tipo)}] y se le esta tratando de asignar un tipo [${(0, Ret_1.get)(expresion.type)}]`, this.linea, this.columna);
                tabla.actualizar_variable(nombre, expresion.value);
            });
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
                        dot += "nodo" + (cont) + "_as";
                        ides = true;
                        cont++;
                        console.log(dot);
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
                dot += "nodo" + (declaracion) + "_as" + " [ label =\"ASIGNACION \"];\n";
                dot += "nodo" + (declaracion + 1) + "_id_As" + " [ label =\"" + id.toString() + "\"];\n";
                dot += "nodo" + (declaracion) + "_as" + " ->nodo" + (declaracion + 1) + "_id_As;" + "nodo" + declaracion + "_as" + " ->";
                if (this.cast != null) {
                    dot += (this.cast.ast()) + "\n";
                    dot += (this.value.ast()) + "\n";
                }
                else {
                    dot += this.value.ast();
                }
                //dot+="nodo"+declaracion+"_as"+" ->"
                // console.log(dot)
                //console.log("fin dot decla")
                contador++;
            });
        }
        else {
            //console.log("i es null")
        }
        //dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
        contador++;
        // console.log(dot)
        u.add_ast(dot);
        return dot;
    }
}
exports.Asignacion = Asignacion;
