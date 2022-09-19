package proyecto_1;

import java.util.LinkedList;

public class Identificador implements Instruccion{
	private String nombre;
	public Identificador(String nombre) {
		super();
		this.nombre = nombre;
	}
	
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(nombre != null) {
			pyt += nombre.toString();
		}
		
		
		
		return pyt;
	}



	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String CodigoDot() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
