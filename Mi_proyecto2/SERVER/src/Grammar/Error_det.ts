export class Error_det {
    
    constructor(
        public tipo: string,
        public err: string,
        public linea: number,
        public columna_mia: number
    ) { 


    }
    public obtener_error(){
        console.log("tipo: "+this.tipo+" descripcion: "+this.err+" linea: "+this.linea+" col: "+this.columna_mia)
    }
}


