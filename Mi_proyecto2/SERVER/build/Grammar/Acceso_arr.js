"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso_arr = void 0;
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
class Acceso_arr extends Expresion_1.Expresion {
    constructor(id, condicionPop, condicionAsignacion, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.condicionPop = condicionPop;
        this.condicionAsignacion = condicionAsignacion;
        this.expresion = expresion;
    }
    ejecutar(tabla) {
        let result;
        var objeto = tabla.get_array(this.id);
        if (objeto == undefined) {
            throw new Error_det_1.Error_det("Semantico", `Este array '${this.id}' no existe `, this.linea, this.columna);
        }
        //return { type: 0, value: 0 }
        var array = objeto.contenido;
        if (this.condicionAsignacion) {
            //...= ID . [ Expre ]
            const expresion = this.expresion.ejecutar(tabla);
            if (expresion.type != Ret_1.Type.INT)
                throw new Error_det_1.Error_det("Semantico", `El tipo de dato del index no valido`, this.linea, this.columna);
            if (objeto.tipo.toLowerCase() == "string")
                result = { value: array[expresion.value], type: Ret_1.Type.STRING };
            else if (objeto.tipo.toLowerCase() == "int")
                result = { value: array[expresion.value], type: Ret_1.Type.INT };
            else if (objeto.tipo.toLowerCase() == "double")
                result = { value: array[expresion.value], type: Ret_1.Type.DOUBLE };
            else if (objeto.tipo == "char")
                result = { value: array[expresion.value], type: Ret_1.Type.CHAR };
            else
                result = { value: array[expresion.value], type: Ret_1.Type.BOOLEAN };
            return result;
        }
        else {
            //length
            result = { value: array.length, type: Ret_1.Type.INT };
        }
        return result;
    }
    ast() {
        return "";
    }
}
exports.Acceso_arr = Acceso_arr;
