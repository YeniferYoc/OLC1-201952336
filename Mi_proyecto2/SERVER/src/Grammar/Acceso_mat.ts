import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Retorno, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";
let contador :number = 0;
export class Acceso_mat extends Expresion {
    constructor(
        public id: string,
        public condicionPop: boolean,
        public condicionAsignacion: boolean,
        public cast: Instruccion,
        public expresion: Expresion,
        public cast2: Instruccion,
        public expresion2: Expresion,
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
         if(this.cast != null && this.cast2 != null){
            dot+="nodo"+(contador)+"_MAT;\n";
            dot+="nodo"+(contador)+"_MAT"+" [ label =\"ACCESO MATRIZ\"];\n";
            dot+="nodo"+(contador)+"_id_MAT"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_MAT"+" ->"+"nodo"+(contador)+"_id_MAT"+"\n";
            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.cast.ast())+"\n";   
            dot+=(this.expresion.ast())+"\n"; 


            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.cast2.ast())+"\n";   
            dot+=(this.expresion2.ast())+"\n"; 

        }
        else if(this.cast != null && this.cast2 == null){
            dot+="nodo"+(contador)+"_MAT;\n";
            dot+="nodo"+(contador)+"_MAT"+" [ label =\"ACCE SO MATRIZ\"];\n";
            dot+="nodo"+(contador)+"_id_MAT"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_MAT"+" ->"+"nodo"+(contador)+"_id_MAT"+"\n";
            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.cast.ast())+"\n";   
            dot+=(this.expresion.ast())+"\n"; 


            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.expresion2.ast())+"\n";  

        }
       else  if(this.cast == null && this.cast2 != null){
        console.log("hay casteo en 2")
            dot+="nodo"+(contador)+"_MAT;\n";
            dot+="nodo"+(contador)+"_MAT"+" [ label =\"ACCESO MATRIZ\"];\n";
            dot+="nodo"+(contador)+"_id_MAT"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_MAT"+" ->"+"nodo"+(contador)+"_id_MAT"+"\n";
            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.cast2.ast())+"\n"; 
            dot+=(this.expresion2.ast())+"\n"; 

            dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.expresion.ast())+"\n";   
             

        }
        
        else{
            dot+="nodo"+(contador)+"_MAT;\n";
            dot+="nodo"+(contador)+"_MAT"+" [ label =\"ACCESO MATRIZ\"];\n";
            dot+="nodo"+(contador)+"_id_MAT"+" [ label =\""+this.id.toString()+"\"];\n";
				
            dot+="nodo"+(contador)+"_MAT"+" ->"+"nodo"+(contador)+"_id_MAT"+"\n";
              dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.expresion.ast())+"\n";
              dot+="nodo"+(contador)+"_id_MAT"+" ->"+(this.expresion2.ast())+"\n"; 

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