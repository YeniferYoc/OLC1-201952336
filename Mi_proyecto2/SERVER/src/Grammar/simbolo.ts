import { Type } from "./Ret";

export class Simbolo {
    /**
     * Clase que guarda toda la informacion importante de una variable y despues sera almacenada en la tabla de simbolos
     */
    constructor(
        public valor: any,
        public id: string,
        public tipo: Type
    ) {

    }
}