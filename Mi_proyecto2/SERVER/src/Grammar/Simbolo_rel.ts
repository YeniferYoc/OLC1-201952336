export enum Relational_op {
    /*0*/IGUAL,
    /*1*/DIFERENCIACION,
    /*2*/MENOR,
    /*3*/MENORIGUAL,
    /*4*/MAYOR,
    /*5*/MAYORIGUAL,
        PARENTESIS,
        CORCHETES
}

/**
 * 
 * @param objeto el relationalOpcion
 * @returns simbolo del signo relacional en string 
 */
export function get_simbolo(objeto: Relational_op): string {
    switch (objeto) {
        case 0:
            return "=="
        case 1:
            return "!="
        case 2:
            return "\\<"
        case 3:
            return "\\<="
        case 4:
            return "\\>"
        case 5:
            return "\\>="
            case 6:
                return "()"
            case 7:
                return "[]"
        default:
            return ""
    }
}
/**
 * 
 * @param objeto enum relacional
 * @returns devuelve el nombre del simbolo relacional como tipo string
 */
export function getName(objeto: Relational_op): string {
    switch (objeto) {
        case 0:
            return "igualdad"
        case 1:
            return "diferencia"
        case 2:
            return "menor"
        case 3:
            return "menorIgualQue"
        case 4:
            return "mayor"
        case 5:
            return "mayorIgualQue"
        default:
            return ""
    }
}