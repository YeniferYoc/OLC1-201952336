import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"

export class LLAMADA extends Instruccion {

    constructor(
        private id: string,
        private expresiones: Array<Expresion>,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
/*
        const func = tabla.get_funcion(this.id)
        if (func == null) throw new Error_det("Semantico", `No existe '${this.id}' dentro de las funciones`, this.linea, this.columna)

        //verificar que el numero de parametros ingresados sea el mismo numero de parametros en la funcion almacenada
        if (this.expresiones.length != func.parametros.length) throw new Error_det("Semantico", `No enconte la funcion con nombre '${this.id}' con todos estos parametros`, this.linea, this.columna)

        //ejecuto cada uno de las expresiones que vienen como parametros y los almaceno los tipos en un array
        let array: number[] = []
        this.expresiones.forEach(x => {
            const expre = x.ejecutar(tabla)
            array.push(expre.type)
        })

        //recorre cada uno de los parametros de la funcion y verificar que sean del mismo tipo
        for (let i = 0; i < func.parametros.length; i++) {
            const element = func.parametros[i].split(",")[1]
            if (
                element == "number" && array[i] == Type.NUMBER ||
                element == "string" && array[i] == Type.STRING ||
                element == "boolean" && array[i] == Type.BOOLEAN
            ) {
                //significa que son del mismo tipo
            } else throw new error("Semantico", `Error de parametros, no se esperaba un tipo [${get(array[i])}] en la posicion ${i + 1} de los parametros de la funcion`, this.line, this.column)
        }

        //en este punto, la funcion esta lista para invocar la funcion
        const newEnv = new Environment(env)
        let y = 0
        this.expresiones.forEach(element => {
            const x = element.execute(env)
            newEnv.guardar_variable(func.parametros[y].split(",")[0], x.value, x.type, true) //guardar cada uno de los parametros en la tabla de simbolos
            y++
        })

        const s= Singleton.getInstance()
        s.add_pila(this)

        //invocar la funcion
        func.bloque.execute(newEnv)*/

    }

    public ast() {/*
        const s= Singleton.getInstance()
        const nombre_nodo=`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo} [label="\\<Instruccion\\>\\nLlamada funcion"];
        ${nombre_nodo}1 [label="{${this.id}}"];
        ${nombre_nodo}2 [label="<\\Parametros\\>"];
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->${nombre_nodo}1;
        `)
        this.expresiones.forEach(element => {
            s.add_ast(`
            ${nombre_nodo}2->${element.ast()}
            `)
        })*/
    }
}