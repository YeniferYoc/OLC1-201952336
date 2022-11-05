import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { get, Type } from "./Ret"
import { Union } from "./Union"
let contador: number = 0;
export class Asignacion extends Instruccion {

    constructor(
        public identificadores: Array<string>,
        public value: Expresion,
        public cast:Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {

        const expresion = this.value.ejecutar(tabla)
        if(this.identificadores != null){
            this.identificadores.forEach(nombre => {
                var variable = tabla.obtener_variable(nombre)
                //validar que todo este bien antes de actualizar la variable
                if (variable == null || variable == undefined) throw new Error_det("Semantico", `Variable inexistente '${nombre}'`, this.linea, this.columna)
                
                if (variable?.tipo != expresion.type) throw new Error_det("Semantico", `Asignacion incorrecta, la variable '${nombre}' es de tipo [${get(variable?.tipo)}] y se le esta tratando de asignar un tipo [${get(expresion.type)}]`, this.linea, this.columna)

                tabla.actualizar_variable(nombre, expresion.value)
            });
        }

        

    }

    public ast() {
        
        
        //console.log("entro ast declaracion ")
        const u = Union.getInstance()

		// TODO Auto-generated method stub
		//System.out.println("entro");
		let  dot:string = "";
		
		let  declaracion :number= contador;
		let ides :boolean = false;
        
		if(this.identificadores != null) {
           // console.log("no es null")
            this.identificadores.forEach(id => {
                declaracion = contador
                if(ides ==false) {
                    let cont:number = contador
                    for(let i :number= 0; i<this.identificadores.length; i++) {
						dot+="nodo"+(cont)+"_as";
						ides = true;
						cont++;
                        console.log(dot)
                        //console.log(this.identificadores.length)
						if(i != this.identificadores.length-1){
							dot += ",";
						}
						
					}
                    //console.log(dot)
                    dot+=";";

                }else{

                }
               // console.log(this.tipo+" tipo")
                dot+="nodo"+(declaracion)+"_as"+" [ label =\"ASIGNACION \"];\n";
				
				dot+="nodo"+(declaracion+1)+"_id_As"+" [ label =\""+id.toString()+"\"];\n";
				dot+="nodo"+(declaracion)+"_as"+" ->nodo"+(declaracion+1)+"_id_As;"+"nodo"+declaracion+"_as"+" ->";
		
                if(this.cast!= null){
                    dot+=(this.cast.ast())+"\n"; 
                    dot+=(this.value.ast())+"\n"; 
         
                }else{
                    dot+= this.value.ast();
                }
        
                //dot+="nodo"+declaracion+"_as"+" ->"
                    
				
                
                
              // console.log(dot)
                //console.log("fin dot decla")
				
				contador++;
                        
                
            }
            
            );
			
		}else {
            //console.log("i es null")
			
		}
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		contador++;
		
			
		// console.log(dot)
		u.add_ast(dot)
		return dot; 
	
        
    
    }
}