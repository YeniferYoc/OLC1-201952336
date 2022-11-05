import { Expresion } from "./Expresion"
import { get, Retorno, Type } from "./Ret"
import { Tabla_s } from "./Tabla_s"
import { Error_det } from "./Error_det"
import { Relational_op, get_simbolo, getName } from "./Simbolo_rel"
let contador:number = 0;
export class Relacional extends Expresion {

    constructor(
        private left: Expresion,
        private right: Expresion,
        private type: Relational_op,
        linea: number,
        columna: number
    ) {
        super(linea, columna)
    }
    Convertir(caracter:string):number {
        let alfabeto:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    let minuscula:string = "abcdefghijklmnopqrstuvwxyz";
		let contador = 0
        let retor: number = 0
        for(let letra of alfabeto){
            if(letra == caracter){
                retor= contador
            }
            contador++
        }
        contador = 0
        for(let letra of minuscula){
            if(letra == caracter){
                retor= contador
            }
            contador++
        }
        return contador;
    } 
    public ejecutar(tabla : Tabla_s): Retorno {

        const izquierdo = this.left.ejecutar(tabla)
        const derecho = this.right.ejecutar(tabla)

        if (izquierdo.type == Type.STRING && derecho.type == Type.STRING ||
            izquierdo.type == Type.BOOLEAN && derecho.type == Type.BOOLEAN) {

            switch (this.type) {
                case Relational_op.IGUAL:
                    return { value: izquierdo.value == derecho.value, type: Type.BOOLEAN }
                case Relational_op.DIFERENCIACION:
                    return { value: izquierdo.value != derecho.value, type: Type.BOOLEAN }
            }
        }

        if (izquierdo.type == Type.INT && derecho.type == Type.INT ||izquierdo.type == Type.DOUBLE && derecho.type == Type.DOUBLE ) {

            switch (this.type) {
                case Relational_op.IGUAL:
                    return { value: izquierdo.value == derecho.value, type: Type.BOOLEAN }
                case Relational_op.DIFERENCIACION:
                    return { value: izquierdo.value != derecho.value, type: Type.BOOLEAN }
                case Relational_op.MENOR:
                    return { value: izquierdo.value < derecho.value, type: Type.BOOLEAN }
                case Relational_op.MENORIGUAL:
                    return { value: izquierdo.value <= derecho.value, type: Type.BOOLEAN }
                case Relational_op.MAYOR:
                    return { value: izquierdo.value > derecho.value, type: Type.BOOLEAN }
                case Relational_op.MAYORIGUAL:
                    return { value: izquierdo.value >= derecho.value, type: Type.BOOLEAN }
            }

        }//NUMERO CHAR ---------------------------------------------
        else if (  izquierdo.type == Type.STRING && derecho.type == Type.INT ||derecho.type == Type.DOUBLE ) {
            let comprobar_longi = izquierdo.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(izquierdo.value);
                switch (this.type) {
                    case Relational_op.IGUAL:
                        return { value: ascci_ == derecho.value, type: Type.BOOLEAN }
                    case Relational_op.DIFERENCIACION:
                        return { value: ascci_ != derecho.value, type: Type.BOOLEAN }
                    case Relational_op.MENOR:
                        return { value: ascci_< derecho.value, type: Type.BOOLEAN }
                    case Relational_op.MENORIGUAL:
                        return { value: ascci_ <= derecho.value, type: Type.BOOLEAN }
                    case Relational_op.MAYOR:
                        return { value: ascci_ > derecho.value, type: Type.BOOLEAN }
                    case Relational_op.MAYORIGUAL:
                        return { value: ascci_ >= derecho.value, type: Type.BOOLEAN }
                }
                
            }
            
            
        }else if (  derecho.type == Type.STRING && izquierdo.type == Type.INT || izquierdo.type == Type.DOUBLE ) {
            let comprobar_longi = derecho.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(derecho.value);
                switch (this.type) {
                    case Relational_op.IGUAL:
                        return { value: izquierdo.value == ascci_, type: Type.BOOLEAN }
                    case Relational_op.DIFERENCIACION:
                        return { value: izquierdo.value != ascci_, type: Type.BOOLEAN }
                    case Relational_op.MENOR:
                        return { value: izquierdo.value < ascci_, type: Type.BOOLEAN }
                    case Relational_op.MENORIGUAL:
                        return { value: izquierdo.value <= ascci_, type: Type.BOOLEAN }
                    case Relational_op.MAYOR:
                        return { value: izquierdo.value > ascci_, type: Type.BOOLEAN }
                    case Relational_op.MAYORIGUAL:
                        return { value: izquierdo.value >= ascci_, type: Type.BOOLEAN }
                }
            }
           
        }
        throw new Error_det("Semantico", `Error tipo de datos en operando ${getName(this.type)}, tipo [${get(izquierdo.type)}] con tipo [${get(derecho.type)}]`, this.linea, this.columna)

    }
    public ast() {
        let  dot:string = "";
		contador += 1;
        dot+="nodo"+(contador)+"_re;\n";
        dot+="nodo"+(contador)+"_re"+" [ label = \""+get_simbolo(this.type)+" \"];\n";
        
			dot+="nodo"+(contador)+"_re"+" ->"+(this.left.ast())+"\n";	
			dot+="nodo"+(contador)+"_re ->"+(this.right.ast())+"\n";
            contador++;
            return dot;
    }
}