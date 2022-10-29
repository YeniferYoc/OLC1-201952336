"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operacion = void 0;
const Aritmetic_s_1 = require("./Aritmetic_s");
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
class Operacion extends Expresion_1.Expresion {
    constructor(iz, der, type, linea, columna) {
        super(linea, columna);
        this.iz = iz;
        this.der = der;
        this.type = type;
    }
    Convertir(caracter) {
        return 0;
    }
    execute(tabla) {
        let resultado;
        const izquierdo = this.iz.ejecutar(tabla);
        const derecho = this.der.ejecutar(tabla);
        /**
         * suma---------------------------------------------------------------------------------
         */
        if (this.type == Aritmetic_s_1.Aritmetic_s.MAS) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.NUMBER && izquierdo.type == Ret_1.Type.NUMBER) {
                resultado = { value: (izquierdo.value + derecho.value), type: Ret_1.Type.NUMBER };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.NUMBER) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 + derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    resultado = { value: (derecho.value), type: Ret_1.Type.NUMBER };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.NUMBER) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (1 + izquierdo.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.NUMBER };
                }
            } //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ + derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    let suma_cad = izquierdo.value + derecho.value.toString();
                    resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (ascci_ + izquierdo.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    let suma_cad = derecho.value + izquierdo.value.toString();
                    resultado = { value: (suma_cad), type: Ret_1.Type.STRING };
                }
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
            if (derecho.type == Ret_1.Type.NUMBER && izquierdo.type == Ret_1.Type.NUMBER) {
                resultado = { value: (izquierdo.value - derecho.value), type: Ret_1.Type.NUMBER };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.NUMBER) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 - derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    resultado = { value: (derecho.value), type: Ret_1.Type.NUMBER };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.NUMBER) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value - 1), type: Ret_1.Type.NUMBER };
                }
                else {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.NUMBER };
                }
            } //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ - derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value - ascci_), type: Ret_1.Type.NUMBER };
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
                    resultado = { value: (ascci_2 - ascci_), type: Ret_1.Type.NUMBER };
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
        * multiplicacion---------------------------------------------------------------------------------
        */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.MULTIPLICACION) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.NUMBER && izquierdo.type == Ret_1.Type.NUMBER) {
                resultado = { value: (izquierdo.value * derecho.value), type: Ret_1.Type.NUMBER };
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.NUMBER) {
                if (izquierdo.value == "verdadero") {
                    resultado = { value: (1 * derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    resultado = { value: (0 * derecho.value), type: Ret_1.Type.NUMBER };
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.NUMBER) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value * 1), type: Ret_1.Type.NUMBER };
                }
                else {
                    resultado = { value: (izquierdo.value * 0), type: Ret_1.Type.NUMBER };
                }
            } //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = izquierdo.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(izquierdo.value);
                    resultado = { value: (ascci_ * derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value * ascci_), type: Ret_1.Type.NUMBER };
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
                    resultado = { value: (ascci_2 * ascci_), type: Ret_1.Type.NUMBER };
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
        else if (this.type == Aritmetic_s_1.Aritmetic_s.DIV) {
            //NUMERO NUMERO---------------------------------------------
            if (derecho.type == Ret_1.Type.NUMBER && izquierdo.type == Ret_1.Type.NUMBER) {
                if (derecho.value != 0) {
                    resultado = { value: (izquierdo.value / derecho.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            //NUMERO BOOLEAN---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.NUMBER) {
                if (derecho.value != 0) {
                    if (izquierdo.value == "verdadero") {
                        resultado = { value: (1 / derecho.value), type: Ret_1.Type.NUMBER };
                    }
                    else {
                        resultado = { value: (0 / derecho.value), type: Ret_1.Type.NUMBER };
                    }
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.BOOLEAN && izquierdo.type == Ret_1.Type.NUMBER) {
                if (derecho.value == "verdadero") {
                    resultado = { value: (izquierdo.value), type: Ret_1.Type.NUMBER };
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            } //NUMERO CHAR ---------------------------------------------
            else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = izquierdo.value.length;
                if (derecho.value != 0) {
                    if (comprobar_longi == 1) {
                        let ascci_ = this.Convertir(izquierdo.value);
                        resultado = { value: (ascci_ / derecho.value), type: Ret_1.Type.NUMBER };
                    }
                    else {
                        throw new Error_det_1.Error_det("Semantico", "Error de tipos en el operando suma, tipo [" + (0, Ret_1.get)(izquierdo.type) + "] con tipo [" + (0, Ret_1.get)(derecho.type) + "] ", this.linea, this.columna);
                    }
                }
                else {
                    throw new Error_det_1.Error_det("Semantico", "No se puede realizar una division entre 0", this.linea, this.columna);
                }
            }
            else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.NUMBER) {
                let comprobar_longi = derecho.value.length;
                if (comprobar_longi == 1) {
                    let ascci_ = this.Convertir(derecho.value);
                    resultado = { value: (izquierdo.value / ascci_), type: Ret_1.Type.NUMBER };
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
                    resultado = { value: (ascci_2 / ascci_), type: Ret_1.Type.NUMBER };
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
        * Negacion
        */
        else if (this.type == Aritmetic_s_1.Aritmetic_s.NEGACION) {
            if (derecho.type == Ret_1.Type.NUMBER)
                resultado = { value: izquierdo.value * -1, type: Ret_1.Type.NUMBER };
            else
                throw new Error_det_1.Error_det("Semantico", "Error de tipos con operando resta , no se puede negar un tipo [" + (0, Ret_1.get)(derecho.type) + "]", this.linea, this.columna);
        }
        /**
         * Potencia, modulo, multiplicacion, resta, division
         */
        else {
            if (derecho.type == Ret_1.Type.NUMBER && izquierdo.type == Ret_1.Type.NUMBER) {
                if (this.type == ArithmeticOption.POT) {
                    result = { value: Math.pow(nodoIzq.value, nodoDer.value), type: Ret_1.Type.NUMBER };
                }
                else if (this.type == ArithmeticOption.MODULO) {
                    result = { value: (nodoIzq.value % nodoDer.value), type: Ret_1.Type.NUMBER };
                }
                else if (this.type == ArithmeticOption.MULTIPLICACION) {
                    result = { value: (nodoIzq.value * nodoDer.value), type: Ret_1.Type.NUMBER };
                }
                else if (this.type == ArithmeticOption.DIV) {
                    if (nodoDer.value == 0) {
                        throw new error("Semantico", "No se puede realizar una division entre 0", this.line, this.column);
                    }
                    result = { value: (nodoIzq.value / nodoDer.value), type: Ret_1.Type.NUMBER };
                }
                else /*(this.type == ArithmeticOption.RESTA)*/ {
                    result = { value: (nodoIzq.value - nodoDer.value), type: Ret_1.Type.NUMBER };
                }
            }
            else
                throw new error("Semantico", `Error de tipos en el operando ${getName(this.type)}, tipo [${(0, Ret_1.get)(nodoIzq.type)}] con tipo [${(0, Ret_1.get)(nodoDer.type)}]`, this.line, this.column);
        }
        return result;
    }
    ast() {
        const name_nodo = `node_${this.line}_${this.column}_`;
        return `
        ${name_nodo};
        ${name_nodo}[label="${get_simbolo(this.type)}"];
        ${name_nodo}->${this.left.ast()}
        ${name_nodo}->${this.right.ast()}
        `;
    }
}
exports.Operacion = Operacion;
