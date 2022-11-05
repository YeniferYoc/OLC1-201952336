"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso_mat = void 0;
const Error_det_1 = require("./Error_det");
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
let contador = 0;
class Acceso_mat extends Expresion_1.Expresion {
    constructor(id, condicionPop, condicionAsignacion, cast, expresion, cast2, expresion2, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.condicionPop = condicionPop;
        this.condicionAsignacion = condicionAsignacion;
        this.cast = cast;
        this.expresion = expresion;
        this.cast2 = cast2;
        this.expresion2 = expresion2;
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
        if (this.cast != null && this.cast2 != null) {
            dot += "nodo" + (contador) + "_MAT;\n";
            dot += "nodo" + (contador) + "_MAT" + " [ label =\"ACCESO MATRIZ\"];\n";
            dot += "nodo" + (contador) + "_id_MAT" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_MAT" + " ->" + "nodo" + (contador) + "_id_MAT" + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.cast.ast()) + "\n";
            dot += (this.expresion.ast()) + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.cast2.ast()) + "\n";
            dot += (this.expresion2.ast()) + "\n";
        }
        else if (this.cast != null && this.cast2 == null) {
            dot += "nodo" + (contador) + "_MAT;\n";
            dot += "nodo" + (contador) + "_MAT" + " [ label =\"ACCE SO MATRIZ\"];\n";
            dot += "nodo" + (contador) + "_id_MAT" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_MAT" + " ->" + "nodo" + (contador) + "_id_MAT" + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.cast.ast()) + "\n";
            dot += (this.expresion.ast()) + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.expresion2.ast()) + "\n";
        }
        else if (this.cast == null && this.cast2 != null) {
            console.log("hay casteo en 2");
            dot += "nodo" + (contador) + "_MAT;\n";
            dot += "nodo" + (contador) + "_MAT" + " [ label =\"ACCESO MATRIZ\"];\n";
            dot += "nodo" + (contador) + "_id_MAT" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_MAT" + " ->" + "nodo" + (contador) + "_id_MAT" + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.cast2.ast()) + "\n";
            dot += (this.expresion2.ast()) + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.expresion.ast()) + "\n";
        }
        else {
            dot += "nodo" + (contador) + "_MAT;\n";
            dot += "nodo" + (contador) + "_MAT" + " [ label =\"ACCESO MATRIZ\"];\n";
            dot += "nodo" + (contador) + "_id_MAT" + " [ label =\"" + this.id.toString() + "\"];\n";
            dot += "nodo" + (contador) + "_MAT" + " ->" + "nodo" + (contador) + "_id_MAT" + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.expresion.ast()) + "\n";
            dot += "nodo" + (contador) + "_id_MAT" + " ->" + (this.expresion2.ast()) + "\n";
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
exports.Acceso_mat = Acceso_mat;
