"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNombre_op = exports.get_simbolo_op = exports.Aritmetic_s = void 0;
var Aritmetic_s;
(function (Aritmetic_s) {
    /*0*/ Aritmetic_s[Aritmetic_s["MAS"] = 0] = "MAS";
    /*1*/ Aritmetic_s[Aritmetic_s["MENOS"] = 1] = "MENOS";
    /*2*/ Aritmetic_s[Aritmetic_s["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    /*3*/ Aritmetic_s[Aritmetic_s["DIV"] = 3] = "DIV";
    /*4*/ Aritmetic_s[Aritmetic_s["MODULO"] = 4] = "MODULO";
    /*5*/ Aritmetic_s[Aritmetic_s["POT"] = 5] = "POT";
    /*6*/ Aritmetic_s[Aritmetic_s["NEGACION"] = 6] = "NEGACION";
    Aritmetic_s[Aritmetic_s["PARENTESIS"] = 7] = "PARENTESIS";
    Aritmetic_s[Aritmetic_s["CORCHETES"] = 8] = "CORCHETES";
})(Aritmetic_s = exports.Aritmetic_s || (exports.Aritmetic_s = {}));
/**
 *
 * @param objeto Enum ArithmeticOption
 * @return simbolo como string
 */
function get_simbolo_op(objeto) {
    //console.log("esta en op simpo")
    switch (objeto) {
        case 0:
            return "+";
        case 1:
            return "-";
        case 2:
            return "*";
        case 3:
            return "/";
        case 4:
            return "%";
        case 5:
            return "^";
        case 6:
            return "-";
        case 7:
            return "()";
        case 8:
            return "[]";
        default:
            return "";
    }
}
exports.get_simbolo_op = get_simbolo_op;
/**
 *
 * @param objeto Enum ArithmeticOption
 * @return nombre del simbolo en string
 */
function getNombre_op(objeto) {
    switch (objeto) {
        case 0:
            return "suma";
        case 1:
        case 6:
            return "resta";
        case 2:
            return "mutiplicacion";
        case 3:
            return "division";
        case 4:
            return "modulo";
        case 5:
            return "potencia";
        default:
            return "";
    }
}
exports.getNombre_op = getNombre_op;
