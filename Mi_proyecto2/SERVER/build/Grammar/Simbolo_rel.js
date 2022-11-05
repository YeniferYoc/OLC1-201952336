"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.get_simbolo = exports.Relational_op = void 0;
var Relational_op;
(function (Relational_op) {
    /*0*/ Relational_op[Relational_op["IGUAL"] = 0] = "IGUAL";
    /*1*/ Relational_op[Relational_op["DIFERENCIACION"] = 1] = "DIFERENCIACION";
    /*2*/ Relational_op[Relational_op["MENOR"] = 2] = "MENOR";
    /*3*/ Relational_op[Relational_op["MENORIGUAL"] = 3] = "MENORIGUAL";
    /*4*/ Relational_op[Relational_op["MAYOR"] = 4] = "MAYOR";
    /*5*/ Relational_op[Relational_op["MAYORIGUAL"] = 5] = "MAYORIGUAL";
    Relational_op[Relational_op["PARENTESIS"] = 6] = "PARENTESIS";
    Relational_op[Relational_op["CORCHETES"] = 7] = "CORCHETES";
})(Relational_op = exports.Relational_op || (exports.Relational_op = {}));
/**
 *
 * @param objeto el relationalOpcion
 * @returns simbolo del signo relacional en string
 */
function get_simbolo(objeto) {
    switch (objeto) {
        case 0:
            return "==";
        case 1:
            return "!=";
        case 2:
            return "\\<";
        case 3:
            return "\\<=";
        case 4:
            return "\\>";
        case 5:
            return "\\>=";
        case 6:
            return "()";
        case 7:
            return "[]";
        default:
            return "";
    }
}
exports.get_simbolo = get_simbolo;
/**
 *
 * @param objeto enum relacional
 * @returns devuelve el nombre del simbolo relacional como tipo string
 */
function getName(objeto) {
    switch (objeto) {
        case 0:
            return "igualdad";
        case 1:
            return "diferencia";
        case 2:
            return "menor";
        case 3:
            return "menorIgualQue";
        case 4:
            return "mayor";
        case 5:
            return "mayorIgualQue";
        default:
            return "";
    }
}
exports.getName = getName;
