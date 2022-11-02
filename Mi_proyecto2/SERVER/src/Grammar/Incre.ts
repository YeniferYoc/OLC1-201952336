import { Error_det } from "./Error_det"
import { Instruccion } from "./instruccion"
import { get, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"

export class Incre extends Instruccion {

    constructor(
        private tipo: string,
        private id: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        //primero traer la va variablde de la tabla de simbolos
        const variable = tabla.obtener_variable(this.id)

        //verificar que exista, que sea editable y que sea del tipo number
        if (variable == null) throw new Error_det("Semantico", `Variable '${this.id}' no encontrada `, this.linea, this.columna)
        if (variable.tipo != Type.INT) throw new Error_det("Semantico", `La variable '${this.id}' tiene que ser de tipo [NUMBER] y se detecto ${get(variable.tipo)}`, this.linea, this.columna)

        this.tipo == "++" ? variable.valor++ : variable.valor--
        tabla.actualizar_variable(this.id, variable.valor)

    }

    public ast() {
/*
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        const label = this.tipo == "++" ? "Incremento" : "Decremento"

        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\n${label}"];
        ${name_node}1[label="{${this.id}}"];
        ${name_node}->${name_node}1;
        `)*/
    }
    
}