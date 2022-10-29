import { Aritmetic_s, getNombre_op } from "./Aritmetic_s"
import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Retorno , Type, get} from "./Ret"
import { Tabla_s } from "./Tabla_s"

export class Operacion extends Expresion {

    constructor(
        private iz: Expresion,
        private der: Expresion,
        private type: Aritmetic_s,
        linea: number,
        columna: number) {
        super(linea, columna)
    }
    Convertir(caracter:string):number {
        return 0;
    } 
    public ejecutar(tabla : Tabla_s): Retorno {

        let resultado: Retorno

        const izquierdo = this.iz.ejecutar(tabla)
        const derecho = this.der.ejecutar(tabla)

        /**
         * suma---------------------------------------------------------------------------------
         */
        if (this.type == Aritmetic_s.MAS) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.NUMBER && izquierdo.type == Type.NUMBER) {
                resultado = { value: (izquierdo.value + derecho.value), type: Type.NUMBER }
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.NUMBER ) {
                if(izquierdo.value == "verdadero"){
                    resultado = { value: (1 + derecho.value), type: Type.NUMBER }
                }
                else{
                    resultado = { value: (derecho.value), type: Type.NUMBER }
                }
                
            }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.NUMBER ) {
                if(derecho.value == "verdadero"){
                    resultado = { value: (1 + izquierdo.value), type: Type.NUMBER }
                }
                else{
                    resultado = { value: (izquierdo.value), type: Type.NUMBER }
                }
                
            }//NUMERO CHAR ---------------------------------------------
            else if (  izquierdo.type == Type.STRING && derecho.type == Type.NUMBER ) {
                let comprobar_longi = izquierdo.value.length;
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(izquierdo.value);

                    resultado = { value: (ascci_ + derecho.value), type: Type.NUMBER }
                }
                else{
                    let suma_cad:string = izquierdo.value+derecho.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                }
                
            }else if (  derecho.type == Type.STRING && izquierdo.type == Type.NUMBER ) {
                let comprobar_longi = derecho.value.length;
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (ascci_ + izquierdo.value), type: Type.NUMBER }
                }
                else{
                    let suma_cad:string = derecho.value+izquierdo.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                }  
            }
            //BOOLEAN CON CADENA---------------------------------------------
            else if (  izquierdo.type == Type.STRING && derecho.type == Type.BOOLEAN ) {
                let comprobar_longi = izquierdo.value.length;
                if(comprobar_longi != 1){
                    let suma_cad:string = izquierdo.value+derecho.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                }
                else{
                    throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
                
                }
                
            }else if (  derecho.type == Type.STRING && izquierdo.type == Type.BOOLEAN ) {
                let comprobar_longi = derecho.value.length;
                if(comprobar_longi != 1){
                    let suma_cad:string = derecho.value+izquierdo.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                }
                else{
                    throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
                
                }  
            }
            //CADENA O CARACTER -------------------------------------------------------------
            else if (derecho.type == Type.STRING && izquierdo.type == Type.STRING) {
                resultado = { value: (izquierdo.value + derecho.value), type: Type.STRING }
                 }

            //CUALQUIER OTRO TIPO -------------------------------------------------------
           else{
                throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
            
        }
        /**
        * resta---------------------------------------------------------------------------------
        */
         else if (this.type == Aritmetic_s.MENOS) {
           //NUMERO NUMERO---------------------------------------------
           if (derecho.type == Type.NUMBER && izquierdo.type == Type.NUMBER) {
            resultado = { value: (izquierdo.value -  derecho.value), type: Type.NUMBER }
        }
        //NUMERO BOOLEAN---------------------------------------------
        else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.NUMBER ) {
            if(izquierdo.value == "verdadero"){
                resultado = { value: (1 - derecho.value), type: Type.NUMBER }
            }
            else{
                resultado = { value: (derecho.value), type: Type.NUMBER }
            }
            
        }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.NUMBER ) {
            if(derecho.value == "verdadero"){
                resultado = { value: ( izquierdo.value-1), type: Type.NUMBER }
            }
            else{
                resultado = { value: (izquierdo.value), type: Type.NUMBER }
            }
            
        }//NUMERO CHAR ---------------------------------------------
        else if (  izquierdo.type == Type.STRING && derecho.type == Type.NUMBER ) {
            let comprobar_longi = izquierdo.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(izquierdo.value);

                resultado = { value: (ascci_ - derecho.value), type: Type.NUMBER }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
            
        }else if (  derecho.type == Type.STRING && izquierdo.type == Type.NUMBER ) {
            let comprobar_longi = derecho.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(derecho.value);
                resultado = { value: (izquierdo.value - ascci_), type: Type.NUMBER }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            }  
        }
        
        //CARACTER CARACTER -------------------------------------------------------------
        else if (derecho.type == Type.STRING && izquierdo.type == Type.STRING) {
            let comprobar_longi = derecho.value.length;
            let comprobar_longi2 = izquierdo.value.length;
            if(comprobar_longi == 1 && comprobar_longi2== 1){
                let ascci_ = this.Convertir(derecho.value);
                let ascci_2 = this.Convertir(izquierdo.value);
                resultado = { value: ( ascci_2-ascci_), type: Type.NUMBER }
       
                
            }else{
                throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
        }

        //CUALQUIER OTRO TIPO -------------------------------------------------------
       else{
            throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
       
        }
        }
        /**
        * multiplicacion---------------------------------------------------------------------------------
        */
         else if (this.type == Aritmetic_s.MULTIPLICACION) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.NUMBER && izquierdo.type == Type.NUMBER) {
             resultado = { value: (izquierdo.value *  derecho.value), type: Type.NUMBER }
         }
         //NUMERO BOOLEAN---------------------------------------------
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.NUMBER ) {
             if(izquierdo.value == "verdadero"){
                 resultado = { value: (1 * derecho.value), type: Type.NUMBER }
             }
             else{
                 resultado = { value: (0*derecho.value), type: Type.NUMBER }
             }
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.NUMBER ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: ( izquierdo.value*1), type: Type.NUMBER }
             }
             else{
                 resultado = { value: (izquierdo.value*0), type: Type.NUMBER }
             }
             
         }//NUMERO CHAR ---------------------------------------------
         else if (  izquierdo.type == Type.STRING && derecho.type == Type.NUMBER ) {
             let comprobar_longi = izquierdo.value.length;
             if(comprobar_longi == 1){
                 let ascci_ = this.Convertir(izquierdo.value);
 
                 resultado = { value: (ascci_ * derecho.value), type: Type.NUMBER }
             }
             else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            
             }
             
         }else if (  derecho.type == Type.STRING && izquierdo.type == Type.NUMBER ) {
             let comprobar_longi = derecho.value.length;
             if(comprobar_longi == 1){
                 let ascci_ = this.Convertir(derecho.value);
                 resultado = { value: (izquierdo.value * ascci_), type: Type.NUMBER }
             }
             else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
             }  
         }
         
         //CARACTER CARACTER -------------------------------------------------------------
         else if (derecho.type == Type.STRING && izquierdo.type == Type.STRING) {
             let comprobar_longi = derecho.value.length;
             let comprobar_longi2 = izquierdo.value.length;
             if(comprobar_longi == 1 && comprobar_longi2== 1){
                 let ascci_ = this.Convertir(derecho.value);
                 let ascci_2 = this.Convertir(izquierdo.value);
                 resultado = { value: ( ascci_2*ascci_), type: Type.NUMBER }
        
                 
             }else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            
             }
         }
 
         //CUALQUIER OTRO TIPO -------------------------------------------------------
        else{
             throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
        
         }
         }
         /**
        * division---------------------------------------------------------------------------------
        */
         else if (this.type == Aritmetic_s.DIV) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.NUMBER && izquierdo.type == Type.NUMBER) {
                if(derecho.value != 0){
                    resultado = { value: (izquierdo.value /  derecho.value), type: Type.NUMBER }
                }else{
                    throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
             
                }
             
         }
         //NUMERO BOOLEAN---------------------------------------------
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.NUMBER ) {
            if(derecho.value != 0){
                if(izquierdo.value == "verdadero"){
                    resultado = { value: (1 / derecho.value), type: Type.NUMBER }
                }
                else{
                    resultado = { value: (0/derecho.value), type: Type.NUMBER }
                }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            } 
            
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.NUMBER ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: ( izquierdo.value), type: Type.NUMBER }
             }
             else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
            }
             
         }//NUMERO CHAR ---------------------------------------------
         else if (  izquierdo.type == Type.STRING && derecho.type == Type.NUMBER ) {
             let comprobar_longi = izquierdo.value.length;
             if(derecho.value != 0){
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(izquierdo.value);
    
                    resultado = { value: (ascci_ / derecho.value), type: Type.NUMBER }
                }
                else{
                    throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
               
                }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            }
             
             
         }else if (  derecho.type == Type.STRING && izquierdo.type == Type.NUMBER ) {
             let comprobar_longi = derecho.value.length;
             if(comprobar_longi == 1){
                 let ascci_ = this.Convertir(derecho.value);
                 resultado = { value: (izquierdo.value / ascci_), type: Type.NUMBER }
             }
             else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
             }  
         }
         
         //CARACTER CARACTER -------------------------------------------------------------
         else if (derecho.type == Type.STRING && izquierdo.type == Type.STRING) {
             let comprobar_longi = derecho.value.length;
             let comprobar_longi2 = izquierdo.value.length;
             if(comprobar_longi == 1 && comprobar_longi2== 1){
                 let ascci_ = this.Convertir(derecho.value);
                 let ascci_2 = this.Convertir(izquierdo.value);
                 resultado = { value: ( ascci_2/ascci_), type: Type.NUMBER }
        
                 
             }else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            
             }
         }
 
         //CUALQUIER OTRO TIPO -------------------------------------------------------
        else{
             throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
        
         }
         }
