"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso_arr = void 0;
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class Acceso_arr extends Expresion_1.Expresion {
    constructor(id, condicionPop, condicionAsignacion, cast, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.condicionPop = condicionPop;
        this.condicionAsignacion = condicionAsignacion;
        this.cast = cast;
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
        let dot = "";
        //contador += 1;
        //console.log(this.cast)
        if (this.expresion == null) {
            //esta en length
            dot += "nodo" + (contador) + "_len;\n";
            dot += "nodo" + (contador) + "_len" + " [ label =\"LENGTH ARRAY\"];\n";
            dot += "nodo" + (contador) + "_id_len" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_len" + " ->" + "nodo" + (contador) + "_id_len" + "\n";
        }
        else if (this.cast == null) {
            dot += "nodo" + (contador) + "_acc;\n";
            dot += "nodo" + (contador) + "_acc" + " [ label =\"ACCESO ARRAY\"];\n";
            dot += "nodo" + (contador) + "_id_acc" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_acc" + " ->" + "nodo" + (contador) + "_id_acc" + "\n";
            dot += "nodo" + (contador) + "_acc" + " ->" + (this.expresion.ast()) + "\n";
        }
        else {
            console.log("si hay cast");
            dot += "nodo" + (contador) + "_acc;\n";
            dot += "nodo" + (contador) + "_acc" + " [ label =\"ACCESO ARRAY\"];\n";
            dot += "nodo" + (contador) + "_id_acc" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_acc" + " ->" + "nodo" + (contador) + "_id_acc" + "\n";
            dot += "nodo" + (contador) + "_acc" + " ->" + (this.cast.ast()) + "\n";
            dot += (this.expresion.ast()) + "\n";
        }
        contador++;
        return dot;
        /*
        const name_nodo = `node_${this.linea}_${this.column}_`
        
        if(this.condicionAsignacion){
            return `
            ${name_nodo};
            ${name_nodo}[label="${this.id}\\n<\\array\\> "];
            ${name_nodo}
            ${name_nodo}->${this.expresion.ast()}
            `
        }
        if(this.condicionPop){
            return`
            ${name_nodo};
            ${name_nodo}[label="${this.id}\\n<\\array pop\\> "];
            `
        }else{
            return `
            ${name_nodo};
            ${name_nodo}[label="${this.id}\\n<\\array length\\> "];
            `

        }*/ //return ""
    }
}
exports.Acceso_arr = Acceso_arr;
