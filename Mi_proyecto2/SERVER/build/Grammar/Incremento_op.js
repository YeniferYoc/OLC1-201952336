"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getsimbol = exports.getname = exports.Incremento_op = void 0;
var Incremento_op;
(function (Incremento_op) {
    /*0*/ Incremento_op[Incremento_op["INCREMENTO1"] = 0] = "INCREMENTO1";
    /*1*/ Incremento_op[Incremento_op["INCREMENTO2"] = 1] = "INCREMENTO2";
    /*2*/ Incremento_op[Incremento_op["DECREMENTO1"] = 2] = "DECREMENTO1";
    /*3*/ Incremento_op[Incremento_op["DECREMENTO2"] = 3] = "DECREMENTO2"; /*--ID*/
})(Incremento_op = exports.Incremento_op || (exports.Incremento_op = {}));
function getname(objeto) {
    switch (objeto) {
        case 0:
        case 1:
            return "incremento";
        case 2:
        case 3:
            return "decremetno";
        default:
            return "";
    }
}
exports.getname = getname;
function getsimbol(objeto) {
    switch (objeto) {
        case 0:
        case 1:
            return "++";
        case 2:
        case 3:
            return "--";
        default:
            return "";
    }
}
exports.getsimbol = getsimbol;
