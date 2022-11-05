import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Retorno, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";
let contador :number = 0;
export class Acceso_arr extends Expresion {
    constructor(
        public id: string,
        public condicionPop: boolean,
        public condicionAsignacion: boolean,
        public cast: Instruccion,
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
    public ast() {
        let  dot:string = "";
		//contador += 1;
        //console.log(this.cast)
        if(this.expresion == null){
            //esta en length
            dot+="nodo"+(contador)+"_len;\n";
            dot+="nodo"+(contador)+"_len"+" [ label =\"LENGTH ARRAY\"];\n";
            dot+="nodo"+(contador)+"_id_len"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_len"+" ->"+"nodo"+(contador)+"_id_len"+"\n";
               
        }
        else if(this.cast == null){
           
            dot+="nodo"+(contador)+"_acc;\n";
            dot+="nodo"+(contador)+"_acc"+" [ label =\"ACCESO ARRAY\"];\n";
            dot+="nodo"+(contador)+"_id_acc"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_acc"+" ->"+"nodo"+(contador)+"_id_acc"+"\n";
              dot+="nodo"+(contador)+"_acc"+" ->"+(this.expresion.ast())+"\n"; 
 
        }
        
        else{

              console.log("si hay cast")
            dot+="nodo"+(contador)+"_acc;\n";
            dot+="nodo"+(contador)+"_acc"+" [ label =\"ACCESO ARRAY\"];\n";
            dot+="nodo"+(contador)+"_id_acc"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_acc"+" ->"+"nodo"+(contador)+"_id_acc"+"\n";
            dot+="nodo"+(contador)+"_acc"+" ->"+(this.cast.ast())+"\n";   
            dot+=(this.expresion.ast())+"\n"; 

        }
        contador++;

        return dot;
        /*
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

        }*///return ""
    }

}