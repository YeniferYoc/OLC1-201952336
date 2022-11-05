export enum Logico_op {
    /*0*/AND,
    /*1*/OR,
    /*2*/NOT,
    PARENTESIS,
    CORCHETES
}

/**
 * 
 * @param objeto logicaloption
 * @returns el simbolo logico que se envio y retorna como string
 */
export function getSimbol(objeto: Logico_op): string {
    switch (objeto) {
        case 0:
            return "&&"
        case 1:
            return "\\|\\|"
        case 2:
            return "!"
            case 3:
                return "()"
            case 4:
                return "[]"
    }
    return ""
}
/**
 * 
 * @param objeto logicalOption
 * @returns nombre del simbolo que se envio y retorna como string 
 */
export function getName(objeto: Logico_op): string {
    switch (objeto) {
        case 0:
            return "AND"
        case 1:
            return "OR"
        case 2:
            return "NOT"
    }
    return ""
}