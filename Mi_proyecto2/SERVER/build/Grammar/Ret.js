"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.Type = void 0;
var Type;
(function (Type) {
    /*0*/ Type[Type["INT"] = 0] = "INT";
    /*1*/ Type[Type["STRING"] = 1] = "STRING";
    /*2*/ Type[Type["BOOLEAN"] = 2] = "BOOLEAN";
    /*3*/ Type[Type["CHAR"] = 3] = "CHAR";
    /*4*/ Type[Type["DOUBLE"] = 4] = "DOUBLE";
    Type[Type["error"] = 5] = "error";
})(Type = exports.Type || (exports.Type = {}));
/**
 *
 * @param objeto Objeto tipo Type
 * @returns String con el nombre del tipo
 */
function get(objeto) {
    switch (objeto) {
        case 0:
            return "int";
        case 1:
            return "string";
        case 2:
            return "boolean";
        case 3:
            return "char";
        case 4:
            return "double";
        default:
            return "";
    }
}
exports.get = get;
