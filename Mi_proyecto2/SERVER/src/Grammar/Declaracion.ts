import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { get, Type } from "./Ret"
import { Error_det } from "./Error_det"

export class Declaracion extends Instruccion {

    constructor(
        public identificadores: Array<string>,
        public valor: Expresion, 
        public parse: string,
        public tipo: string, 
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
        if(this.valor == null){     
                                                                             
            if (Type.INT && this.tipo.toLowerCase() == "int"){
                if(this.identificadores != null){
                    this.identificadores.forEach(x => {
                        
                        const c = tabla.guardar_variable(x, null,Type.INT )
                        if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
           
                    });
                }             
            }
            else if (Type.DOUBLE && this.tipo.toLowerCase() == "double"){
                if(this.identificadores != null){
                    this.identificadores.forEach(x => {
                        
                        const c = tabla.guardar_variable(x, null,Type.DOUBLE )
                        if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
           
                    });
                }             
            }
            else if (Type.CHAR && this.tipo.toLowerCase() == "char"){
                if(this.identificadores != null){
                    this.identificadores.forEach(x => {
                        
                        const c = tabla.guardar_variable(x, null,Type.CHAR )
                        if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
           
                    });
                }             
            }
            else if (Type.STRING && this.tipo.toLowerCase() == "string"){
                if(this.identificadores != null){
                    this.identificadores.forEach(x => {
                        
                        const c = tabla.guardar_variable(x, null,Type.STRING )
                        if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
           
                    });
                }             
            }
            else if (Type.BOOLEAN && this.tipo.toLowerCase() == "boolean"){
                if(this.identificadores != null){
                    this.identificadores.forEach(x => {
                        
                        const c = tabla.guardar_variable(x, null,Type.BOOLEAN )
                        if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
           
                    });
                }             
            }
                
                
           
        }else{
            if(this.parse == "0"){
                const ex = this.valor.ejecutar(tabla)
                //cuando la declaracion si tiene un tipo de dato definido
                if (ex.type == Type.INT && this.tipo.toLowerCase() == "int" ||
                    ex.type == Type.DOUBLE && this.tipo.toLowerCase() == "double" ||
                    ex.type == Type.CHAR && this.tipo.toLowerCase() == "char" ||
                    ex.type == Type.STRING && this.tipo.toLowerCase() == "string" ||
                    ex.type == Type.BOOLEAN && this.tipo.toLowerCase()  == "boolean"
                ) {
                    if(this.identificadores != null){
                        this.identificadores.forEach(x => {
                            const c = tabla.guardar_variable(x, ex.value, ex.type)
                            if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
               
                        });
                    }
                    
                } else throw new Error_det("Semantico", `El tipo de dato de la expresion [${get(ex.type)}] no es compatible con [${this.tipo}]`, this.linea, this.columna)
    
            }else{

            }
           
        }
        
        
    }

    public ast() {
       /* const s = Singleton.getInstance()
        const nombreNodo = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion const"];
        ${nombreNodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
        ${nombreNodo}2[label="\\<Tipo\\>\\n${this.tipo}"];
        ${nombreNodo}->${nombreNodo}1
        ${nombreNodo}->${nombreNodo}2
        ${nombreNodo}->${this.value.ast()}`)*/
        
    }
}