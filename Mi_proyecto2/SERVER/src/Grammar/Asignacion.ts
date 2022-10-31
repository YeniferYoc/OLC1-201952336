import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { get, Type } from "./Ret"

export class Asignacion extends Instruccion {

    constructor(
        public identificadores: Array<string>,
        public value: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        const expresion = this.value.ejecutar(tabla)
        if(this.identificadores != null){
            this.identificadores.forEach(nombre => {
                var variable = tabla.obtener_variable(nombre)
                //validar que todo este bien antes de actualizar la variable
                if (variable == null || variable == undefined) throw new Error_det("Semantico", `Variable inexistente '${nombre}'`, this.linea, this.columna)
                
                if (variable?.tipo != expresion.type) throw new Error_det("Semantico", `Asignacion incorrecta, la variable '${nombre}' es de tipo [${get(variable?.tipo)}] y se le esta tratando de asignar un tipo [${get(expresion.type)}]`, this.linea, this.columna)

                tabla.actualizar_variable(nombre, expresion.value)
            });
        }

        

    }

    public ast() {
/*
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo}[label="\\<Instruccion\\>\\nAsignacion"];
        ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${this.value.ast()}
        `)*/

    }
}