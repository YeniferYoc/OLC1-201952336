import { Aritmetic_s, getNombre_op, get_simbolo_op } from "./Aritmetic_s"
import { Error_det } from "./Error_det"
import { Expresion } from "./Expresion"
import { Retorno , Type, get} from "./Ret"
import { Tabla_s } from "./Tabla_s"
let contador:number = 0;
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

        let resultado: Retorno
        resultado = resultado = { value: ("error de operacion"), type: Type.STRING}

        const izquierdo = this.iz.ejecutar(tabla)
        const derecho = this.der.ejecutar(tabla)

        /**
         * suma---------------------------------------------------------------------------------
         */
        if (this.type == Aritmetic_s.MAS) {
            console.log("entro a suma");
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.INT && izquierdo.type == Type.INT ) {
                resultado = { value: (izquierdo.value + derecho.value), type: Type.INT }
                console.log("son dos numeros"+resultado.value);
            }
            else if ( derecho.type == Type.DOUBLE && izquierdo.type == Type.DOUBLE ) {
                resultado = { value: (izquierdo.value + derecho.value), type: Type.DOUBLE }
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.INT ) {
                if(izquierdo.value == "verdadero"){
                    resultado = { value: (1 + derecho.value), type: Type.INT }
                }
                else{
                    resultado = { value: (derecho.value), type: Type.INT }
                }
                
            }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.INT ) {
                if(derecho.value == "verdadero"){
                    resultado = { value: (1 + izquierdo.value), type: Type.INT }
                }
                else{
                    resultado = { value: (izquierdo.value), type: Type.INT }
                }
            
                
            }
            else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.DOUBLE ) {
                if(izquierdo.value == "verdadero"){
                    resultado = { value: (1 + derecho.value), type: Type.DOUBLE }
                }
                else{
                    resultado = { value: (derecho.value), type: Type.DOUBLE }
                }
                
            }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.DOUBLE ) {
                if(derecho.value == "verdadero"){
                    resultado = { value: (1 + izquierdo.value), type: Type.DOUBLE }
                }
                else{
                    resultado = { value: (izquierdo.value), type: Type.DOUBLE }
                }
            }
            //NUMERO CHAR ---------------------------------------------
            else if (  izquierdo.type == Type.CHAR && derecho.type == Type.INT ) {
                let comprobar_longi = izquierdo.value.length;
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(izquierdo.value);

                    resultado = { value: (ascci_ + derecho.value), type: Type.INT }
                }
               
                
            }else if (  derecho.type == Type.CHAR && izquierdo.type == Type.INT ) {
                let comprobar_longi = derecho.value.length;
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (ascci_ + izquierdo.value), type: Type.INT }
                }
            }
            else if (  izquierdo.type == Type.STRING && derecho.type == Type.INT ) {
             
                    let suma_cad:string = izquierdo.value+derecho.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                
                
            }else if (  derecho.type == Type.STRING && izquierdo.type == Type.INT ) {
                    let suma_cad:string = derecho.value+izquierdo.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                
            }
            else if (  izquierdo.type == Type.CHAR && derecho.type == Type.DOUBLE ) {
                let comprobar_longi = izquierdo.value.length;
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(izquierdo.value);

                    resultado = { value: (ascci_ + derecho.value), type: Type.DOUBLE }
                }
               
                
            }else if (  derecho.type == Type.CHAR && izquierdo.type == Type.DOUBLE ) {
                let comprobar_longi = derecho.value.length;
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (ascci_ + izquierdo.value), type: Type.DOUBLE }
                }
            }
            else if (  izquierdo.type == Type.STRING && derecho.type == Type.DOUBLE ) {
             
                    let suma_cad:string = izquierdo.value+derecho.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                
                
            }else if (  derecho.type == Type.STRING && izquierdo.type == Type.DOUBLE ) {
                    let suma_cad:string = derecho.value+izquierdo.value.toString();
                    resultado = { value: (suma_cad), type: Type.STRING }
                
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
           if (derecho.type == Type.INT && izquierdo.type == Type.INT) {
            resultado = { value: (izquierdo.value -  derecho.value), type: Type.INT }
        }
        else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.DOUBLE) {
            resultado = { value: (izquierdo.value -  derecho.value), type: Type.DOUBLE }
        }
        else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.INT) {
            resultado = { value: (izquierdo.value -  derecho.value), type: Type.DOUBLE }
        }
        else if (derecho.type == Type.INT && izquierdo.type == Type.DOUBLE) {
            resultado = { value: (izquierdo.value -  derecho.value), type: Type.DOUBLE }
        }
        //NUMERO BOOLEAN---------------------------------------------
        else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.INT ) {
            if(izquierdo.value == "verdadero"){
                resultado = { value: (1 - derecho.value), type: Type.INT }
            }
            else{
                resultado = { value: (derecho.value), type: Type.INT }
            }
            
        }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.INT ) {
            if(derecho.value == "verdadero"){
                resultado = { value: ( izquierdo.value-1), type: Type.INT }
            }
            else{
                resultado = { value: (izquierdo.value), type: Type.INT }
            }
            
        }
        
        //NUMERO CHAR ---------------------------------------------
        else if (  izquierdo.type == Type.CHAR && derecho.type == Type.INT ) {
            let comprobar_longi = izquierdo.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(izquierdo.value);

                resultado = { value: (ascci_ - derecho.value), type: Type.INT }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando rresa, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
            
        }else if (  derecho.type == Type.CHAR && izquierdo.type == Type.INT ) {
            let comprobar_longi = derecho.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(derecho.value);
                resultado = { value: (izquierdo.value - ascci_), type: Type.INT }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            }  
        }
        else if (  izquierdo.type == Type.CHAR && derecho.type == Type.DOUBLE ) {
            let comprobar_longi = izquierdo.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(izquierdo.value);

                resultado = { value: (ascci_ - derecho.value), type: Type.DOUBLE }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
            
        }else if (  derecho.type == Type.CHAR && izquierdo.type == Type.DOUBLE ) {
            let comprobar_longi = derecho.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(derecho.value);
                resultado = { value: (izquierdo.value - ascci_), type: Type.DOUBLE }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            }  
        }
        
        //CARACTER CARACTER -------------------------------------------------------------
        else if (derecho.type == Type.CHAR && izquierdo.type == Type.CHAR) {
            let comprobar_longi = derecho.value.length;
            let comprobar_longi2 = izquierdo.value.length;
            if(comprobar_longi == 1 && comprobar_longi2== 1){
                let ascci_ = this.Convertir(derecho.value);
                let ascci_2 = this.Convertir(izquierdo.value);
                resultado = { value: ( ascci_2-ascci_), type: Type.INT }
       
                
            }else{
                throw new Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
        }

        //CUALQUIER OTRO TIPO -------------------------------------------------------
       else{
            throw new Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
       
        }
        }
        /**
        * multiplicacion---------------------------------------------------------------------------------
        */
         else if (this.type == Aritmetic_s.MULTIPLICACION) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.INT && izquierdo.type == Type.INT) {
             resultado = { value: (izquierdo.value *  derecho.value), type: Type.INT }
         }
         else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.DOUBLE) {
            resultado = { value: (izquierdo.value *  derecho.value), type: Type.DOUBLE }
        }
        else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.INT ) {
            resultado = { value: (izquierdo.value *  derecho.value), type: Type.DOUBLE }
        }
        else if (derecho.type == Type.INT && izquierdo.type == Type.DOUBLE ) {
            resultado = { value: (izquierdo.value *  derecho.value), type: Type.DOUBLE }
        }
         //NUMERO BOOLEAN---------------------------------------------
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.INT ) {
             if(izquierdo.value == "verdadero"){
                 resultado = { value: (1 * derecho.value), type: Type.INT }
             }
             else{
                 resultado = { value: (0*derecho.value), type: Type.INT }
             }
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.INT ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: ( izquierdo.value*1), type: Type.INT }
             }
             else{
                 resultado = { value: (izquierdo.value*0), type: Type.INT }
             }
             
         }
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.DOUBLE ) {
            if(izquierdo.value == "verdadero"){
                resultado = { value: (1 * derecho.value), type: Type.DOUBLE }
            }
            else{
                resultado = { value: (0*derecho.value), type: Type.DOUBLE }
            }
            
        }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.DOUBLE ) {
            if(derecho.value == "verdadero"){
                resultado = { value: ( izquierdo.value*1), type: Type.DOUBLE }
            }
            else{
                resultado = { value: (izquierdo.value*0), type: Type.DOUBLE }
            }
            
        }
         
         //NUMERO CHAR ---------------------------------------------
         else if (  izquierdo.type == Type.CHAR && derecho.type == Type.INT ) {
             let comprobar_longi = izquierdo.value.length;
             if(comprobar_longi == 1){
                 let ascci_ = this.Convertir(izquierdo.value);
 
                 resultado = { value: (ascci_ * derecho.value), type: Type.INT }
             }
             else{
                 throw new Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            
             }
             
         }else if (  derecho.type == Type.CHAR && izquierdo.type == Type.INT ) {
             let comprobar_longi = derecho.value.length;
             if(comprobar_longi == 1){
                 let ascci_ = this.Convertir(derecho.value);
                 resultado = { value: (izquierdo.value * ascci_), type: Type.INT }
             }
             else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
             }  
         }
         else if (  izquierdo.type == Type.CHAR && derecho.type == Type.DOUBLE ) {
            let comprobar_longi = izquierdo.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(izquierdo.value);

                resultado = { value: (ascci_ * derecho.value), type: Type.DOUBLE }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
           
            }
            
        }else if (  derecho.type == Type.CHAR && izquierdo.type == Type.DOUBLE ) {
            let comprobar_longi = derecho.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(derecho.value);
                resultado = { value: (izquierdo.value * ascci_), type: Type.DOUBLE }
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
                 resultado = { value: ( ascci_2*ascci_), type: Type.INT }
        
                 
             }else{
                 throw new Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            
             }
         }
 
         //CUALQUIER OTRO TIPO -------------------------------------------------------
        else{
             throw new Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
        
         }
         }
         /**
        * division---------------------------------------------------------------------------------
        */
         else if (this.type == Aritmetic_s.DIV) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Type.INT && izquierdo.type == Type.INT) {
                if(derecho.value != 0){
                    resultado = { value: (izquierdo.value /  derecho.value), type: Type.DOUBLE }
                }else{
                    throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
             
                }
            
             
         }
         if (derecho.type == Type.DOUBLE && izquierdo.type == Type.DOUBLE) {
            if(derecho.value != 0){
                resultado = { value: (izquierdo.value /  derecho.value), type: Type.DOUBLE }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            }
        
         
        }
        if (derecho.type == Type.INT && izquierdo.type == Type.DOUBLE) {
            if(derecho.value != 0){
                resultado = { value: (izquierdo.value /  derecho.value), type: Type.DOUBLE }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            }
        
         
        }
        if (derecho.type == Type.DOUBLE && izquierdo.type == Type.INT) {
            if(derecho.value != 0){
                resultado = { value: (izquierdo.value /  derecho.value), type: Type.DOUBLE }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            }
        
         
        }
         //NUMERO BOOLEAN---------------------------------------------
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.INT ) {
            if(derecho.value != 0){
                if(izquierdo.value == "verdadero"){
                    resultado = { value: (1 / derecho.value), type: Type.INT }
                }
                else{
                    resultado = { value: (0/derecho.value), type: Type.INT }
                }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            } 
            
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.INT ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: ( izquierdo.value), type: Type.INT }
             }
             else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
            }
             
         }
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.DOUBLE ) {
            if(derecho.value != 0){
                if(izquierdo.value == "verdadero"){
                    resultado = { value: (1 / derecho.value), type: Type.DOUBLE }
                }
                else{
                    resultado = { value: (0/derecho.value), type: Type.DOUBLE }
                }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            } 
            
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.DOUBLE ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: ( izquierdo.value), type: Type.DOUBLE }
             }
             else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
            }
             
         }
         //NUMERO CHAR ---------------------------------------------
         else if (  izquierdo.type == Type.STRING && derecho.type == Type.INT ) {
             let comprobar_longi = izquierdo.value.length;
             if(derecho.value != 0){
                if(comprobar_longi == 1){
                    let ascci_ = this.Convertir(izquierdo.value);
    
                    resultado = { value: (ascci_ / derecho.value), type: Type.DOUBLE }
                }
                else{
                    throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
               
                }
            }else{
                throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
         
            }
             
             
         }else if (  derecho.type == Type.STRING && izquierdo.type == Type.INT ) {
             let comprobar_longi = derecho.value.length;
             if(comprobar_longi == 1){
                 let ascci_ = this.Convertir(derecho.value);
                 resultado = { value: (izquierdo.value / ascci_), type: Type.DOUBLE }
             }
             else{
                 throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
             }  
         }
         else if (  izquierdo.type == Type.STRING && derecho.type == Type.DOUBLE ) {
            let comprobar_longi = izquierdo.value.length;
            if(derecho.value != 0){
               if(comprobar_longi == 1){
                   let ascci_ = this.Convertir(izquierdo.value);
   
                   resultado = { value: (ascci_ / derecho.value), type: Type.DOUBLE }
               }
               else{
                   throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
              
               }
           }else{
               throw new Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna)
        
           }
            
            
        }else if (  derecho.type == Type.STRING && izquierdo.type == Type.DOUBLE ) {
            let comprobar_longi = derecho.value.length;
            if(comprobar_longi == 1){
                let ascci_ = this.Convertir(derecho.value);
                resultado = { value: (izquierdo.value / ascci_), type: Type.DOUBLE }
            }
            else{
                throw new Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
            }  
        }
         
         //CARACTER CARACTER -------------------------------------------------------------
         else if (derecho.type == Type.CHAR && izquierdo.type == Type.CHAR) {
             let comprobar_longi = derecho.value.length;
             let comprobar_longi2 = izquierdo.value.length;
             if(comprobar_longi == 1 && comprobar_longi2== 1){
                 let ascci_ = this.Convertir(derecho.value);
                 let ascci_2 = this.Convertir(izquierdo.value);
                 resultado = { value: ( ascci_2/ascci_), type: Type.DOUBLE }
        
                 
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
            if (derecho.type == Type.INT && izquierdo.type == Type.INT) {
             resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Type.INT }
         }
         else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.DOUBLE) {
            resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Type.DOUBLE }
        }
       else if (derecho.type == Type.INT && izquierdo.type == Type.DOUBLE) {
            resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Type.DOUBLE }
        }else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.INT) {
            resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Type.DOUBLE }
        }
         //NUMERO BOOLEAN---------------------------------------------
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.INT ) {
             if(izquierdo.value == "verdadero"){
                 resultado = { value: (Math.pow(1, derecho.value)), type: Type.INT }
             }
             else{
                 resultado = { value: (Math.pow(0,derecho.value)), type: Type.INT }
             }
             
         }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.INT ) {
             if(derecho.value == "verdadero"){
                 resultado = { value: (Math.pow( izquierdo.value,1)), type: Type.INT }
             }
             else{
                 resultado = { value: (Math.pow(izquierdo.value,0)), type: Type.INT }
             }
             
         }
         else if (  izquierdo.type == Type.BOOLEAN && derecho.type == Type.DOUBLE ) {
            if(izquierdo.value == "verdadero"){
                resultado = { value: (Math.pow(1, derecho.value)), type: Type.DOUBLE }
            }
            else{
                resultado = { value: (Math.pow(0,derecho.value)), type: Type.DOUBLE }
            }
            
        }else if (  derecho.type == Type.BOOLEAN && izquierdo.type == Type.DOUBLE ) {
            if(derecho.value == "verdadero"){
                resultado = { value: (Math.pow( izquierdo.value,1)), type: Type.DOUBLE }
            }
            else{
                resultado = { value: (Math.pow(izquierdo.value,0)), type: Type.DOUBLE }
            }
            
        }
         
         //CUALQUIER OTRO TIPO -------------------------------------------------------
        else{
             throw new Error_det("Semantico", "Error de tipos en el operando POT, tipo [" + get(izquierdo.type) + "] con tipo [" + get(derecho.type) + "] ", this.linea, this.columna)
         }
         }
        /**
        * Negacion
        */
        else if (this.type == Aritmetic_s.NEGACION) {
            if (derecho.type == (Type.INT||Type.DOUBLE))
                resultado = { value: izquierdo.value * -1, type: Type.INT }
                
            else throw new Error_det("Semantico", "Error de tipos con operando resta , no se puede negar un tipo [" + get(derecho.type) + "]", this.linea, this.columna)
        }
        /**
         * Potencia, modulo, multiplicacion, resta, division
         */
        else {
            if (this.type == Aritmetic_s.MODULO) { 
                if (derecho.type == Type.INT && izquierdo.type == Type.INT) {
                        resultado = { value: (izquierdo.value % derecho.value), type: Type.DOUBLE}
                }else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.DOUBLE) {
                    resultado = { value: (izquierdo.value % derecho.value), type: Type.DOUBLE}
            }else if (derecho.type == Type.INT && izquierdo.type == Type.DOUBLE) {
                resultado = { value: (izquierdo.value % derecho.value), type: Type.DOUBLE}
            }
            else if (derecho.type == Type.DOUBLE && izquierdo.type == Type.INT) {
                resultado = { value: (izquierdo.value % derecho.value), type: Type.DOUBLE}
            }else{
                resultado = { value: ("error de operacion"), type: Type.STRING}
            }

            }
            
             else throw new Error_det("Semantico", `Error de tipos en el operando ${getNombre_op(this.type)}, tipo [${get(izquierdo.type)}] con tipo [${get(derecho.type)}]`, this.linea, this.columna)

        }

        return resultado
    }

    public ast() {
        contador++;
        let  dot:string = "";
		contador += 1;
        dot+="nodo"+(contador)+"_op;\n";
        dot+="nodo"+(contador)+"_op"+" [ label =\""+get_simbolo_op(this.type)+"\"];\n";
        if(this.type == Aritmetic_s.NEGACION){
            //console.log("es negacion  ")
            dot+="nodo"+(contador)+"_op ->"+(this.der.ast())+"\n";
            
            return dot; 
        }else{
            dot+="nodo"+(contador)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(contador)+"_op ->"+(this.der.ast())+"\n";
            
            return dot;
        }
			
            
      /*  return `
        ${name_nodo};
        ${name_nodo}[label="${get_simbolo_op(this.type)}"];
        ${name_nodo}->${this.iz.ast()}
        ${name_nodo}->${this.der.ast()}
        `*/

/*
        
        if(this.type == Aritmetic_s.MAS){
            console.log("entro a suma")
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"+\"];\n";
			dot+="nodo"+(suma)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }
        else if(this.type == Aritmetic_s.MENOS){
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"-\"];\n";
			dot+="nodo"+(suma)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }else if(this.type == Aritmetic_s.MULTIPLICACION){
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"*\"];\n";
			dot+="nodo"+(suma)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }else if(this.type == Aritmetic_s.DIV){
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"/\"];\n";
			dot+="nodo"+(suma)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }else if(this.type == Aritmetic_s.MODULO){
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"%\"];\n";
			dot+="nodo"+(suma)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }else if(this.type == Aritmetic_s.POT){
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"^\"];\n";
			dot+="nodo"+(suma)+"_op"+" ->"+(this.iz.ast())+"\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }else if(this.type == Aritmetic_s.NEGACION){
            let suma:number = contador;
            dot+="nodo"+(suma)+"_op;\n";
			dot+="nodo"+(suma)+"_op"+" [ label =\"!\"];\n";	
			dot+="nodo"+(suma)+"_op ->"+(this.der.ast())+"\n";
        }
		
		
		return dot;*/
    }
    
}
