package proyecto_1;

import java.util.LinkedList;

public class Declaracion_var implements Instruccion{
	private String tipo_dato;
	private LinkedList<String> identificadores;
	private Expresion valor;
	public Declaracion_var(LinkedList<String> identificadores, String tipo_dato, Expresion valor) {
		super();
		this.tipo_dato = tipo_dato;
		this.identificadores = identificadores;
		this.valor = valor;
	}
	
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(identificadores != null) {
			for(String id:identificadores) {
				pyt += id.toString()+" = "+valor.Codigo_python().toString()+"\n";
			}
		}
		
		
		
		return pyt;
	}



	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
