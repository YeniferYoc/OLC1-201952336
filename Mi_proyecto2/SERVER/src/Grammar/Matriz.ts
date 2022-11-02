import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Tabla_s } from "./Tabla_s";

export class Matriz extends Instruccion {

    public filass: number
    public colunas: number

    constructor(
        
        public id: string,
        public arrayExpresiones: Array<Array<Expresion>>,
        public tipo: string,
        public contenido: Array<Array<any>>, 
        public filas:Expresion,  //EL OBJETO que guarda los elementos del array
        public cols:Expresion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
        this.filass = -1
        this.colunas = -1

    }
    public ejecutar(tabla: Tabla_s) {
        /*let fil = this.filas.ejecutar(tabla);
        let col = this.cols.ejecutar(tabla);
        if(fil.value <= 0 && col.value <= 0){
            let i = 0
            let j = 0
            this.arrayExpresiones.forEach(element => {
                const expre = element.ejecutar(tabla);
                if (expre.type != get_num(this.tipo.toLowerCase())) throw new Error_det("Semantico", `Tipo no valido, el contenido de este array tiene que ser tipo [${this.tipo}] `, this.linea, this.columna)
                if(i )
                i++
                j++
            })
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = this.arrayExpresiones.length
        }else{
            if (!tabla.guardar_arreglo(this.id, this)) throw new Error_det("Semantico", `Este nombre {${this.id}} ya existe en este ambito`, this.linea, this.columna)
            this.tam = tama.value
            
        }*/
        
    }

    public ast() {
       /* const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
        ${name_node}1[label="\\<Nombre\\>\\n{${this.id}}"];
        ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
        ${name_node}3[label="\\<Contenido\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        ${name_node}->${name_node}3;
        `)
        this.arrayExpresiones.forEach(element => {
            s.add_ast(`
            ${name_node}3->${element.ast()}
            `)
        })*/
    }

}

/**
 * Retorna un numero segun el tipo
 * @param id 
 * @returns 
 */
export function get_num(id: string): number {
    switch (id) {
        case "int":
            return 0
        case "double":
            return 1
        case "string":
            return 2
        case "char":
            return 3
        case "boolean":
            return 4
        default:
            return 0
    }
}