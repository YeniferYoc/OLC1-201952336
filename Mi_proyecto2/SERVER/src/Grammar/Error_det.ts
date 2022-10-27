export class Error_det {
    
    constructor(
        public tipo: string,
        public err: string,
        public linea: number,
        public columna: number
    ) { }
}


