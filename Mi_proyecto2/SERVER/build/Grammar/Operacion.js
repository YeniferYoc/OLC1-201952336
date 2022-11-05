"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operacion = void 0;
const Aritmetic_s_1 = require("./Aritmetic_s");
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class Operacion extends Expresion_1.Expresion {
    constructor(iz, der, type, linea, columna) {
        super(linea, columna);
        this.iz = iz;
        this.der = der;
        this.type = type;
    }
    Convertir(caracter) {
        let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let minuscula = "abcdefghijklmnopqrstuvwxyz";
        let contador = 0;
        let retor = 0;
        for (let letra of alfabeto) {
            if (letra == caracter) {
                retor = contador;
            }
            contador++;
        }
        contador = 0;
        for (let letra of minuscula) {
            if (letra == caracter) {
                retor = contador;
            }
            contador++;
        }
        return contador;
    }
    ejecutar(tabla) {
        let resultado;
        resultado = resultado = { value: ("error de operacion"), type: Ret_1.Type.STRING };
        const izquierdo = this.iz.ejecutar(tabla);
        const derecho = this.der.ejecutar(tabla);
        /**
         * suma---------------------------------------------------------------------------------
         */
        if (this.type == Aritmetic_s_1.Aritmetic_s.MAS) {
            console.log("entro a suma");
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (izquierdo.value + derecho.value), type: Ret_1.Type.INT };
                console.log("son dos numeros" + resultado.value);
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (izquierdo.value + derecho.value), type: Ret_1.Type.DOUBLE };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.INT) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 + derecho.value), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (derecho.value), type: Ret_1.Type.INT };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (1 + izquierdo.value), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.INT };
                }
            }
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.DOUBLE) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 + derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: (derecho.value), type: Ret_1.Type.DOUBLE };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.DOUBLE) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (1 + izquierdo.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.DOUBLE };
                }
            }
            //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.CHAR && derecho.type == Ret_1.Type.INT) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ + derecho.value), type: Ret_1.Type.INT };
                }
            }
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.INT) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (ascci_ + izquierdo.value), type: Ret_1.Type.INT };
                }
            }
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.INT) {
                let suma_cad = izquierdo.value + derecho.value.toString();
                resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.INT) {
                let suma_cad = derecho.value + izquierdo.value.toString();
                resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
            }
            else if (izquierdo.type == Ret_1.Type.CHAR && derecho.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ + derecho.value), type: Ret_1.Type.DOUBLE };
                }
            }
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (ascci_ + izquierdo.value), type: Ret_1.Type.DOUBLE };
                }
            }
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.DOUBLE) {
                let suma_cad = izquierdo.value + derecho.value.toString();
                resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.DOUBLE) {
                let suma_cad = derecho.value + izquierdo.value.toString();
                resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
            }
            //BOOLEAN CON CADENA---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.BOOLEAN) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi != 1) {
                    let suma_cad = izquierdo.value + derecho.value.toString();
                    resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.BOOLEAN) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi != 1) {
                    let suma_cad = derecho.value + izquierdo.value.toString();
                    resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CADENA O CARACTER -------------------------------------------------------------
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.STRING) {
                resultado = { value: (izquierdo.value + derecho.value), type: Ret_1.Type.STRING };
            }
            //CUALQUIER OTRO TIPO -------------------------------------------------------
            else {
                throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
            }
        }
        /**
        * resta---------------------------------------------------------------------------------
        */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.MENOS) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (izquierdo.value - derecho.value), type: Ret_1.Type.INT };
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (izquierdo.value - derecho.value), type: Ret_1.Type.DOUBLE };
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (izquierdo.value - derecho.value), type: Ret_1.Type.DOUBLE };
            }
            else if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (izquierdo.value - derecho.value), type: Ret_1.Type.DOUBLE };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.INT) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 - derecho.value), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (derecho.value), type: Ret_1.Type.INT };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value - 1), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.INT };
                }
            }
            //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.CHAR && derecho.type == Ret_1.Type.INT) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ - derecho.value), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando rresa, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.INT) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value - ascci_), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (izquierdo.type == Ret_1.Type.CHAR && derecho.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ - derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value - ascci_), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CARACTER CARACTER -------------------------------------------------------------
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.CHAR) {
                let comprobar_longi = derecho.value.length;
                let comprobar_longi2 = izquierdo.value.length;
                if (comprobar_longi == 1 && comprobar_longi2 == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    let ascci_2 = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_2 - ascci_), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CUALQUIER OTRO TIPO -------------------------------------------------------
            else {
                throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando resta, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
            }
        }
        /**
        * multiplicacion---------------------------------------------------------------------------------
        */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.MULTIPLICACION) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (izquierdo.value * derecho.value), type: Ret_1.Type.INT };
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (izquierdo.value * derecho.value), type: Ret_1.Type.DOUBLE };
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (izquierdo.value * derecho.value), type: Ret_1.Type.DOUBLE };
            }
            else if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (izquierdo.value * derecho.value), type: Ret_1.Type.DOUBLE };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.INT) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 * derecho.value), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (0 * derecho.value), type: Ret_1.Type.INT };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value * 1), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (izquierdo.value * 0), type: Ret_1.Type.INT };
                }
            }
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.DOUBLE) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 * derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: (0 * derecho.value), type: Ret_1.Type.DOUBLE };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.DOUBLE) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value * 1), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: (izquierdo.value * 0), type: Ret_1.Type.DOUBLE };
                }
            }
            //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.CHAR && derecho.type == Ret_1.Type.INT) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ * derecho.value), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.INT) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value * ascci_), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (izquierdo.type == Ret_1.Type.CHAR && derecho.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ * derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value * ascci_), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CARACTER CARACTER -------------------------------------------------------------
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.STRING) {
                let comprobar_longi = derecho.value.length;
                let comprobar_longi2 = izquierdo.value.length;
                if (comprobar_longi == 1 && comprobar_longi2 == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    let ascci_2 = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_2 * ascci_), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CUALQUIER OTRO TIPO -------------------------------------------------------
            else {
                throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando MULT, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
            }
        }
        /**
       * division---------------------------------------------------------------------------------
       */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.DIV) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value != 0) {
                    resultado = { value: (izquierdo.value / derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.DOUBLE) {
                if (derecho.value != 0) {
                    resultado = { value: (izquierdo.value / derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.DOUBLE) {
                if (derecho.value != 0) {
                    resultado = { value: (izquierdo.value / derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value != 0) {
                    resultado = { value: (izquierdo.value / derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.INT) {
                if (derecho.value != 0) {
                    if (izquierdo.value == "verdadero") {
                        resultado = { value: (1 / derecho.value), type: Ret_1.Type.INT };
                    }
                    else {
                        resultado = { value: (0 / derecho.value), type: Ret_1.Type.INT };
                    }
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.INT };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.DOUBLE) {
                if (derecho.value != 0) {
                    if (izquierdo.value == "verdadero") {
                        resultado = { value: (1 / derecho.value), type: Ret_1.Type.DOUBLE };
                    }
                    else {
                        resultado = { value: (0 / derecho.value), type: Ret_1.Type.DOUBLE };
                    }
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.DOUBLE) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.INT) {
                let comprobar_longi = izquierdo.value.length;
                if (derecho.value != 0) {
                    if (comprobar_longi == 1) {
                        let ascci_ = this.Convertir(izquierdo.value);
                        resultado = { value: (ascci_ / derecho.value), type: Ret_1.Type.DOUBLE };
                    }
                    else {
                        throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                    }
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.INT) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value / ascci_), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = izquierdo.value.length;
                if (derecho.value != 0) {
                    if (comprobar_longi == 1) {
                        let ascci_ = this.Convertir(izquierdo.value);
                        resultado = { value: (ascci_ / derecho.value), type: Ret_1.Type.DOUBLE };
                    }
                    else {
                        throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                    }
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.DOUBLE) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value / ascci_), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CARACTER CARACTER -------------------------------------------------------------
            else if (derecho.type == Ret_1.Type.CHAR && izquierdo.type == Ret_1.Type.CHAR) {
                let comprobar_longi = derecho.value.length;
                let comprobar_longi2 = izquierdo.value.length;
                if (comprobar_longi == 1 && comprobar_longi2 == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    let ascci_2 = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_2 / ascci_), type: Ret_1.Type.DOUBLE };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            //CUALQUIER OTRO TIPO -------------------------------------------------------
            else {
                throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
            }
        }
        /**
                * potencia---------------------------------------------------------------------------------
                */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.POT) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Ret_1.Type.INT };
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Ret_1.Type.DOUBLE };
            }
            else if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.DOUBLE) {
                resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Ret_1.Type.DOUBLE };
            }
            else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.INT) {
                resultado = { value: (Math.pow(izquierdo.value, derecho.value)), type: Ret_1.Type.DOUBLE };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.INT) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (Math.pow(1, derecho.value)), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (Math.pow(0, derecho.value)), type: Ret_1.Type.INT };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.INT) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (Math.pow(izquierdo.value, 1)), type: Ret_1.Type.INT };
                }
                else {
                    resultado = { value: (Math.pow(izquierdo.value, 0)), type: Ret_1.Type.INT };
                }
            }
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.DOUBLE) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (Math.pow(1, derecho.value)), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: (Math.pow(0, derecho.value)), type: Ret_1.Type.DOUBLE };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.DOUBLE) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (Math.pow(izquierdo.value, 1)), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: (Math.pow(izquierdo.value, 0)), type: Ret_1.Type.DOUBLE };
                }
            }
            //CUALQUIER OTRO TIPO -------------------------------------------------------
            else {
                throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando POT, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
            }
        }
        /**
        * Negacion
        */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.NEGACION) {
            if (derecho.type == (Ret_1.Type.INT || Ret_1.Type.DOUBLE))
                resultado = { value: izquierdo.value * -1, type: Ret_1.Type.INT };
            else
                throw new Error_det_1.Error_det("Semantico", "Error de tipos con operando resta , no se puede negar un tipo [" + (0, Ret_1.get)(derecho.type) + "]", this.linea, this.columna);
        }
        /**
         * Potencia, modulo, multiplicacion, resta, division
         */
        else {
            if (this.type == Aritmetic_s_1.Aritmetic_s.MODULO) {
                if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.INT) {
                    resultado = { value: (izquierdo.value % derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.DOUBLE) {
                    resultado = { value: (izquierdo.value % derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else if (derecho.type == Ret_1.Type.INT && izquierdo.type == Ret_1.Type.DOUBLE) {
                    resultado = { value: (izquierdo.value % derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else if (derecho.type == Ret_1.Type.DOUBLE && izquierdo.type == Ret_1.Type.INT) {
                    resultado = { value: (izquierdo.value % derecho.value), type: Ret_1.Type.DOUBLE };
                }
                else {
                    resultado = { value: ("error de operacion"), type: Ret_1.Type.STRING };
                }
            }
            else
                throw new Error_det_1.Error_det("Semantico", `Error de tipos en el operando ${(0, Aritmetic_s_1.getNombre_op)(this.type)}, tipo [${(0, Ret_1.get)(izquierdo.type)}] con tipo [${(0, Ret_1.get)(derecho.type)}]`, this.linea, this.columna);
        }
        return resultado;
    }
    ast() {
        contador++;
        let dot = "";
        contador += 1;
        dot += "nodo" + (contador) + "_op;\n";
        dot += "nodo" + (contador) + "_op" + " [ label =\"" + (0, Aritmetic_s_1.get_simbolo_op)(this.type) + "\"];\n";
        if (this.type == Aritmetic_s_1.Aritmetic_s.NEGACION) {
            //console.log("es negacion  ")
            dot += "nodo" + (contador) + "_op ->" + (this.der.ast()) + "\n";
            return dot;
        }
        else {
            dot += "nodo" + (contador) + "_op" + " ->" + (this.iz.ast()) + "\n";
            dot += "nodo" + (contador) + "_op ->" + (this.der.ast()) + "\n";
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
exports.Operacion = Operacion;
