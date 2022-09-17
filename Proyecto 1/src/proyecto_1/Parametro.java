package proyecto_1;

import java.util.LinkedList;

public class Parametro implements Instruccion{
	private String id, tipo_dat;
	
	public Parametro(String id, String tipo_dat) {
		this.id= id;
		this.tipo_dat = tipo_dat;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += id;
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
