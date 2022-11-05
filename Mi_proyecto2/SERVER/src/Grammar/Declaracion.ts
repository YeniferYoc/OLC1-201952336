import { Expresion } from "./Expresion"
import { Instruccion } from "./instruccion"
import { Tabla_s } from "./Tabla_s"
import { get, Type } from "./Ret"
import { Error_det } from "./Error_det"
import { Union } from "./Union"
let contador : number = 0;
export class Declaracion extends Instruccion {
    
    constructor(
        public identificadores: Array<string>,
        public tipo: string, 
        
        public valor: Expresion, 
        public parse: Instruccion,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }

    public ejecutar(tabla: Tabla_s) {
        console.log("aqui esta en declaracion")
        if(this.valor == null){     
                                   
            console.log("dice que valor es null")
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
            console.log("entro primir else")
            if(this.parse == null){
                console.log("entro ejecutar declaracion");
                const ex = this.valor.ejecutar(tabla);
                console.log("entro ejecutar declaracion");
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
    
            }
            
            else{
                console.log("entro segundo else")
                const ex = this.valor.ejecutar(tabla)
                console.log(ex.value)
                console.log("entro ejecutar declaracion")
                //cuando la declaracion si tiene un tipo de dato definido
               
                    if(this.identificadores != null){
                        this.identificadores.forEach(x => {
                            const c = tabla.guardar_variable(x, ex.value, ex.type)
                            if (!c) throw new Error_det("Semantico", `La variable '${x}' ya existe`, this.linea, this.columna)
               
                        });
                    }
                 
    
            }
           
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
						dot+="nodo"+(cont)+"_de";
						ides = true;
						cont++;
                        //console.log(dot)
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
                dot+="nodo"+(declaracion)+"_de"+" [ label =\"DECLARACION "+this.tipo.toString()+"\"];\n";
				
				dot+="nodo"+(declaracion+1)+"_id"+" [ label =\""+id.toString()+"\"];\n";
				dot+="nodo"+(declaracion)+"_de"+" ->nodo"+(declaracion+1)+"_id;";
				if(this.parse == null){
                    if(this.valor == null){

                    }else{
                        dot+="nodo"+declaracion+"_de"+" ->"+this.valor.ast();
                    
                    }
                }else{
                    dot+="nodo"+declaracion+"_de"+" ->"+this.parse.ast();
                    dot+=this.valor.ast();
                }
                
               
                
              //console.log(dot)
             //   console.log("fin dot decla")
				
				contador++;
                        
                
            }
            
            );
			
		}else {
            //console.log("i es null")
			
		}
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		contador++;
		
			
		//console.log(dot)
		u.add_ast(dot)
		return dot; 
	
        
    }
}