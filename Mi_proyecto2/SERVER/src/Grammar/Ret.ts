export enum Type {
    /*0*/INT,
    /*1*/STRING,
    /*2*/BOOLEAN,
    /*3*/CHAR,
    /*4*/DOUBLE,
        error
}
/**
 * 
 * @param objeto Objeto tipo Type
 * @returns String con el nombre del tipo 
 */
export function get(objeto: Type): string {
    switch (objeto) {
        case 0:
            return "int"
        case 1:
            return "string"
        case 2:
            return "boolean"
        case 3:
            return "char"
        case 4:
            return "double"
        default:
            return ""
    }
}

export type Retorno = {
    value: any,
    type: Type
}