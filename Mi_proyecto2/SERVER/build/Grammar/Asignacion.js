"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const Error_det_1 = require("./Error_det");
const instruccion_1 = require("./instruccion");
const Ret_1 = require("./Ret");
class Asignacion extends instruccion_1.Instruccion {
    constructor(identificadores, value, linea, columna) {
        super(linea, columna);
        this.identificadores = identificadores;
        this.value = value;
    }
    ejecutar(tabla) {
        const expresion = this.value.ejecutar(tabla);
        if (this.identificadores != null) {
            this.identificadores.forEach(nombre => {
                var variable = tabla.obtener_variable(nombre);
                //validar que todo este bien antes de actualizar la variable
                if (variable == null || variable == undefined)
                    throw new Error_det_1.Error_det("Semantico", `Variable inexistente '${nombre}'`, this.linea, this.columna);
                if ((variable === null || variable === void 0 ? void 0 : variable.tipo) != expresion.type)
                    throw new Error_det_1.Error_det("Semantico", `Asignacion incorrecta, la variable '${nombre}' es de tipo [${(0, Ret_1.get)(variable === null || variable === void 0 ? void 0 : variable.tipo)}] y se le esta tratando de asignar un tipo [${(0, Ret_1.get)(expresion.type)}]`, this.linea, this.columna);
                tabla.actualizar_variable(nombre, expresion.value);
            });
        }
    }
    ast() {
        /*
                const s = Singleton.getInstance()
                const nombre_nodo =`node_${this.line}_${this.column}_`
                s.add_ast(`
                ${nombre_nodo}[label="\\<Instruccion\\>\\nAsignacion"];
                ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
                ${nombre_nodo}->${nombre_nodo}1;
                ${nombre_nodo}->${this.value.ast()}
                `)*/
    }
}
exports.Asignacion = Asignacion;
