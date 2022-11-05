import { Expresion } from "./Expresion"
import { Retorno, Type, get } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Error_det } from "./Error_det"
import { Logico_op, getName, getSimbol } from "./Logico_op"
import { Relational_op } from "./Simbolo_rel"
let contador:number = 0;
export class Logica extends Expresion {

    constructor(
        private iz: Expresion,
        private der: Expresion,
        private tipo: Logico_op,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla : Tabla_s): Retorno {
        const valueIzq = this.iz.ejecutar(tabla)

        //asegurarse que el tipo es boolean
        if (valueIzq.type != Type.BOOLEAN) {
            throw new Error_det("Semantico", `Error tipos en operando ${getName(this.tipo)}, tipo [${get(valueIzq.type)}] debe ser Booleano`, this.linea, this.columna)
        }

        //corto circuito operador AND y OR
        if (Boolean(valueIzq.value) == false && this.tipo == Logico_op.AND) {
            return { value: false, type: Type.BOOLEAN }
        } else if (Boolean(valueIzq.value) == true && this.tipo == Logico_op.OR) {
            return { value: true, type: Type.BOOLEAN }
        }

        const valueDer = this.der.ejecutar(tabla)
        //asegurarse que el tipo es boolean
        if (valueDer.type != Type.BOOLEAN) {
            throw new Error_det("Semantico", `Error tipos en operando ${getName(this.tipo)}, tipo [${get(valueDer.type)}] debe ser Booleano`, this.linea, this.columna)
        }

        switch (this.tipo) {
            case Logico_op.AND:
                return { value: valueIzq.value && valueDer.value, type: Type.BOOLEAN }
            case Logico_op.OR:
                return { value: valueIzq.value || valueDer.value, type: Type.BOOLEAN }
            case Logico_op.NOT:
                return { value: !valueDer.value, type: Type.BOOLEAN }
            default:
                return { value: null, type: Type.error }
        }
    }

    public ast() {
        let  dot:string = "";
		contador++;
        dot+="nodo"+(contador)+"_lo;\n";
        dot+="nodo"+(contador)+"_lo"+" [ label =\""+getSimbol(this.tipo)+" \"];\n";
        
			//dot+="nodo"+(contador)+"_lo"+" ->"+(this.iz.ast())+"\n";	
			//dot+="nodo"+(contador)+"_lo ->"+(this.der.ast())+"\n";
            
           // return dot;


            if(this.tipo == Logico_op.NOT){
                //console.log("es negacion  ")
                dot+="nodo"+(contador)+"_lo ->"+(this.der.ast())+"\n";
                
                return dot; 
            }else{
                dot+="nodo"+(contador)+"_lo"+" ->"+(this.iz.ast())+"\n";	
                dot+="nodo"+(contador)+"_lo ->"+(this.der.ast())+"\n";
                
                return dot;
            
            }
    }

}