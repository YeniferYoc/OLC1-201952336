"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Para = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
const Tabla_s_1 = require("./Tabla_s");
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
        /*
                const s = Singleton.getInstance()
                const name_node = `node_${this.line}_${this.column}_`
                s.add_ast(`
                ${name_node}[label="\\<Instruccion\\>\\nFor"];
                ${name_node}->node_${this.declaracion.line}_${this.declaracion.column}_;
                ${name_node}->node_${this.iterador.line}_${this.iterador.column}_;
                ${name_node}->node_${this.code.line}_${this.code.column}_;
                ${name_node}->${this.condicion_seguir.ast()}
                `)
                this.declaracion.ast();
                this.iterador.ast();
                this.code.ast()*/
    }
}
exports.Para = Para;
