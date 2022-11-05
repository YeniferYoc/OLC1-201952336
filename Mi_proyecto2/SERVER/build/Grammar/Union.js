"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Union = void 0;
let errores = [];
class Union {
    constructor() {
        this.error = [];
        this.ast = "";
        this.entorno = "";
        this.consola = "";
        this.arr = [];
    }
    static getInstance() {
        if (!Union.objeto) {
            Union.objeto = new Union();
        }
        return Union.objeto;
    }
    /**
   * Agrega un error a la lista.
   *
   * @remarks
   * Recibe un objeto {tipo,descripcion, linea, columna} el cual es almacenado con un formato <tr> para presentar como una table en html
   *
   */
    add_error(err_) {
        //let temporal:string = err_.titulo+" "+err_.descripcion
        //console.log(temporal)
        console.log("inserto errror");
        console.log(this.error.length);
        this.error.push(err_);
        errores.push(err_);
        /* this.error +=
             "<tr>" +
             "<td>" + err_.tipo + "</td>" +
             "<td>" + err_.err + "</td>" +
             "<td>" + err_.linea + "</td>" +
             "<td>" + err_.columna_mia + "</td>" +
             "</tr>"*/
    }
    /**
     * err_.obtener_error()
            console.log("\n")
     * @returns un string con el codigo con el formato html para reportar
     */
    get_error() {
        console.log(this.error.length + "si retorno");
        console.log(errores.length);
        return errores;
        /* `
        <table border=1 style="width: 75%;margin: 0 auto;" cellpadding ="5">
            <tr>
                <th>Tipo error</th>
                <th>Descripcion</th>
                <th>Linea</th>
                <th>Columna</th>
            </tr>${this.error}
        </table>`*/
    }
    add_ast(data) {
        this.ast += data;
    }
    get_ast() {
        return this.ast;
    }
    add_consola(data) {
        this.consola += data;
    }
    get_consola() {
        return this.consola;
    }
    /**
     * add_pila
     */
    add_pila(data) {
        this.arr.push(data);
    }
    add_entorno(data) {
        this.entorno += data;
    }
    get_entorno() {
        return this.entorno;
    }
    clear_error() {
        this.error = [];
        errores = [];
    }
    clear_ast() {
        this.ast = "";
    }
    clear_consola() {
        this.consola = "";
    }
    clear_entorno() {
        this.entorno = "";
    }
}
exports.Union = Union;
