import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Retorno, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"

export class Acceso extends Expresion {

    constructor(
        private id: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s): Retorno {

        //traer la variable
        const value = tabla.obtener_variable(this.id)

        if (value == null) {
            //verificar si es un array
            const tmp = tabla.get_array(this.id)
            if (tmp != null) return { value: tmp.contenido, type: Type.STRING }
            throw new Error_det("Semantico", `Variable '${this.id}' no encontrada `, this.linea, this.columna)
        }

        return { value: value.valor, type: value.tipo };
    }
    public ast() {
        
        return `
      
        `
    }
}