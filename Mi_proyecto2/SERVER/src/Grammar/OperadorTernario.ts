import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { get, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";

export class OperadorTernario extends Instruccion {

    constructor(
        private condicion: Expresion,
        private valor1: Instruccion,
        private valor2: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
        const condition = this.condicion.ejecutar(tabla);

        if (condition.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion de la instruccion ternaria tiene que ser tipo [BOOLEAN] y se reconocio el tipo [${get(condition.type)}}]]`, this.linea, this.columna)

        if (condition.value) this.valor1.ejecutar(tabla)
        else this.valor2.ejecutar(tabla)

    }

    public ast() {
        /*const s= Singleton.getInstance()
        const name_nodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_nodo} [label="\\<Instruccion\\>\\n Operador ternario"];
        ${name_nodo}1[label="\\<Instruccion verdadera\\>"];
        ${name_nodo}2[label="\\<Instruccion falsa\\>"];
        ${name_nodo}->${name_nodo}1;
        ${name_nodo}->${name_nodo}2;
        ${name_nodo}->${this.condicion.ast()}
        ${name_nodo}1->node_${this.valor1.line}_${this.valor1.column}_;
        ${name_nodo}2->node_${this.valor2.line}_${this.valor2.column}_;
        `)
        this.valor1.ast();
        this.valor2.ast();*/
    }
}