"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logica = void 0;
const Expresion_1 = require("./Expresion");
const Ret_1 = require("./Ret");
const Error_det_1 = require("./Error_det");
const Logico_op_1 = require("./Logico_op");
let contador = 0;
class Logica extends Expresion_1.Expresion {
    constructor(iz, der, tipo, linea, columna) {
        super(linea, columna);
        this.iz = iz;
        this.der = der;
        this.tipo = tipo;
    }
    ejecutar(tabla) {
        const valueIzq = this.iz.ejecutar(tabla);
        //asegurarse que el tipo es boolean
        if (valueIzq.type != Ret_1.Type.BOOLEAN) {
            throw new Error_det_1.Error_det("Semantico", `Error tipos en operando ${(0, Logico_op_1.getName)(this.tipo)}, tipo [${(0, Ret_1.get)(valueIzq.type)}] debe ser Booleano`, this.linea, this.columna);
        }
        //corto circuito operador AND y OR
        if (Boolean(valueIzq.value) == false && this.tipo == Logico_op_1.Logico_op.AND) {
            return { value: false, type: Ret_1.Type.BOOLEAN };
        }
        else if (Boolean(valueIzq.value) == true && this.tipo == Logico_op_1.Logico_op.OR) {
            return { value: true, type: Ret_1.Type.BOOLEAN };
        }
        const valueDer = this.der.ejecutar(tabla);
        //asegurarse que el tipo es boolean
        if (valueDer.type != Ret_1.Type.BOOLEAN) {
            throw new Error_det_1.Error_det("Semantico", `Error tipos en operando ${(0, Logico_op_1.getName)(this.tipo)}, tipo [${(0, Ret_1.get)(valueDer.type)}] debe ser Booleano`, this.linea, this.columna);
        }
        switch (this.tipo) {
            case Logico_op_1.Logico_op.AND:
                return { value: valueIzq.value && valueDer.value, type: Ret_1.Type.BOOLEAN };
            case Logico_op_1.Logico_op.OR:
                return { value: valueIzq.value || valueDer.value, type: Ret_1.Type.BOOLEAN };
            case Logico_op_1.Logico_op.NOT:
                return { value: !valueDer.value, type: Ret_1.Type.BOOLEAN };
            default:
                return { value: null, type: Ret_1.Type.error };
        }
    }
    ast() {
        let dot = "";
        contador++;
        dot += "nodo" + (contador) + "_lo;\n";
        dot += "nodo" + (contador) + "_lo" + " [ label =\"" + (0, Logico_op_1.getSimbol)(this.tipo) + " \"];\n";
        //dot+="nodo"+(contador)+"_lo"+" ->"+(this.iz.ast())+"\n";	
        //dot+="nodo"+(contador)+"_lo ->"+(this.der.ast())+"\n";
        // return dot;
        if (this.tipo == Logico_op_1.Logico_op.NOT) {
            //console.log("es negacion  ")
            dot += "nodo" + (contador) + "_lo ->" + (this.der.ast()) + "\n";
            return dot;
        }
        else {
            dot += "nodo" + (contador) + "_lo" + " ->" + (this.iz.ast()) + "\n";
            dot += "nodo" + (contador) + "_lo ->" + (this.der.ast()) + "\n";
            return dot;
        }
    }
}
exports.Logica = Logica;
