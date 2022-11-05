"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Para = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Tabla_s_1 = require("./Tabla_s");
let contador = 0;
class Para extends instruccion_1.Instruccion {
    constructor(desde, hasta, iterador, instr, linea, columna) {
        super(linea, columna);
        this.desde = desde;
        this.hasta = hasta;
        this.iterador = iterador;
        this.instr = instr;
    }
    ejecutar(tabla) {
        //crear un nuevo entorno para ejecutar solo la variable del for 
        const tabla_nueva = new Tabla_s_1.Tabla_s(tabla);
        //ejecuta la declacion o podria ser una asignacion
        this.desde.ejecutar(tabla_nueva);
        let condicion = this.hasta.ejecutar(tabla_nueva);
        //verificar que la expresion sea de tipo boolean
        if (condicion.type != Ret_1.Type.BOOLEAN)
            throw new Error_det_1.Error_det("Semantico", `Error en el tipo de operacion, se recibio un tipo [${(0, Ret_1.get)(condicion.type)}] en la expresion`, this.linea, this.columna);
        while (condicion.value) {
            this.instr.ejecutar(tabla_nueva);
            this.iterador.ejecutar(tabla_nueva);
            //ejecutar la condicion otra vez para saber si seguir o salir 
            condicion = this.hasta.ejecutar(tabla_nueva);
        }
    }
    ast() {
        let dot = "";
        console.log("entro for777777777777777777777777777777777777777777777");
        let for_ = contador;
        dot += "nodo" + (for_) + "_for;\n";
        dot += "nodo" + (for_) + "_for" + " [ label =\"FOR " + "\"];\n";
        dot += "nodo" + (for_) + "_cfor" + " [ label =\"DECLARACION FOR " + "\"];\n";
        dot += "nodo" + for_ + "_for" + " ->" + "nodo" + (for_) + "_cfor;";
        dot += "nodo" + (for_) + "_cfor" + " ->" + this.desde.ast();
        //console.log(dot)
        //dot+="nodo"+(for_)+"_cfor"+" ->"+desde.CodigoDot();
        dot += "nodo" + (for_) + "_cfor" + " ->" + this.hasta.ast();
        //console.log(dot)
        dot += "nodo" + (for_) + "_cfor" + " ->" + this.iterador.ast();
        //console.log(dot)
        dot += "nodo" + (for_) + "_for" + " ->";
        if (this.instr != null) {
            dot += this.instr.ast();
            console.log(dot);
        }
        else {
            dot += "nodo" + for_ + "_for" + " ->" + "nodo" + for_ + "_null_for;";
            dot += "nodo" + (for_) + "_null_for" + " [ label =\"NULL " + "\"];\n";
            contador++;
        }
        contador++;
        console.log("jdsjddddd ddddddakjdk");
        console.log(dot);
        return dot;
    }
}
exports.Para = Para;
