import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Retorno, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";

export class Acceso_arr extends Expresion {
    constructor(
        public id: string,
        public condicionPop: boolean,
        public condicionAsignacion: boolean,
        public expresion: Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna);
    }
    public ejecutar(tabla: Tabla_s): Retorno {

        let result: Retorno
        var objeto = tabla.get_array(this.id)
        if (objeto == undefined) {
            throw new Error_det("Semantico", `Este array '${this.id}' no existe `, this.linea, this.columna)
        }
        //return { type: 0, value: 0 }


        var array = objeto.contenido as Array<any>


        if (this.condicionAsignacion) {
            //...= ID . [ Expre ]
            const expresion = this.expresion.ejecutar(tabla)
            if (expresion.type != Type.INT) throw new Error_det("Semantico", `El tipo de dato del index no valido`, this.linea, this.columna)

            if (objeto.tipo.toLowerCase() == "string") result = { value: array[expresion.value], type: Type.STRING }
            else if (objeto.tipo.toLowerCase() == "int") result = { value: array[expresion.value], type: Type.INT }
            else if (objeto.tipo.toLowerCase() == "double") result = { value: array[expresion.value], type: Type.DOUBLE }
            else if (objeto.tipo == "char") result = { value: array[expresion.value], type: Type.CHAR }
            else result = { value: array[expresion.value], type: Type.BOOLEAN }
            return result
        }


        else {
            //length
            result = { value: array.length, type: Type.INT }
        }

        return result
    }
    public ast() {/*
        const name_nodo = `node_${this.linea}_${this.column}_`
        
        if(this.condicionAsignacion){
            return `
            ${name_nodo};
            ${name_nodo}[label="${this.id}\\n<\\array\\> "];
            ${name_nodo}
            ${name_nodo}->${this.expresion.ast()}
            `
        }
        if(this.condicionPop){
            return`
            ${name_nodo};
            ${name_nodo}[label="${this.id}\\n<\\array pop\\> "];
            `
        }else{
            return `
            ${name_nodo};
            ${name_nodo}[label="${this.id}\\n<\\array length\\> "];
            `

        }*/return ""
    }

}