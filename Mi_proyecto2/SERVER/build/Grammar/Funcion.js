"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
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
        /*
        const s= Singleton.getInstance()
        const nombre_nodo=`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo} [label="\\<Instruccion\\>\\nFuncion"];
        ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.name}"];
        ${nombre_nodo}2[label="\\<Parametros\\>"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->node_${this.bloque.line}_${this.bloque.column}_;
        `)
        this.bloque.ast();
        
        let tmp = 5 //empiezo desde 5 porque ya esta ocupado 1 y 2
        this.parametros.forEach(x => {
            s.add_ast(`
            ${nombre_nodo}${tmp}[label="\\<Nombre,Tipo\\>\\n${x}"];
            ${nombre_nodo}2->${nombre_nodo}${tmp};
            `)
            tmp++
        })*/
    }
}
exports.Funcion = Funcion;
