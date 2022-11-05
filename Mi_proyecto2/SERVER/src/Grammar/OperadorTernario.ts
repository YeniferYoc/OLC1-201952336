import { Error_det } from "./Error_det";
import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { get, Retorno, Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";
import { Union } from "./Union";
let contador: number = 0;
export class OperadorTernario extends Expresion {

    constructor(
        private condicion: Expresion,
        private valor1: Instruccion,
        private valor2: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s):Retorno {
        const condition = this.condicion.ejecutar(tabla);
        let resultado: Retorno
        if (condition.type != Type.BOOLEAN) throw new Error_det("Semantico", `La condicion de la instruccion ternaria tiene que ser tipo [BOOLEAN] y se reconocio el tipo [${get(condition.type)}}]]`, this.linea, this.columna)

        if (condition.value) this.valor1.ejecutar(tabla)
        else this.valor2.ejecutar(tabla)
        resultado = resultado = { value: ("error de operacion"), type: Type.STRING}
return resultado
    }

    public ast() {
        const s= Union.getInstance()
        let  dot:string = "";
		//contador += 1;

        dot+="nodo"+(contador)+"_ter;\n";
        dot+="nodo"+(contador)+"_ter"+" [ label =\"TERNARIO\"];\n";
        dot+="nodo"+(contador)+"_ter"+" ->"+(this.condicion.ast())+"\n";
        dot+="nodo"+(contador)+"_ter"+" ->"+"nodo"+(contador)+"_v"+"\n";
        dot+="nodo"+(contador)+"_v"+" [ label =\"VERDADERO\"];\n";
        
        dot+="nodo"+(contador)+"_v"+" ->"+(this.valor1.ast())+"\n";	
        dot+="nodo"+(contador)+"_ter"+" ->"+"nodo"+(contador)+"_f"+"\n";
        dot+="nodo"+(contador)+"_f"+" [ label =\"FALSO\"];\n";	
        dot+="nodo"+(contador)+"_f"+" ->"+(this.valor2.ast())+"\n";	
        console.log(dot);
        contador++;
        return dot;
    }
}