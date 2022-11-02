"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.getSimbol = exports.Logico_op = void 0;
var Logico_op;
(function (Logico_op) {
    /*0*/ Logico_op[Logico_op["AND"] = 0] = "AND";
    /*1*/ Logico_op[Logico_op["OR"] = 1] = "OR";
    /*2*/ Logico_op[Logico_op["NOT"] = 2] = "NOT";
})(Logico_op = exports.Logico_op || (exports.Logico_op = {}));
/**
 *
 * @param objeto logicaloption
 * @returns el simbolo logico que se envio y retorna como string
 */
function getSimbol(objeto) {
    switch (objeto) {
        case 0:
            return "&&";
        case 1:
            return "\\|\\|";
        case 2:
            return "!";
    }
    return "";
}
exports.getSimbol = getSimbol;
/**
 *
 * @param objeto logicalOption
 * @returns nombre del simbolo que se envio y retorna como string
 */
function getName(objeto) {
    switch (objeto) {
        case 0:
            return "AND";
        case 1:
            return "OR";
        case 2:
            return "NOT";
    }
    return "";
}
exports.getName = getName;
