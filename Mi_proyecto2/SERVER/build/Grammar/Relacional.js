"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relacional = void 0;
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
const Error_det_1 = require("./Error_det");
const Simbolo_rel_1 = require("./Simbolo_rel");
class Relacional extends Expresion_1.Expresion {
    constructor(left, right, type, linea, columna) {
        super(linea, columna);
        this.left = left;
        this.right = right;
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
        const izquierdo = this.left.ejecutar(tabla);
        const derecho = this.right.ejecutar(tabla);
        if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.STRING ||
            izquierdo.type == Ret_1.Type.BOOLEAN && derecho.type == Ret_1.Type.BOOLEAN) {
            switch (this.type) {
                case Simbolo_rel_1.Relational_op.IGUAL:
                    return { value: izquierdo.value == derecho.value, type: Ret_1.Type.BOOLEAN };
                case Simbolo_rel_1.Relational_op.DIFERENCIACION:
                    return { value: izquierdo.value != derecho.value, type: Ret_1.Type.BOOLEAN };
            }
        }
        if (izquierdo.type == Ret_1.Type.INT && derecho.type == Ret_1.Type.INT || izquierdo.type == Ret_1.Type.DOUBLE && derecho.type == Ret_1.Type.DOUBLE) {
            switch (this.type) {
                case Simbolo_rel_1.Relational_op.IGUAL:
                    return { value: izquierdo.value == derecho.value, type: Ret_1.Type.BOOLEAN };
                case Simbolo_rel_1.Relational_op.DIFERENCIACION:
                    return { value: izquierdo.value != derecho.value, type: Ret_1.Type.BOOLEAN };
                case Simbolo_rel_1.Relational_op.MENOR:
                    return { value: izquierdo.value < derecho.value, type: Ret_1.Type.BOOLEAN };
                case Simbolo_rel_1.Relational_op.MENORIGUAL:
                    return { value: izquierdo.value <= derecho.value, type: Ret_1.Type.BOOLEAN };
                case Simbolo_rel_1.Relational_op.MAYOR:
                    return { value: izquierdo.value > derecho.value, type: Ret_1.Type.BOOLEAN };
                case Simbolo_rel_1.Relational_op.MAYORIGUAL:
                    return { value: izquierdo.value >= derecho.value, type: Ret_1.Type.BOOLEAN };
            }
        } //NUMERO CHAR ---------------------------------------------
        else if (izquierdo.type == Ret_1.Type.STRING && derecho.type == Ret_1.Type.INT || derecho.type == Ret_1.Type.DOUBLE) {
            let comprobar_longi = izquierdo.value.length;
            if (comprobar_longi == 1) {
                let ascci_ = this.Convertir(izquierdo.value);
                switch (this.type) {
                    case Simbolo_rel_1.Relational_op.IGUAL:
                        return { value: ascci_ == derecho.value, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.DIFERENCIACION:
                        return { value: ascci_ != derecho.value, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MENOR:
                        return { value: ascci_ < derecho.value, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MENORIGUAL:
                        return { value: ascci_ <= derecho.value, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MAYOR:
                        return { value: ascci_ > derecho.value, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MAYORIGUAL:
                        return { value: ascci_ >= derecho.value, type: Ret_1.Type.BOOLEAN };
                }
            }
        }
        else if (derecho.type == Ret_1.Type.STRING && izquierdo.type == Ret_1.Type.INT || izquierdo.type == Ret_1.Type.DOUBLE) {
            let comprobar_longi = derecho.value.length;
            if (comprobar_longi == 1) {
                let ascci_ = this.Convertir(derecho.value);
                switch (this.type) {
                    case Simbolo_rel_1.Relational_op.IGUAL:
                        return { value: izquierdo.value == ascci_, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.DIFERENCIACION:
                        return { value: izquierdo.value != ascci_, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MENOR:
                        return { value: izquierdo.value < ascci_, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MENORIGUAL:
                        return { value: izquierdo.value <= ascci_, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MAYOR:
                        return { value: izquierdo.value > ascci_, type: Ret_1.Type.BOOLEAN };
                    case Simbolo_rel_1.Relational_op.MAYORIGUAL:
                        return { value: izquierdo.value >= ascci_, type: Ret_1.Type.BOOLEAN };
                }
            }
        }
        throw new Error_det_1.Error_det("Semantico", `Error tipo de datos en operando ${(0, Simbolo_rel_1.getName)(this.type)}, tipo [${(0, Ret_1.get)(izquierdo.type)}] con tipo [${(0, Ret_1.get)(derecho.type)}]`, this.linea, this.columna);
    }
    ast() {
        return `
        
        `;
    }
}
exports.Relacional = Relacional;
