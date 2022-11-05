import { Error_det } from "./Error_det"
import { Instruccion } from "./instruccion"
let errores: Error_det[] =[]
export class Union {
    private static objeto: Union
    private error: Error_det[] =[] 
    private ast: string = ""
    private entorno: string = ""
    private consola: string = ""
    private arr: Instruccion[] = []

    private constructor() { }

    public static getInstance(): Union {
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
    public add_error(err_: any) {
        //let temporal:string = err_.titulo+" "+err_.descripcion
        //console.log(temporal)
        console.log("inserto errror")
        console.log(this.error.length)
        this.error.push(err_);
        errores.push(err_)
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
    public get_error() {
        console.log(this.error.length +"si retorno")
        console.log(errores.length)
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

    public add_ast(data: string) {
        this.ast += data
    }
    public get_ast(): string {
        return this.ast
    }
    public add_consola(data: string) {
        this.consola += data
    }
    public get_consola(): string {
        return this.consola
    }
    /**
     * add_pila
     */
    public add_pila(data:Instruccion) {
        this.arr.push(data)
    }
    public add_entorno(data:string){
        this.entorno+=data
    }
    public get_entorno():string{
        return this.entorno
    }
    public clear_error() {
        this.error = []
        errores = [];
    }
    public clear_ast() {
        this.ast = "";
    }
    public clear_consola() {
        this.consola = ""
    }
    public clear_entorno() {
        this.entorno = ""
    }
}