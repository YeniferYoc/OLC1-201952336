import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";
import { Union } from "./Union";
let contador : number = 0;
export class Imprimir_nl extends Instruccion {

    constructor(
        public value: Expresion,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(tabla: Tabla_s) {
        
        const s = Union.getInstance()
        const expresion = this.value?.ejecutar(tabla);
        if (expresion != null) {
            if (expresion.type != Type.error) s.add_consola(expresion.value)
        }
        s.add_consola("\n")
    }

    public ast() {

        const u = Union.getInstance()

    
            let  dot:string = "";
       //contador += 1;
       dot+="nodo"+(contador)+"_imprimir;\n";
           dot+="nodo"+(contador)+"_imprimir"+" [ label =\"IMPRIMIR_NL: \"];\n";
           
           dot+="nodo"+(contador)+"_imprimir"+" ->"+this.value.ast()+"\n";
              
       
       contador++;
   
       u.add_ast(dot);
       return dot; 
    }
}