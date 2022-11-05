import { Expresion } from "./Expresion";
import { Instruccion } from "./instruccion";
import { Type } from "./Ret";
import { Tabla_s } from "./Tabla_s";
import { Union } from "./Union";
let contador:number = 0;
export class Imprimir extends Instruccion {

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
        console.log(expresion.value+"fff");
        if (expresion != null) {
            if (expresion.type != Type.error) s.add_consola(expresion.value)
        }
        
    }

    public ast() {
        const u = Union.getInstance()
console.log("iprimir entro")
    
            let  dot:string = "";
       //contador += 1;
       dot+="nodo"+(contador)+"_imprimir;\n";
           dot+="nodo"+(contador)+"_imprimir"+" [ label =\"IMPRIMIR: \"];\n";
           
           dot+="nodo"+(contador)+"_imprimir"+" ->"+this.value.ast()+"\n";
              
       console.log(dot);
       contador++;
   
       u.add_ast(dot);
       return dot; 
    }
}