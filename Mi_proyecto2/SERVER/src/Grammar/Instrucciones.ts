import { Expresion } from "./Expresion"
import { Funcion } from "./Funcion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { Union } from "./Union"
let contador:number = 0;
export class Instrucciones extends Instruccion {

    constructor(
        private instrucciones: Array<Instruccion>,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        const newEnv = new Tabla_s(tabla)

        //recorrer primero las instrucciones buscando funciones
        for (const x of this.instrucciones) {
            if (x instanceof Funcion) {
                x.ejecutar(newEnv)
            }
        }

        //recorrer las instrucciones restantes
        for (const x of this.instrucciones) {
            if (x instanceof Funcion) { }
            else if (x.toString() != ";") {
                const instruccion = x.ejecutar(newEnv)
            }
        }

    }
    
    public ast() {  
        console.log("entro");
        const s = Union.getInstance()
        let  dot:string = "";
		dot+="nodo"+(contador)+"_ins_;"
		dot+="nodo"+(contador)+"_ins_"+" [ label =\"INSTRUCCIONES \"];\n";
        this.instrucciones.forEach(x => {
           dot+="nodo"+(contador)+"_ins_ ->"+x.ast()
        })
        console.log(dot);
        contador++;
        return dot; 
        

    }
}