/**
        * potencia---------------------------------------------------------------------------------
        */
         else if (this.type == Aritmetic_s.POT) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.NUMBER && izquierdo.type == Type.NUMBER) {
             resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Type.NUMBER }
         }
         //NUMERO BOOLEAN---------------------------------------------
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.NUMBER ) {
             if(izquierdo.value == "verdadero"){
                 resultado = { value: (Math.pow(1, derecho.value)), type: Type.NUMBER }
             }
             else{
                 resultado = { value: (Math.pow(0,derecho.value)), type: Type.NUMBER }
             }
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.NUMBER ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: (Math.pow( izquierdo.value,1)), type: Type.NUMBER }
             }
             else{
                 resultado = { value: (Math.pow(izquierdo.value,0)), type: Type.NUMBER }
             }
             
         }
         
         //CUALQUIER OTRO TIPO -------------------------------------------------------
        else{
             throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
         }
         }
        /**
        * Negacion
        */
        else if (this.type == Aritmetic_s.NEGACION) {
            if (derecho.type == Type.NUMBER)
                resultado = { value: izquierdo.value * -1, type: Type.NUMBER }
                
            else throw new Error_det("Semantico", "Error de tipos con operando resta , no se puede negar un tipo [" + get(derecho.type) + "]", this.linea, this.columna)
        }
        /**
         * Potencia, modulo, multiplicacion, resta, division
         */
        else {

            if (derecho.type == Type.NUMBER && izquierdo.type == Type.NUMBER) {
                if (this.type == Aritmetic_s.MODULO) { 
                    resultado = { value: (izquierdo.value % derecho.value), type: Type.NUMBER }
                 }
                 else /*(this.type == ArithmeticOption.RESTA)*/ { resultado = { value: (0 - 0), type: Type.NUMBER } }

            }
             else throw new Error_det("Semantico", `Error de tipos en el operando ${getNombre_op(this.type)}, tipo [${get(izquierdo.type)}] con tipo [${get(derecho.type)}]`, this.linea, this.columna)

        }

        return resultado
    }

    public ast() {

        
        return `
        
        `
    }
    
}
