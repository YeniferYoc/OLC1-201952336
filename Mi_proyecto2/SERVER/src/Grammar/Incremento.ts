import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Incremento_op } from "./Incremento_op"
import { Retorno, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
export class Incremento extends Expresion {

    constructor(
        private type: Incremento_op,
        private nombre: string,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s): Retorno {

        let resultado: Retorno = { value: null, type: Type.INT }
        const variable = tabla.obtener_variable(this.nombre)

        //validar que exista, que sea editable y que su tipo sea numero
        if (variable == null) throw new Error_det("Semantico", `La variable '${this.nombre}' no encontrada`, this.linea, this.columna)
        if (variable.tipo != Type.INT) throw new Error_det("Semantico", `La variable '${this.nombre}' tiene que ser de tipo entero para incrementar o decrementar`, this.linea, this.columna)

        switch (this.type) {
            case Incremento_op.INCREMENTO1:
                resultado.value = variable.valor
                variable.valor++
                break
            case Incremento_op.INCREMENTO2:
                variable.valor++
                resultado.value = variable.valor
                break
            case Incremento_op.DECREMENTO1:
                resultado.value = variable.valor
                variable.valor--
                break
            case Incremento_op.DECREMENTO2:
                variable.valor--
                resultado.value = variable.valor
                break
            default:
                break
        }

        //actualiza en la tabla de simbolos 
        tabla.actualizar_variable(this.nombre, variable.valor)
        return resultado
    }

    public ast() {
        

        let  dot:string = "";
		//contador += 1;
       //esta en length
            //dot+="nodo"+(contador)+"_incre;\n";
            if(this.type ==Incremento_op.DECREMENTO1){
                dot+="nodo"+(contador)+"_id_dncre;\n";
                dot+="nodo"+(contador)+"_id_dncre"+" [ label =\""+this.nombre.toString()+"\"];\n";
                dot+="nodo"+(contador)+"_dncre"+" [ label =\"--\"];\n";
                dot+="nodo"+(contador)+"_id_dncre"+" ->"+"nodo"+(contador)+"_dncre"+"\n";
             

            }else if(this.type ==Incremento_op.DECREMENTO2){
                dot+="nodo"+(contador)+"_dncre2;\n";
                dot+="nodo"+(contador)+"_dncre2"+" [ label =\"--\"];\n";
                dot+="nodo"+(contador)+"_id_dncre2"+" [ label =\""+this.nombre.toString()+"\"];\n";
                dot+="nodo"+(contador)+"_dncre2"+" ->"+"nodo"+(contador)+"_id_dncre2"+"\n";
             

            }
            else if(this.type ==Incremento_op.INCREMENTO1){
                dot+="nodo"+(contador)+"_id_incre;\n";
                dot+="nodo"+(contador)+"_id_incre"+" [ label =\""+this.nombre.toString()+"\"];\n";
                dot+="nodo"+(contador)+"_incre"+" [ label =\"++\"];\n";
                dot+="nodo"+(contador)+"_id_incre"+" ->"+"nodo"+(contador)+"_incre"+"\n";
               
            }else{
                dot+="nodo"+(contador)+"_incre2;\n";
                dot+="nodo"+(contador)+"_incre2"+" [ label =\"++\"];\n";
                dot+="nodo"+(contador)+"_id_incre2"+" [ label =\""+this.nombre.toString()+"\"];\n";
                dot+="nodo"+(contador)+"_incre2"+" ->"+"nodo"+(contador)+"_id_incre2"+"\n";
             
            }
            
              
        
        contador++;

        return dot;
    }

}