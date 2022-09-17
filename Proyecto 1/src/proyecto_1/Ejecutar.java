package proyecto_1;

import java.util.LinkedList;

public class Ejecutar implements Instruccion{
	private String id;
	private LinkedList<Parametro> parametros;
	public Ejecutar(String id) {
		this.id = id;
	}
	public Ejecutar(String id,  LinkedList<Parametro> parametros) {
		this.id = id;
		this.parametros = parametros;
	}
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "if __name__ == \"__main__\":";
		pyt += id+"(";
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				pyt += parametros.get(i).Codigo_python().toString();
				if(i == parametros.size()-1){
					pyt += ",";
				}
				
			}
		}
		pyt += ") \n";
		
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}

